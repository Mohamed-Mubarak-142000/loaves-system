import { t } from "@/lib/i18next/i18n";
import { z } from "zod";

export const AddCardForm = z.object({
  firstname: z
    .string({
      required_error: t("add-card:validation_add_card.firstname_required"),
    })
    .min(10, {
      message: t("add-card:validation_add_card.firstname_min_length"),
    })
    .max(50, {
      message: t("add-card:validation_add_card.firstname_max_length"),
    }),
  lastname: z
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

  cardnumber: z
    .string({
      required_error: t("add-card:validation_add_card.cardnumber_required"),
    })
    .min(16, {
      message: t("add-card:validation_add_card.cardnumber_min_length"),
    })
    .max(16, {
      message: t("add-card:validation_add_card.cardnumber_max_length"),
    }),

  breadnumber: z
    .number({
      required_error: t("add-card:validation_add_card.breadnumber_required"),
    })
    .refine(
      (value) => Number(value) % 5 === 0,
      t("add-card:validation_add_card.breadnumber_length")
    ),

  breadsalary: z.number({
    required_error: t("add-card:validation_add_card.breadsalary_required"),
  }),
  deliveryservice: z
    .number({
      required_error: t(
        "add-card:validation_add_card.deliveryservice_required"
      ),
    })
    .min(15, {
      message: t("add-card:validation_add_card.min_length_deliveryservice"),
    })
    .max(20, {
      message: t("add-card:validation_add_card.max_length_deliveryservice"),
    }),
  totalbread: z.number({
    required_error: t("add-card:validation_add_card.totalbread_required"),
  }),
});
