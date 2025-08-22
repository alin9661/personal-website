import { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';

interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  reason: string;
  message: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, reason, message }: ContactSubmission = req.body;

  // Validation
  if (!name || !email || !reason || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    // Rate limiting check - limit to 3 submissions per IP per hour
    const clientIP = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown';
    
    const recentSubmissions = await sql`
      SELECT COUNT(*) as count FROM contact_submissions 
      WHERE ip_address = ${clientIP as string}
      AND created_at > NOW() - INTERVAL '1 hour'
    `;

    if (recentSubmissions.rows[0]?.count >= 3) {
      return res.status(429).json({ error: 'Too many submissions. Please try again later.' });
    }

    // Insert submission into database
    await sql`
      INSERT INTO contact_submissions 
      (name, email, company, reason, message, ip_address, user_agent, created_at)
      VALUES 
      (${name}, ${email}, ${company || null}, ${reason}, ${message}, 
       ${clientIP as string}, ${req.headers['user-agent'] || 'unknown'}, NOW())
    `;

    // TODO: Send email notification (optional)
    // await sendEmailNotification({ name, email, message });

    return res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message! I\'ll get back to you soon.' 
    });

  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}