import { z } from "zod";
import { t } from "i18next";

export const FormLoginSchema = z.object({
  username: z.string().min(2, {
    message: t("validation_auth.email_required"),
  }),
  password: z.string().min(6, {
    message: t("validation_auth.password_required"),
  }),
});
