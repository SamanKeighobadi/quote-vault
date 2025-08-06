import { z } from "zod";

export const userSchema = z.object({
  email: z.email(),
  password: z.string().min(4).max(20).trim(),
  name: z.string().min(2).max(20).trim(),
});
