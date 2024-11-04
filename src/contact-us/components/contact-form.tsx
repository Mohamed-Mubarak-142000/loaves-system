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
import { ContactUs } from "../dto/contact-us-validation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

const ContactForm = () => {
  const { t } = useTranslation("auth");
  // 1. Define your form.
  const form = useForm<z.infer<typeof ContactUs>>({
    resolver: zodResolver(ContactUs),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      phone: undefined,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof ContactUs>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("contact_us.name")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("contact_us.name_placeholder")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("contact_us.email")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("contact_us.email_placeholder")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("contact_us.phone")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("contact_us.phone_placeholder")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 1 }}
          className="grid w-full gap-2"
        >
          <Label htmlFor="message-2">{t("contact_us.message")}</Label>
          <Textarea placeholder={t("contact_us.message_placeholder")} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Button className="w-full">{t("contact_us.submit")}</Button>
        </motion.div>
      </form>
    </Form>
  );
};

export default ContactForm;
