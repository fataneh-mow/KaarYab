import { z } from "zod";

// contact form validation
export const contactSchema = z.object({

    name: z
        .string()
        .trim()
        .min(3, "Name must be at least 3 characters."),

    email: z
        .email("Please enter a valid email address."),

    subject: z
        .string()
        .trim()
        .min(5, "Subject must be at least 5 characters."),

    message: z
        .string()
        .trim()
        .min(20, "Message must be at least 20 characters."),

});

export type ContactFormData = z.infer<typeof contactSchema>;