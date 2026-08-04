import { z } from "zod";


export const opportunitySchema = z.object({

    title: z
        .string()
        .min(3, "Title must be at least 3 characters"),


    organization: z
        .string()
        .min(2, "Organization name is required"),


    category: z
        .string()
        .min(2, "Category is required"),


    location: z
        .string()
        .min(2, "Location is required"),


    type: z
        .string()
        .min(2, "Opportunity type is required"),


    deadline: z
        .string()
        .min(1, "Deadline is required"),


    description: z
        .string()
        .min(20, "Description must be at least 20 characters"),


    requirements: z
        .string()
        .min(3, "Requirements are required"),


    applyLink: z
        .string()
        .url("Please enter a valid URL"),


    tags: z
        .string()
        .min(2, "At least one tag is required"),

});


export type OpportunityFormData =
    z.infer<typeof opportunitySchema>;