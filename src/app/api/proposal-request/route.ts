import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Sanitize HTML to prevent XSS
// amazonq-ignore-next-line
function sanitizeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

export async function POST(req: NextRequest) {
  let name: string,
    email: string,
    phone: string,
    company: string,
    service: string,
    message: string;

  try {
    const body = await req.json();

    // Validate body exists and is an object
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { message: "Invalid request body" },
        { status: 400 }
      );
    }

    ({ name, email, phone, company, service, message } = body);

    // Validate input types and existence
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof phone !== "string" ||
      typeof service !== "string" ||
      typeof message !== "string" ||
      typeof company !== "string"
    ) {
      return NextResponse.json(
        { message: "Invalid input format" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return NextResponse.json(
      { message: "Invalid JSON format" },
      { status: 400 }
    );
  }

  if (!email || !name || !phone || !service || !message) {
    return NextResponse.json(
      { message: "Name, email, phone, service, and message are required" },
      { status: 400 }
    );
  }

  try {
    // Nodemailer Transporter Configuration
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_PROJECTS_USER, // Your email
        pass: process.env.NEXT_PUBLIC_PROJECTS_PASS, // Your email password
      },
    });

    // Client acknowledgement email
    const clientMailOptions = {
      from: `"CN Engine Systems Ltd" <${process.env.NEXT_PUBLIC_PROJECTS_USER}>`,
      to: email,
      subject: "Inquiry Received",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; max-width: 600px;">
          <div style="background: linear-gradient(135deg, #1a2332 0%, #2d4059 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">CN Engine Systems Ltd</h1>
            <p style="color: #0ea5e9; margin: 10px 0 0 0; font-size: 16px;">Engineering Excellence in Nigeria</p>
          </div>
          <div style="background: #ffffff; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
            <h2 style="color: #1a2332; margin-bottom: 20px;">Thank you for contacting us, ${sanitizeHtml(
              name
            )}!</h2>
            <p style="color: #64748b; margin-bottom: 15px;">We have received your inquiry regarding <strong>${sanitizeHtml(
              service
            )}</strong> services.</p>
            <p style="color: #64748b; margin-bottom: 20px;">Our team will review your requirements and respond within 24 hours with a detailed consultation.</p>
            <div style="background: #f8fafc; padding: 20px; border-radius: 6px; margin: 20px 0;">
              <h3 style="color: #1a2332; margin: 0 0 10px 0; font-size: 16px;">What happens next?</h3>
              <ul style="color: #64748b; margin: 0; padding-left: 20px;">
                <li>Technical review of your requirements</li>
                <li>Preliminary assessment and recommendations</li>
                <li>Detailed quotation and project timeline</li>
                <li>Follow-up consultation call</li>
              </ul>
            </div>
            <p style="color: #64748b; margin-bottom: 5px;">Best regards,</p>
            <p style="color: #1a2332; font-weight: bold; margin: 0;">CN Engine Systems Ltd Team</p>
            <p style="color: #0ea5e9; font-size: 14px; margin: 5px 0 0 0;">${sanitizeHtml(
              process.env.NEXT_PUBLIC_PROJECTS_USER || ""
            )}</p>
          </div>
        </div>
      `,
    };

    // Management notification email
    const managementMailOptions = {
      from: `"Projects - CN Engine Systems Ltd" <${process.env.NEXT_PUBLIC_PROJECTS_USER}>`,
      to: process.env.NEXT_PUBLIC_MANAGEMENT_USER,
      subject: "New Client Inquiry",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; max-width: 600px;">
          <h2 style="color: #1a2332; border-bottom: 3px solid #0ea5e9; padding-bottom: 10px;">New Client Inquiry</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 6px; margin: 20px 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #1a2332; width: 120px;">Client:</td><td style="padding: 8px 0; color: #64748b;">${sanitizeHtml(
                name
              )}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #1a2332;">Company:</td><td style="padding: 8px 0; color: #64748b;">${sanitizeHtml(
                company || "Not specified"
              )}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #1a2332;">Email:</td><td style="padding: 8px 0; color: #64748b;">${sanitizeHtml(
                email
              )}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #1a2332;">Phone:</td><td style="padding: 8px 0; color: #64748b;">${sanitizeHtml(
                phone
              )}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #1a2332;">Service:</td><td style="padding: 8px 0; color: #64748b;">${sanitizeHtml(
                service
              )}</td></tr>
            </table>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #1a2332; margin-bottom: 10px;">Message:</h3>
            <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 15px; border-radius: 6px; color: #64748b;">
              ${sanitizeHtml(message)}
            </div>
          </div>
          <div style="background: #fef2f2; border: 1px solid #fecaca; padding: 15px; border-radius: 6px; margin: 20px 0;">
            <p style="color: #dc2626; font-weight: bold; margin: 0;">⚠️ Action Required: Please follow up within 24 hours</p>
          </div>
        </div>
      `,
    };

    // Send client acknowledgement
    await transporter.sendMail(clientMailOptions);

    // Send management notification
    await transporter.sendMail(managementMailOptions);

    return NextResponse.json(
      { message: "Submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    // Log error without exposing sensitive details
    console.error(
      "Email service error:",
      error instanceof Error ? error.message : "Unknown error"
    );
    return NextResponse.json(
      { message: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
