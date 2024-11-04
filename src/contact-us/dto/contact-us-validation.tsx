import { z } from "zod";

export const ContactUs = z.object({
  name: z.string().min(2, {
    message: "validation_contact_us.name_required",
  }),
  email: z.string().email({
    message: "validation_contact_us.email_required",
  }),
  message: z.string().min(2, {
    message: "validation_contact_us.message_required",
  }),
  phone: z
    .number()
    .min(11, {
      message: "validation_contact_us.phone_required",
    })
    .max(11, {
      message: "validation_contact_us.phone_required",
    }),
});
