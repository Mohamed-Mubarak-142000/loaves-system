import { t } from "@/lib/i18next/i18n";
import { z } from "zod";

export const AddRoleFormValidation = z.object({
  firstnameAr: z
    .string({
      required_error: t("add-card:validation_add_card.firstname_required"),
    })
    .min(10, {
      message: t("add-card:validation_add_card.firstname_min_length"),
    })
    .max(50, {
      message: t("add-card:validation_add_card.firstname_max_length"),
    }),
  lastnameAr: z
    .string({
      required_error: t("add-card:validation_add_card.lastname_required"),
    })
    .min(10, {
      message: t("add-card:validation_add_card.lastname_min_length"),
    })
    .max(50, {
      message: t("add-card:validation_add_card.lastname_max_length"),
    }),

  firstnameEn: z
    .string({
      required_error: t("add-card:validation_add_card.firstname_required"),
    })
    .min(10, {
      message: t("add-card:validation_add_card.firstname_min_length"),
    })
    .max(50, {
      message: t("add-card:validation_add_card.firstname_max_length"),
    }),
  lastnameEn: z
    .string({
      required_error: t("add-card:validation_add_card.lastname_required"),
    })
    .min(10, {
      message: t("add-card:validation_add_card.lastname_min_length"),
    })
    .max(50, {
      message: t("add-card:validation_add_card.lastname_max_length"),
    }),

  phone: z
    .string({
      required_error: t("add-card:validation_add_card.phone_required"),
    })
    .min(11, {
      message: t("add-card:validation_add_card.phone_min_length"),
    })
    .max(11, {
      message: t("add-card:validation_add_card.phone_max_length"),
    }),

  email: z
    .string({
      required_error: t("add-card:validation_add_card.email_required"),
    })
    .email({
      message: t("add-card:validation_add_card.email_required"),
    }),

  username: z
    .string({
      required_error: t("add-card:validation_add_card.email_required"),
    })
    .email({
      message: t("add-card:validation_add_card.email_required"),
    }),
});
