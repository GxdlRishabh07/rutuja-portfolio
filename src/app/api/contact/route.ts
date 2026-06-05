import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { rateLimit, sanitizeInput } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const rateLimitResult = rateLimit(ip);
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: `Too many requests. Try again in ${Math.ceil(rateLimitResult.resetIn / 1000)} seconds.`,
        },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Honeypot check
    if (body.honeypot) {
      return NextResponse.json(
        { success: true, message: "Message sent successfully!" },
        { status: 200 }
      );
    }

    // Validate
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      const errors: Record<string, string[]> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path.join(".");
        if (!errors[path]) errors[path] = [];
        errors[path].push(issue.message);
      });
      return NextResponse.json(
        { success: false, message: "Validation failed", errors },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitized = {
      name: sanitizeInput(result.data.name),
      email: sanitizeInput(result.data.email),
      subject: sanitizeInput(result.data.subject),
      message: sanitizeInput(result.data.message),
    };

    // Try to save to database (graceful fallback if no DB)
    try {
      const { prisma } = await import("@/lib/prisma");
      await prisma.contactMessage.create({
        data: {
          ...sanitized,
          ipAddress: ip,
        },
      });
    } catch (dbError) {
      console.warn("Database not available, skipping persistence:", dbError);
    }

    // Try to send email (graceful fallback if no API key)
    try {
      if (process.env.RESEND_API_KEY) {
        const { Resend } = await import("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: "Portfolio <onboarding@resend.dev>",
          to: process.env.CONTACT_EMAIL || "rutujanehere05@gmail.com",
          subject: `New Contact: ${sanitized.subject}`,
          html: `
            <h2>New message from your portfolio</h2>
            <p><strong>Name:</strong> ${sanitized.name}</p>
            <p><strong>Email:</strong> ${sanitized.email}</p>
            <p><strong>Subject:</strong> ${sanitized.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${sanitized.message.replace(/\n/g, "<br>")}</p>
          `,
        });
      }
    } catch (emailError) {
      console.warn("Email sending failed:", emailError);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been received.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
