import { z } from "zod";

export const contactFormSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Subject must be at least 2 characters." })
    .max(100, { message: "Subject must not exceed 100 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  content: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message must not exceed 1000 characters." }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
