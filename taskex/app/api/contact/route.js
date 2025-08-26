import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, projectDescription } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !company || !projectDescription) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
New Contact Form Submission from Taskex Website

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company}
Project Description: ${projectDescription}

Submitted at: ${new Date().toLocaleString()}
    `;

    const htmlEmailContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Form Submission - Taskex Website</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #16CA95, #14B885); color: white; padding: 20px; border-radius: 10px; margin-bottom: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #16CA95; }
        .value { margin-left: 10px; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>Taskex Technologies Website</p>
        </div>
        
        <div class="field">
            <span class="label">Name:</span>
            <span class="value">${firstName} ${lastName}</span>
        </div>
        
        <div class="field">
            <span class="label">Email:</span>
            <span class="value">${email}</span>
        </div>
        
        <div class="field">
            <span class="label">Phone:</span>
            <span class="value">${phone || 'Not provided'}</span>
        </div>
        
        <div class="field">
            <span class="label">Company:</span>
            <span class="value">${company}</span>
        </div>
        
        <div class="field">
            <span class="label">Project Description:</span>
            <div class="value" style="margin-top: 10px; padding: 15px; background: #f8f9fa; border-radius: 5px; white-space: pre-wrap;">${projectDescription}</div>
        </div>
        
        <div class="field">
            <span class="label">Submitted at:</span>
            <span class="value">${new Date().toLocaleString()}</span>
        </div>
        
        <div class="footer">
            <p>This message was sent from the Taskex Technologies contact form.</p>
            <p>Please respond to the customer at: ${email}</p>
        </div>
    </div>
</body>
</html>
    `;

    // Configure Gmail SMTP transporter with better error handling
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ozwidetasklead@gmail.com',
        pass: 'wgnkfbyugopbzlhc'
      },
      // Add additional options for better compatibility
      secure: true,
      port: 465,
      tls: {
        rejectUnauthorized: false
      }
    });
    
    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('Gmail SMTP transporter verified successfully');
    } catch (verifyError) {
      console.error('Gmail SMTP verification failed:', verifyError);
      return NextResponse.json(
        { 
          error: 'Email service configuration error. Please try again later.',
          success: false 
        },
        { status: 500 }
      );
    }
    
    // Send email using Gmail SMTP
    try {
      const mailOptions = {
        from: 'ozwidetasklead@gmail.com',
        to: 'manager@taskex.in',
        subject: 'New Contact Form Submission - Taskex Website',
        text: emailContent,
        html: htmlEmailContent
      };
      
      console.log('Attempting to send email with options:', {
        from: mailOptions.from,
        to: mailOptions.to,
        subject: mailOptions.subject
      });
      
      const result = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', result.messageId);
      console.log('Email sent successfully to manager@taskex.in via Gmail SMTP');
      
    } catch (emailError) {
      console.error('Gmail SMTP error details:', {
        code: emailError.code,
        command: emailError.command,
        response: emailError.response,
        responseCode: emailError.responseCode,
        message: emailError.message
      });
      
      // Still log the submission even if email fails
      console.log('Contact form submission:', emailContent);
      
      // Return error response
      return NextResponse.json(
        { 
          error: 'Message received but email delivery failed. We will contact you soon.',
          success: false 
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        message: 'Message sent successfully! We will get back to you soon.',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again later.',
        success: false 
      },
      { status: 500 }
    );
  }
}
