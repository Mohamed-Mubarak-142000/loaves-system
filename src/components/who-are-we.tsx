import { useTranslation } from "react-i18next";
import CreateVideoPlayer from "./create-video-player";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const WhoAreWe = () => {
  const { t } = useTranslation("home");
  const videoUrl = `https://drive.google.com/file/d/1aX8W0nYkzST0lqO75AaKl_1NJGdS5ldi/preview`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[90%] lg:w-[80%] mx-auto my-10 p-5 gap-2">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-4xl font-bold text-[#C4841D]"
        >
          {t("who_we_are.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg mt-5 md:mt-10"
        >
          {t("who_we_are.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Button
            variant="default"
            className="bg-[#C4841D] hover:bg-[#7c5b25] text-xl py-6 mt-5"
          >
            {t("who_we_are.contact_us_button")}
          </Button>
        </motion.div>
      </motion.div>

      <CreateVideoPlayer url={videoUrl} classname="w-full h-[400px]" />
    </div>
  );
};

export default WhoAreWe;
