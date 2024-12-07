import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";
import { AddCardForm } from "../dto/add-form-validation";
import { Button } from "@/components/ui/button";

const FormAddCard = () => {
  const { t } = useTranslation("add-card");
  const form = useForm<z.infer<typeof AddCardForm>>({
    resolver: zodResolver(AddCardForm),
    defaultValues: {
      firstname: "",
      lastname: "",
      cardnumber: "",
      breadnumber: 5,
      breadsalary: 0,
      totalbread: 0,
      phone: undefined,
      deliveryservice: 20,
    },
  });

  function onSubmit(values: z.infer<typeof AddCardForm>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full px-5 leading-10 mx-auto mt-10 gap-4"
      >
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">
                {t("add_form_input.firstname")}
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
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">
                {t("add_form_input.lastname")}
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
          name="cardnumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">
                {t("add_form_input.cardnumber")}
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
          name="breadnumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">
                {t("add_form_input.breadnumber")}
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

        <FormField
          control={form.control}
          name="breadsalary"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">
                {t("add_form_input.breadsalary")}
              </FormLabel>
              <FormControl>
                <Input
                  className="text-md py-7"
                  placeholder={t("add_form_input.breadsalary_pleaceholder")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="totalbread"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">
                {t("add_form_input.totalbread")}
              </FormLabel>
              <FormControl>
                <Input
                  className="text-md py-7"
                  placeholder={t("add_form_input.totalbread_pleaceholder")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="deliveryservice"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">
                {t("add_form_input.deliveryservice")}
              </FormLabel>
              <FormControl>
                <Input
                  className="text-md py-7"
                  placeholder={t("add_form_input.deliveryservice_pleaceholder")}
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

export default FormAddCard;
