"use server";

import { Resend } from "resend";
import { contactFormSchema, ContactFormValues } from "@/lib/contact-schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(data: ContactFormValues) {
  // Check if Resend API Key is set (Server-side check)
  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY environment variable.");
    return {
      success: false,
      message: "Server configuration error. Please contact the administrator.",
    };
  }

  // Validate the data using Zod
  const validatedFields = contactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid form data. Please check your inputs.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { title, email, content } = validatedFields.data;

  // Sanitize input (basic escaping to prevent basic HTML injection)
  const sanitize = (str: string) => {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  const sanitizedTitle = sanitize(title);
  const sanitizedEmail = sanitize(email);
  const sanitizedContent = sanitize(content);

  try {
    // Send email using Resend
    const { data: resendData, error } = await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL || "Zyphr Contact <contact@zyphr.app>",
      to: process.env.CONTACT_TO_EMAIL || "zyphrapp@proton.me",
      replyTo: sanitizedEmail,
      subject: `[Zyphr Contact] ${sanitizedTitle}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #701dff;">New Message from Zyphr Landing Page</h2>
          <p><strong>From:</strong> ${sanitizedEmail}</p>
          <p><strong>Subject:</strong> ${sanitizedTitle}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <div style="white-space: pre-wrap; line-height: 1.6;">
            ${sanitizedContent}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return {
        success: false,
        message: "Failed to send email. Please try again later.",
      };
    }

    console.log("Email sent successfully:", resendData);

    return {
      success: true,
      message: "Your message has been sent successfully!",
    };
  } catch (error) {
    console.error("Failed to submit contact form:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
