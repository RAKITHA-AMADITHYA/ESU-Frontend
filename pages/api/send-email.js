import formidable from 'formidable';
import nodemailer from 'nodemailer';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

export const config = {
  api: {
    bodyParser: false,
  },
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

const parseForm = (req) => {
  return new Promise((resolve, reject) => {
    const options = {
      maxFileSize: 5 * 1024 * 1024,
    };

    const form = formidable(options);

    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ fields, files });
    });
  });
};

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  try {
    const { fields, files } = await parseForm(req);

    let attachments = [];
    if (files.file) {
      const file = files.file;
      attachments.push({
        filename: file.originalFilename,
        path: file.filepath,
        contentType: 'application/pdf' // Ensure correct MIME type
      });
    }

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: 'New Contact Form Submission',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <h2 style="color: #333; text-align: center;">New Contact Form Submission</h2>
          <div style="background-color: #fff; padding: 20px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <p style="margin-bottom: 10px;"><strong>Name:</strong> ${fields.firstName} ${fields.lastName}</p>
            <p style="margin-bottom: 10px;"><strong>Email:</strong> ${fields.email}</p>
            <p style="margin-bottom: 10px;"><strong>Contact:</strong> ${fields.contact}</p>
            <p style="margin-bottom: 10px;"><strong>Nationality:</strong> ${fields.nationality}</p>
            <p style="margin-bottom: 10px;"><strong>ID Type:</strong> ${fields.nicPassport}</p>
            <p style="margin-bottom: 10px;"><strong>Academic Programme:</strong> ${fields.academicProgramme}</p>
            <p style="margin-bottom: 10px;"><strong>Branch:</strong> ${fields.branch}</p>
            <p style="margin-bottom: 10px;"><strong>Message:</strong> ${fields.message}</p>
          </div>
        </div>
      `,
      attachments: attachments,
    };

    await transporter.sendMail(mailOptions);

    if (files.file && files.file.filepath) {
      fs.unlinkSync(files.file.filepath);
    }

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
}

export default handler;
