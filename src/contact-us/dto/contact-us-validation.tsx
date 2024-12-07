import { t } from "@/lib/i18next/i18n";
import { z } from "zod";

export const ContactUs = z.object({
  name: z.string().min(2, {
    message: t("auth:validation_contact_us.name_required"),
  }),
  email: z.string().email({
    message: t("auth:validation_contact_us.email_required"),
  }),
  message: z.string().min(2, {
    message: t("auth:validation_contact_us.message_required"),
  }),
  phone: z
    .number({
      invalid_type_error: t(t("auth:validation_contact_us.phone_required")),
      required_error: t("auth:validation_contact_us.phone_required"),
    })
    .min(11, {
      message: t("auth:validation_contact_us.min_length_phone"),
    })
    .max(11, {
      message: t("auth:validation_contact_us.max_length_phone"),
    }),
});
