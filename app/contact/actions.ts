"use server";

import { contactFormSchema, ContactFormValues } from "@/lib/contact-schema";

export async function submitContactForm(data: ContactFormValues) {
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
    // In a real application, you would send an email here using a service like Resend, SendGrid, etc.
    // For now, we'll simulate a successful submission.
    console.log("Contact Form Submission:", {
      sanitizedTitle,
      sanitizedEmail,
      sanitizedContent,
    });

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

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
