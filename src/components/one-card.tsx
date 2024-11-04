import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { motion } from "framer-motion";

interface ItemProps {
  item: {
    id: number;
    title: string;
    description: string;
    number: string;
    icon: React.ElementType;
  };
}

const OneCard = ({ item }: ItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 + item.id * 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl text-[#C4841D]">
            {item.number}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="flex justify-around items-center">
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl uppercase"
            >
              {item.title}
            </motion.h1>
            <item.icon size={80} color="#C4841D" />
          </CardDescription>
        </CardContent>
        <CardFooter className="text-center flex justify-center">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg"
          >
            {item.description}
          </motion.h1>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default OneCard;
