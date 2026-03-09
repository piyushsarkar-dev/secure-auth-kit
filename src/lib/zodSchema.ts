import { z } from "zod";

export const mainLoginFromSchema = z.object({
  fullName: z.string().min(6, { error: "Atlist 6 Charcter" }),
  email: z.email(),
});

export type MainloginFromSceamType = z.infer<typeof mainLoginFromSchema>;
