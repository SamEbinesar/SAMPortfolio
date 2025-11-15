import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS (optional but safe)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Environment variables must be set in Vercel
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || '465');
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const receiverMail = process.env.MY_MAIL;

    if (!smtpUser || !smtpPass || !receiverMail) {
      return res.status(500).json({
        success: false,
        message: 'Email service not configured properly.',
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,  // secure true only for port 465
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const escapeHtml = (text) => {
      const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      };
      return text.replace(/[&<>"']/g, m => map[m]);
    };

    const mailOptions = {
      from: smtpUser,
      to: receiverMail,
      subject: `Portfolio Contact Form - ${escapeHtml(name)}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial; max-width: 600px; margin: auto;">
          <h2 style="color: #00d4ff;">New Message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong><br>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    return res.status(200).json({
      success: true,
      message: 'Email sent successfully!',
      id: info.messageId
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to send email.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}
