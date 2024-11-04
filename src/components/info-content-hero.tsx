import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const InfoContentHero = () => {
  const { t } = useTranslation("home");

  return (
    <div className="flex items-center justify-center flex-col px-5 gap-5 w-full md:w-3/4 lg:w-1/2">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.2, duration: 1 }}
        className="text-4xl text-gray-200 font-bold capitalize"
      >
        {t("home.welcome_title")}
        <span className="text-[#C4841D]">{t("home.title")}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-md font-semibold text-gray-300"
      >
        {t("home.subtitle")}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <Button className="bg-[#C4841D] hover:bg-[#7c5b25] text-xl py-6">
          {t("home.get_started_button")}
        </Button>
      </motion.div>
    </div>
  );
};

export default InfoContentHero;
