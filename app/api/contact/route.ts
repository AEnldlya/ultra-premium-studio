import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

// Create email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'studio.aureum.reachout@gmail.com',
    pass: process.env.EMAIL_PASS || '',
  },
});

export async function POST(request: NextRequest) {
  try {
    console.log('API: Received contact form submission');
    
    let data;
    try {
      data = await request.json();
      console.log('API: Parsed data:', data);
    } catch (parseError) {
      console.error('API: Failed to parse JSON:', parseError);
      return NextResponse.json({ success: false, error: 'Invalid JSON data' }, { status: 400 });
    }
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      console.error('API: Missing required fields');
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }
    
    // Add timestamp
    const submission = {
      ...data,
      submittedAt: new Date().toISOString(),
      id: Date.now().toString(),
    };

    // Save to JSON file
    try {
      const submissionsPath = path.join(process.cwd(), 'submissions.json');
      let submissions = [];
      
      if (fs.existsSync(submissionsPath)) {
        const fileContent = fs.readFileSync(submissionsPath, 'utf8');
        submissions = JSON.parse(fileContent);
      }
      
      submissions.push(submission);
      fs.writeFileSync(submissionsPath, JSON.stringify(submissions, null, 2));
      console.log('API: Saved to file successfully');
    } catch (fileError) {
      console.error('API: File save error:', fileError);
      // Continue even if file save fails
    }

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
      console.log('API: Attempting to send email...');
      console.log('API: Email user:', process.env.EMAIL_USER || 'studio.aureum.reachout@gmail.com');
      console.log('API: Has password:', !!process.env.EMAIL_PASS);
      
      const emailResult = await transporter.sendMail(mailOptions);
      console.log('API: Email sent successfully:', emailResult.messageId);
    } catch (emailError: any) {
      console.error('API: Email sending failed:', emailError);
      console.error('API: Error code:', emailError.code);
      console.error('API: Error response:', emailError.response);
      // Don't fail the whole request if email fails, but log it
    }

    console.log('API: Submission complete');
    return NextResponse.json({ success: true, id: submission.id });
  } catch (error: any) {
    console.error('API: Form submission error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Failed to save submission' }, { status: 500 });
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
