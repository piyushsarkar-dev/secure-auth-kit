import { z } from "zod";

export const mainLoginFromSchema = z.object({
  fullName: z.string().min(6, { error: "The Name Need Atlist 6 Charcter " }),
  email: z
    .email({ error: "Invalid Email Adress" })
    .endsWith("@gmail.com", { error: "Only Accepetd Gmail Adress" }),
});

export type MainloginFromSchemaType = z.infer<typeof mainLoginFromSchema>;
