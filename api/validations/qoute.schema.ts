import { z } from "zod";

export const qouteSchema = z.object({
  text: z
    .string()
    .min(1, "Quote text is required")
    .max(500, "Quote text must be 500 characters or less"),
  author: z
    .string()
    .min(1, "Author is required")
    .max(100, "Author must be 100 characters or less"),
  categoryId: z.number().int().positive("Valid category ID is required"),

});

export const categorySchema = z.object({
  name: z
    .string()
    .min(1, "Category name is required")
    .max(100, "Category name must be 100 characters or less"),
});
