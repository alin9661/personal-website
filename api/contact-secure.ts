import { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';
import { ContactFormSchema } from '../src/core/api/schemas';
import {
  rateLimit,
  validateSchema,
  corsMiddleware,
  securityHeaders,
  getClientIP,
  sanitizeInput,
} from '../src/core/api/middleware';

// Rate limiting: 3 requests per hour per IP
const rateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  maxRequests: 3,
});

const validator = validateSchema(ContactFormSchema);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Apply middleware
  try {
    await new Promise<void>((resolve, reject) => {
      securityHeaders(req, res, () => {
        corsMiddleware(req, res, () => {
          if (req.method !== 'POST') {
            res.status(405).json({
              success: false,
              error: 'Method not allowed',
            });
            return;
          }
          
          rateLimiter(req, res, () => {
            validator(req, res, () => resolve());
          });
        });
      });
    });
  } catch (error) {
    // Middleware already handled the response
    return;
  }

  try {
    const { name, email, company, reason, message } = req.body;
    const clientIP = getClientIP(req);
    const userAgent = req.headers['user-agent'] || 'unknown';
    const timestamp = new Date().toISOString();

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      company: company ? sanitizeInput(company) : null,
      reason: sanitizeInput(reason),
      message: sanitizeInput(message),
    };

    // Additional security checks
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /vbscript:/i,
      /onload=/i,
      /onerror=/i,
    ];

    const allInputs = Object.values(sanitizedData).join(' ');
    if (suspiciousPatterns.some(pattern => pattern.test(allInputs))) {
      res.status(400).json({
        success: false,
        error: 'Invalid input detected',
      });
      return;
    }

    // Check for database table existence and create if needed
    await sql`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL,
        company VARCHAR(100),
        reason VARCHAR(50) NOT NULL,
        message TEXT NOT NULL,
        ip_address VARCHAR(45),
        user_agent TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        status VARCHAR(20) DEFAULT 'unread'
      )
    `;

    // Create indexes if they don't exist
    await sql`
      CREATE INDEX IF NOT EXISTS idx_contact_email ON contact_submissions(email);
      CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_submissions(created_at);
      CREATE INDEX IF NOT EXISTS idx_contact_ip_created ON contact_submissions(ip_address, created_at);
    `;

    // Insert the submission
    const result = await sql`
      INSERT INTO contact_submissions 
      (name, email, company, reason, message, ip_address, user_agent, created_at)
      VALUES 
      (${sanitizedData.name}, ${sanitizedData.email}, ${sanitizedData.company}, 
       ${sanitizedData.reason}, ${sanitizedData.message}, ${clientIP}, ${userAgent}, ${timestamp})
      RETURNING id
    `;

    // Log successful submission (without sensitive data)
    console.log(`Contact form submission: ID ${result.rows[0]?.id}, IP: ${clientIP}`);

    res.status(200).json({
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Don't expose internal errors to the client
    res.status(500).json({
      success: false,
      error: 'An unexpected error occurred. Please try again later.',
    });
  }
}