import { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';

export interface RateLimitConfig {
  readonly windowMs: number;
  readonly maxRequests: number;
}

// Simple in-memory rate limiting (in production, use Redis)
const requestCounts = new Map<string, { count: number; resetTime: number }>();

export const rateLimit = (config: RateLimitConfig) => {
  return (req: VercelRequest, res: VercelResponse, next: () => void): void => {
    const clientIP = getClientIP(req);
    const now = Date.now();
    const windowStart = now - config.windowMs;
    
    // Clean up old entries
    for (const [ip, data] of requestCounts.entries()) {
      if (data.resetTime < windowStart) {
        requestCounts.delete(ip);
      }
    }
    
    const currentData = requestCounts.get(clientIP);
    
    if (!currentData) {
      requestCounts.set(clientIP, { count: 1, resetTime: now + config.windowMs });
      return next();
    }
    
    if (currentData.resetTime < now) {
      requestCounts.set(clientIP, { count: 1, resetTime: now + config.windowMs });
      return next();
    }
    
    if (currentData.count >= config.maxRequests) {
      res.status(429).json({
        success: false,
        error: 'Too many requests. Please try again later.',
      });
      return;
    }
    
    currentData.count++;
    next();
  };
};

export const validateSchema = <T>(schema: z.ZodSchema<T>) => {
  return (req: VercelRequest, res: VercelResponse, next: () => void): void => {
    try {
      const result = schema.safeParse(req.body);
      
      if (!result.success) {
        const errors = result.error.issues.map(issue => ({
          field: issue.path.join('.'),
          message: issue.message,
        }));
        
        res.status(400).json({
          success: false,
          error: 'Validation failed',
          details: errors,
        });
        return;
      }
      
      req.body = result.data;
      next();
    } catch (error) {
      res.status(400).json({
        success: false,
        error: 'Invalid request body',
      });
    }
  };
};

export const corsMiddleware = (req: VercelRequest, res: VercelResponse, next: () => void): void => {
  const allowedOrigins = [
    'https://your-domain.com',
    'https://www.your-domain.com',
  ];
  
  // In development, allow localhost
  if (process.env.NODE_ENV === 'development') {
    allowedOrigins.push('http://localhost:5173', 'http://127.0.0.1:5173');
  }
  
  const origin = req.headers.origin;
  
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Max-Age', '86400');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  next();
};

export const securityHeaders = (req: VercelRequest, res: VercelResponse, next: () => void): void => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Content-Security-Policy', "default-src 'self'");
  
  next();
};

export const getClientIP = (req: VercelRequest): string => {
  const forwarded = req.headers['x-forwarded-for'];
  const realIP = req.headers['x-real-ip'];
  
  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0]?.trim() || 'unknown';
  }
  
  if (typeof realIP === 'string') {
    return realIP.trim();
  }
  
  return req.socket?.remoteAddress || 'unknown';
};

export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/on\w+=/gi, ''); // Remove event handlers
};