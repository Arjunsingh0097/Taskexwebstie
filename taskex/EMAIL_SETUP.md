# Email Setup for Contact Form

The contact form is now fully functional and will send form submissions to `manager@taskex.in`. Currently, it logs the submissions to the console and simulates email sending.

## Current Implementation

- ✅ Form validation (required fields, email format)
- ✅ Form state management
- ✅ Loading states and success/error messages
- ✅ API endpoint at `/api/contact`
- ✅ Email content formatting (text and HTML)
- ✅ Console logging of submissions

## Production Email Setup

To enable actual email sending in production, you'll need to choose and configure an email service:

### Option 1: SendGrid (Recommended)

1. Sign up at [SendGrid](https://sendgrid.com/)
2. Install the package:
   ```bash
   npm install @sendgrid/mail
   ```
3. Update `app/api/contact/route.js`:

   ```javascript
   import sgMail from "@sendgrid/mail";

   sgMail.setApiKey(process.env.SENDGRID_API_KEY);

   // Replace the TODO section with:
   await sgMail.send({
     to: "manager@taskex.in",
     from: "your-verified-sender@yourdomain.com", // Must be verified
     subject: "New Contact Form Submission - Taskex Website",
     text: emailContent,
     html: htmlEmailContent,
   });
   ```

### Option 2: Nodemailer with SMTP

1. Install the package:
   ```bash
   npm install nodemailer
   ```
2. Update `app/api/contact/route.js`:

   ```javascript
   import nodemailer from "nodemailer";

   const transporter = nodemailer.createTransporter({
     host: process.env.SMTP_HOST,
     port: process.env.SMTP_PORT,
     secure: true,
     auth: {
       user: process.env.SMTP_USER,
       pass: process.env.SMTP_PASS,
     },
   });

   // Replace the TODO section with:
   await transporter.sendMail({
     from: process.env.SMTP_USER,
     to: "manager@taskex.in",
     subject: "New Contact Form Submission - Taskex Website",
     text: emailContent,
     html: htmlEmailContent,
   });
   ```

### Option 3: AWS SES

1. Install the package:
   ```bash
   npm install @aws-sdk/client-ses
   ```
2. Configure AWS credentials and update the route file accordingly.

### Option 4: Resend

1. Install the package:
   ```bash
   npm install resend
   ```
2. Update `app/api/contact/route.js`:

   ```javascript
   import { Resend } from "resend";

   const resend = new Resend(process.env.RESEND_API_KEY);

   // Replace the TODO section with:
   await resend.emails.send({
     from: "Taskex Website <noreply@yourdomain.com>",
     to: "manager@taskex.in",
     subject: "New Contact Form Submission - Taskex Website",
     text: emailContent,
     html: htmlEmailContent,
   });
   ```

## Environment Variables

Add these to your `.env.local` file:

```env
# For SendGrid
SENDGRID_API_KEY=your_sendgrid_api_key

# For SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# For Resend
RESEND_API_KEY=your_resend_api_key
```

## Testing

1. Start the development server: `npm run dev`
2. Navigate to `/contact`
3. Fill out and submit the form
4. Check the console for the logged submission
5. In production with email service configured, check the recipient email

## Security Notes

- Always validate and sanitize form inputs
- Use environment variables for sensitive data
- Consider rate limiting for the API endpoint
- Implement CAPTCHA for production use if needed
- Use HTTPS in production

## Support

The contact form is now fully functional and ready for production use once you configure an email service of your choice.
