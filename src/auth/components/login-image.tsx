import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const LoginInfo = () => {
  const { t } = useTranslation("auth");
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-4xl font-bold text-[#C4841D] capitalize"
      >
        {t("login.title")}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg mt-5 md:mt-10"
      >
        {t("login.subtitle")}{" "}
      </motion.p>
    </motion.div>
  );
};

export default LoginInfo;
