import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

interface Notes {
  id: number;
  title: string;
}

interface SubscribeProps {
  title: string;
  notes: Notes[];
  valButton: string;
  onclick: () => void;
  index: number;
}

const Subscribe = ({
  title,
  notes,
  valButton,
  onclick,
  index,
}: SubscribeProps) => {
  const { t } = useTranslation("home");
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 == 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className="bg-[#9a6819] p-5 rounded-xl w-full md:w-[400px]"
    >
      <h1 className=" text-2xl font-bold capitalize my-2">{title}</h1>
      <ul>
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4, duration: 1 }}
          className="my-2 capitalize"
        >
          {t("who_we_are_highlights.important_notes")}
        </motion.h2>
        {notes?.map((item, index) => {
          return (
            <motion.li
              initial={{ opacity: 0, x: index % 2 == 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.5, duration: 1 }}
              key={item.id}
              style={{ listStyle: "inside", margin: "20px 0" }}
            >
              {item.title}
            </motion.li>
          );
        })}
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 2.5, duration: 1 }}
          className="flex items-center justify-center"
        >
          <Button
            onClick={onclick}
            variant="default"
            className=" text-xl py-6 mt-5 w-full "
          >
            {valButton}
          </Button>
        </motion.div>
      </ul>
    </motion.div>
  );
};

export default Subscribe;
