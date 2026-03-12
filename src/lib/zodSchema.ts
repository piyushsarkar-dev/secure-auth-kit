import { z } from "zod";

export const RegsiterFromSchema = z.object({
  fullName: z
    .string({ error: "Please Fill The Name First" })
    .min(2, { error: "Th Name Must Be 2 Charcter" }),
  email: z.email(),
  password: z.string().min(8, { error: "The Password Atlist 8 Character" }),
  confirmPassword: z.string({ error: "Confirm Password dint match" }),
});

export type RegsiterFromSchemaType = z.infer<typeof RegsiterFromSchema>;

export const LoginFromschema = z.object({
  email: z.email({ error: "Invalid Email Adress" }),
  password: z.string().min(8, { error: "Password Must Be 8 Charcter" }),
});

export type LoginFromSchemaType = z.infer<typeof LoginFromschema>;
