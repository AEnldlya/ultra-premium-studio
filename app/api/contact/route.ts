import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

// Create email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'studio.aureum.reachout@gmail.com',
    pass: process.env.EMAIL_PASS || '', // App password needed
  },
});

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Add timestamp
    const submission = {
      ...data,
      submittedAt: new Date().toISOString(),
      id: Date.now().toString(),
    };

    // Save to JSON file
    const submissionsPath = path.join(process.cwd(), 'submissions.json');
    let submissions = [];
    
    if (fs.existsSync(submissionsPath)) {
      const fileContent = fs.readFileSync(submissionsPath, 'utf8');
      submissions = JSON.parse(fileContent);
    }
    
    submissions.push(submission);
    fs.writeFileSync(submissionsPath, JSON.stringify(submissions, null, 2));

    // Send email notification
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
      <p><strong>Budget:</strong> ${data.budget || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><em>Submitted at: ${submission.submittedAt}</em></p>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER || 'studio.aureum.reachout@gmail.com',
      to: 'studio.aureum.reachout@gmail.com',
      subject: `New Contact Form Submission from ${data.name}`,
      html: emailHtml,
      replyTo: data.email,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Continue even if email fails - data is saved
    }

    // Log to console for immediate notification
    console.log('\n🚨 NEW FORM SUBMISSION 🚨');
    console.log('========================');
    console.log(`Name: ${data.name}`);
    console.log(`Email: ${data.email}`);
    console.log(`Company: ${data.company || 'N/A'}`);
    console.log(`Budget: ${data.budget || 'N/A'}`);
    console.log(`Message: ${data.message}`);
    console.log(`Time: ${submission.submittedAt}`);
    console.log('========================\n');

    return NextResponse.json({ success: true, id: submission.id });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json({ success: false, error: 'Failed to save submission' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const submissionsPath = path.join(process.cwd(), 'submissions.json');
    
    if (!fs.existsSync(submissionsPath)) {
      return NextResponse.json({ submissions: [] });
    }
    
    const fileContent = fs.readFileSync(submissionsPath, 'utf8');
    const submissions = JSON.parse(fileContent);
    
    return NextResponse.json({ submissions });
  } catch (error) {
    console.error('Error reading submissions:', error);
    return NextResponse.json({ submissions: [] });
  }
}
