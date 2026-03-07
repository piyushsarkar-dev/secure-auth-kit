import z from "zod";

export const mainLoginFormSchema = z.object({
  fullName: z.string().min(6, { error: "Full Name Must Be 6 Charchter" }),
  email: z
    .email({ error: "Invalid Email Adress" })
    .endsWith("@gmail.com", { error: "Only Accepted Gmail Adress" }),
});

export type MainLoginFormType = z.infer<typeof mainLoginFormSchema>;
