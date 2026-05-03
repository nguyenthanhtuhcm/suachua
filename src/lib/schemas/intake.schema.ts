import { z } from "zod";

export const contactMethodSchema = z.enum(["phone", "email", "zalo"]);

export const contactInfoSchema = z.object({
  contactMethod: contactMethodSchema,
  contactValue: z.string().min(3),
});

export type ContactInfo = z.infer<typeof contactInfoSchema>;
