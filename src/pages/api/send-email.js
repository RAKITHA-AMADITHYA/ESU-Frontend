import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const formData = await req.formData();
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      }
    });

    const mailOptions = {
      from: 'segix24317@3dboxer.com',
      to: process.env.GMAIL_USER,
      subject: 'New ESU Application Submission',
      html: `
        <h2>New Application Details</h2>
        <p><strong>Name:</strong> ${formData.get('firstName')} ${formData.get('lastName')}</p>
        <p><strong>Email:</strong> ${formData.get('email')}</p>
        <p><strong>Contact:</strong> ${formData.get('contact')}</p>
        <p><strong>Nationality:</strong> ${formData.get('nationality')}</p>
        <p><strong>ID Type:</strong> ${formData.get('nicPassport')}</p>
        <p><strong>Programme:</strong> ${formData.get('academicProgramme')}</p>
        <p><strong>Branch:</strong> ${formData.get('branch')}</p>
        <p><strong>Message:</strong> ${formData.get('message')}</p>
      `,
      attachments: [
        // ...existing code...
      ]
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
