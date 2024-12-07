import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { AddRoleFormValidation } from "../dto/add-role-validation";

const AddRoleForm = () => {
  const { t } = useTranslation("add-card");
  const form = useForm<z.infer<typeof AddRoleFormValidation>>({
    resolver: zodResolver(AddRoleFormValidation),
    defaultValues: {
      firstnameAr: "",
      lastnameAr: "",
      firstnameEn: "",
      lastnameEn: "",
      phone: undefined,
      email: "",
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof AddRoleFormValidation>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full px-5 mt-10 leading-10 "
      >
        <div className="my-5">
          <div className="w-72 h-72 rounded-full mx-auto flex items-center justify-center shadow-table">
            <img
              className="w-full h-full object-cover"
              src=""
              alt="user-image"
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="firstnameAr"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">
                {t("add_form_input.firstnameAr")}
              </FormLabel>
              <FormControl>
                <Input
                  className="text-md py-7"
                  type="text"
                  placeholder={t("add_form_input.fristname_pleaceholder")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastnameAr"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">
                {t("add_form_input.lastnameAr")}
              </FormLabel>
              <FormControl>
                <Input
                  className="text-md py-7"
                  placeholder={t("add_form_input.lastname_pleaceholder")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="firstnameEn"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">
                {t("add_form_input.firstnameEn")}
              </FormLabel>
              <FormControl>
                <Input
                  className="text-md py-7"
                  type="text"
                  placeholder={t("add_form_input.fristname_pleaceholder")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastnameEn"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">
                {t("add_form_input.lastnameEn")}
              </FormLabel>
              <FormControl>
                <Input
                  className="text-md py-7"
                  placeholder={t("add_form_input.lastname_pleaceholder")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">
                {t("add_form_input.username")}
              </FormLabel>
              <FormControl>
                <Input
                  className="text-md py-7"
                  placeholder={t("add_form_input.cardnumber_pleaceholder")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">
                {t("add_form_input.phone")}
              </FormLabel>
              <FormControl>
                <Input
                  className="text-md py-7"
                  placeholder={t("add_form_input.phone_pleaceholder")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">
                {t("add_form_input.email")}
              </FormLabel>
              <FormControl>
                <Input
                  className="text-md py-7"
                  placeholder={t("add_form_input.breadnumber_pleaceholder")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="col-span-2 flex items-center">
          <Button className="w-full md:w-1/2 mx-auto py-8 text-lg font-bold my-5">
            {t("add_form_input.add_card")}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddRoleForm;
