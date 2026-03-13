"use server";

import { Resend } from "resend";
import { contactFormSchema, ContactFormValues } from "@/lib/contact-schema";

// Helper to get Resend instance safely
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
};

export async function submitContactForm(data: ContactFormValues) {
  // 1. Check for API Key
  const resend = getResend();
  if (!resend) {
    console.error("DEBUG: RESEND_API_KEY is missing from process.env");
    return {
      success: false,
      message: "Server configuration error: Missing API Key.",
    };
  }

  // 2. Validate the data
  const validatedFields = contactFormSchema.safeParse(data);
  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid form data.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { title, email, content } = validatedFields.data;

  // 3. Sanitize
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
    // 4. Send email
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "Zyphr Contact <contact@zyphr.app>";
    const toEmail = process.env.CONTACT_TO_EMAIL || "zyphrapp@proton.me";

    console.log(`DEBUG: Attempting to send from ${fromEmail} to ${toEmail}`);

    const { data: resendData, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
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
      console.error("DEBUG: Resend API error details:", JSON.stringify(error));
      return {
        success: false,
        message: `Email provider error: ${error.message}`,
      };
    }

    return {
      success: true,
      message: "Your message has been sent successfully!",
    };
  } catch (error: any) {
    console.error("DEBUG: Fatal error in submitContactForm:", error);
    return {
      success: false,
      message: `Fatal error: ${error?.message || "Unknown error"}`,
    };
  }
}
