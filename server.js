import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Nodemailer Gmail SMTP Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || 'neelnp2411@gmail.com',
    pass: process.env.GMAIL_APP_PASS || 'ehnl osrv hieg fxqd',
  },
});

// Verify SMTP connection on server startup
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Gmail SMTP Verification Failed:', error.message);
  } else {
    console.log('✅ Gmail SMTP Server is ready to send emails to neelnp2411@gmail.com');
  }
});

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please fill in all required fields (Name, Email, Message).',
    });
  }

  const mailOptions = {
    from: `"Neel Patel Portfolio" <${process.env.GMAIL_USER || 'neelnp2411@gmail.com'}>`,
    to: 'neelnp2411@gmail.com',
    replyTo: email,
    subject: `📬 New Portfolio Inquiry from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #07090e; color: #ffffff; padding: 30px; border-radius: 12px; border: 1px solid #6366f1;">
        <h2 style="color: #38bdf8; border-b: 1px solid #334155; padding-bottom: 10px;">
          📬 New Direct Message from Portfolio
        </h2>
        
        <p style="font-size: 14px; color: #cbd5e1;">
          You received a new inquiry submitted through your portfolio website contact form.
        </p>

        <div style="background-color: #111522; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #1e293b;">
          <p style="margin: 8px 0;"><strong style="color: #38bdf8;">Sender Name:</strong> ${name}</p>
          <p style="margin: 8px 0;"><strong style="color: #38bdf8;">Sender Email:</strong> <a href="mailto:${email}" style="color: #818cf8;">${email}</a></p>
          <p style="margin: 8px 0;"><strong style="color: #38bdf8;">Received At:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
        </div>

        <div style="background-color: #181d2e; padding: 20px; border-radius: 8px; border-left: 4px solid #6366f1;">
          <h3 style="margin-top: 0; color: #f8fafc;">Message Details:</h3>
          <p style="white-space: pre-wrap; color: #e2e8f0; line-height: 1.6;">${message}</p>
        </div>

        <p style="font-size: 12px; color: #64748b; margin-top: 25px; border-t: 1px solid #1e293b; pt: 15px;">
          Reply directly to this email to respond to ${name} (${email}).
        </p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✉️ Email dispatched successfully! Message ID:', info.messageId);
    return res.status(200).json({
      success: true,
      message: 'Your message has been sent directly to neelnp2411@gmail.com inbox!',
      messageId: info.messageId,
    });
  } catch (error) {
    console.error('❌ Error sending email via Nodemailer:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to dispatch email. Please try again or use direct mailto link.',
      details: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio Backend Email API running at http://localhost:${PORT}`);
});
