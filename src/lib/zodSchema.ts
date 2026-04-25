import { z } from "zod";

export const registerSchema = z.object({
  fullName: z
    .string()
    .min(3, { error: "Atlist 3 Charcter" })
    .max(25, { error: "The Full name Must Be Under 25 Charcter" }),
  email: z.email({ error: "Inavlid Email Adress" }),
  password: z
    .string()
    .min(8, { error: "The Password Must Be 8 Charcter" })
    .max(35, { error: "The Password Must Be Under 35 Charcter" }),
});

export type RegisterSchemaType = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.email({ error: "Inavlid Email Adress" }),
  password: z
    .string()
    .min(8, { error: "The Password Must Be 8 Charcter" })
    .max(35, { error: "The Password Must Be Under 35 Charcter" }),
});
export type loginSchemaType = z.infer<typeof loginSchema>;
