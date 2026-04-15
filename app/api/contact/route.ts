import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body || {};
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Create SMTP transporter using environment variables
    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
    const secure = process.env.SMTP_SECURE === 'true' || port === 465; // true for 465, false for 587
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
      // If SMTP not configured, log and return informative error
      console.error('SMTP not configured. Set SMTP_HOST, SMTP_USER and SMTP_PASS.');
      return NextResponse.json({ error: 'SMTP not configured on server' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    // Optionally verify transporter (can help debug configuration)
    try {
      await transporter.verify();
    } catch (verifyErr) {
      console.error('SMTP verify failed', verifyErr);
      // continue and attempt to send — verification failing often indicates creds/connection issues
    }

    const mailOptions = {
      from: process.env.EMAIL_FROM || `Website Contact <${user}>`,
      to: process.env.EMAIL_TO || 'ayushworksin@gmail.com',
      subject: `New message from ${name}`,
      text: `Message:\n${message}\n\nFrom: ${name} <${email}>`,
      html: `<p>${(message || '').replace(/\n/g, '<br/>')}</p><hr/><p>From: ${name} &lt;${email}&gt;</p>`,
    } as const;

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
