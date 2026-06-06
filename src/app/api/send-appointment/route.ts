import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phoneNumber, email, practiceArea, preferredDate, preferredTime, message } = body;

    // Validate required fields
    if (!fullName || !phoneNumber || !email || !practiceArea) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

   // Create transporter
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify SMTP connection
await transporter.verify();
console.log("Zoho SMTP Connected Successfully");

    // Email to you (the law firm)
    const mailOptions = {
      from: `"Nyayamarga Law Chambers" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Appointment Request: ${fullName} - ${practiceArea}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Appointment Request</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
              line-height: 1.6;
              color: #000000;
              margin: 0;
              padding: 0;
              background-color: #ffffff;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background: #ffffff;
              border: 1px solid #e0e0e0;
            }
            .header {
              background: #000000;
              padding: 40px 30px;
              text-align: center;
              border-bottom: 1px solid #e0e0e0;
            }
            .header h1 {
              margin: 0;
              color: #ffffff;
              font-size: 24px;
              letter-spacing: 1px;
              font-weight: 500;
            }
            .header p {
              margin: 8px 0 0;
              color: #aaaaaa;
              font-size: 13px;
            }
            .content {
              padding: 40px 35px;
              background: #ffffff;
            }
            .alert {
              background: #f8f8f8;
              border-left: 3px solid #000000;
              padding: 15px 20px;
              margin-bottom: 35px;
              font-size: 14px;
              color: #333333;
            }
            .alert strong {
              color: #000000;
            }
            .section {
              margin-bottom: 30px;
            }
            .section-title {
              color: #000000;
              font-size: 16px;
              font-weight: 600;
              margin: 0 0 15px 0;
              padding-bottom: 6px;
              border-bottom: 1px solid #e0e0e0;
              letter-spacing: 0.5px;
            }
            .info-row {
              margin: 10px 0;
              padding: 0;
            }
            .label {
              font-weight: 600;
              color: #555555;
              display: inline-block;
              min-width: 140px;
              font-size: 14px;
            }
            .value {
              color: #000000;
              font-size: 14px;
            }
            .message-box {
              background: #fafafa;
              padding: 18px;
              border: 1px solid #e8e8e8;
              margin-top: 10px;
              font-size: 14px;
              color: #333333;
              line-height: 1.6;
            }
            .actions {
              background: #f8f8f8;
              padding: 25px;
              text-align: center;
              margin: 30px 0 0;
            }
            .actions p {
              margin: 0 0 15px 0;
              color: #000000;
              font-size: 14px;
              font-weight: 500;
            }
            .button {
              display: inline-block;
              padding: 12px 28px;
              text-decoration: none;
              font-size: 14px;
              font-weight: 500;
              transition: all 0.2s ease;
              background: #ffffff;
              color: #000000;
              border: 1px solid #000000;
            }
            .button:hover {
              background: #f5f5f5;
            }
            .footer {
              background: #fafafa;
              padding: 25px 35px;
              text-align: center;
              font-size: 12px;
              color: #666666;
              border-top: 1px solid #e8e8e8;
            }
            .footer p {
              margin: 5px 0;
            }
            .footer .firm-name {
              color: #000000;
              font-weight: 600;
              font-size: 13px;
            }
            hr {
              border: none;
              border-top: 1px solid #e8e8e8;
              margin: 15px 0;
            }
            @media only screen and (max-width: 480px) {
              .container {
                margin: 0;
              }
              .content {
                padding: 25px 20px;
              }
              .label {
                display: block;
                margin-bottom: 4px;
              }
              .button {
                display: block;
                margin: 10px 0;
              }
              .header {
                padding: 30px 20px;
              }
              .header h1 {
                font-size: 20px;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>NYAYAMARGA LAW CHAMBERS</h1>
              <p>Appointment Request Notification</p>
            </div>
            
            <div class="content">
              <div class="alert">
                <strong>Action Required</strong> - A new appointment request has been submitted through the website. Please review the details below and contact the client within 24 hours.
              </div>
              
              <div class="section">
                <div class="section-title">Client Information</div>
                <div class="info-row">
                  <span class="label">Full Name:</span>
                  <span class="value">${fullName}</span>
                </div>
                <div class="info-row">
                  <span class="label">Phone Number:</span>
                  <span class="value">${phoneNumber}</span>
                </div>
                <div class="info-row">
                  <span class="label">Email Address:</span>
                  <span class="value">${email}</span>
                </div>
              </div>
              
              <div class="section">
                <div class="section-title">Appointment Details</div>
                <div class="info-row">
                  <span class="label">Practice Area:</span>
                  <span class="value">${practiceArea}</span>
                </div>
                <div class="info-row">
                  <span class="label">Preferred Date:</span>
                  <span class="value">${preferredDate || 'Not specified'}</span>
                </div>
                <div class="info-row">
                  <span class="label">Preferred Time:</span>
                  <span class="value">${preferredTime || 'Not specified'}</span>
                </div>
                <div class="info-row">
                  <span class="label">Submitted On:</span>
                  <span class="value">${new Date().toLocaleString()}</span>
                </div>
              </div>
              
              <div class="section">
                <div class="section-title">Client Message</div>
                <div class="message-box">
                  ${message || 'No message provided by the client.'}
                </div>
              </div>
              
              <div class="actions">
                <p>Contact the client on WhatsApp to confirm the appointment</p>
                <a href="https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=Dear%20${encodeURIComponent(fullName)}%2C%20Thank%20you%20for%20contacting%20Nyayamarga%20Law%20Chambers.%20We%20have%20received%20your%20appointment%20request%20for%20${encodeURIComponent(practiceArea)}.%20We%20would%20like%20to%20confirm%20your%20appointment%20on%20${preferredDate || 'a suitable date'}%20at%20${preferredTime || 'your preferred time'}.%20Please%20let%20us%20know%20if%20this%20works%20for%20you." class="button" target="_blank">
                  Message on WhatsApp
                </a>
              </div>
            </div>
            
            <div class="footer">
              <p class="firm-name">Nyayamarga Law Chambers</p>
              <p>No. 343, 1st Cross, Kogilu Main Road<br>Yelahanka, Bengaluru - 560064</p>
              <p>Phone: +91 9353237692 | Email: ${process.env.EMAIL_USER}</p>
              <hr>
              <p>This is an automated notification from your website appointment system.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Appointment request sent successfully' 
    });
    
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send appointment request' },
      { status: 500 }
    );
  }
}