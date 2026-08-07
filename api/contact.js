import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER || 'neelnp2411@gmail.com',
      pass: process.env.GMAIL_APP_PASS || 'ehnl osrv hieg fxqd',
    },
  });

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
    return res.status(200).json({
      success: true,
      message: 'Your message has been sent directly to neelnp2411@gmail.com inbox!',
      messageId: info.messageId,
    });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to dispatch email.',
      details: error.message,
    });
  }
}
