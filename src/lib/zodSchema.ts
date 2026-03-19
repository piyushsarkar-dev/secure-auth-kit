import { z } from "zod";
export const resgisterSchema = z.object({
  fullName: z
    .string()
    .min(2, { error: "Atlist 2 Charcter" })
    .max(32, { error: "The Name Should Be Under 32 Charchters" })
    .trim(),
  email: z.email({ error: "Invalid Email Adress" }),
  password: z
    .string()
    .min(8, { error: "Passowrd Length Must be 8 Charchters" }),
});
export type registerFormSchemaType = z.infer<typeof resgisterSchema>;

export const loginSchema = z.object({
  email: z.email({ error: "Invalid Email Adress" }),
  password: z.string().min(8, { error: "Password Must  Be 8 Charchters" }),
});

export type loginFormSchemaType = z.infer<typeof loginSchema>;
