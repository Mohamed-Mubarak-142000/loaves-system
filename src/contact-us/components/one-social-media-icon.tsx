import React from "react";
import { motion } from "framer-motion";

interface SocialMediaIconProps {
  icon: React.ElementType;
  color?: string;
  className?: string;
  title?: string;
  onClick?: () => void;
  index: number;
}
const SocialMediaIcon = ({
  icon: Icon,
  color,
  title,
  index,
}: SocialMediaIconProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 == 0 ? -200 : 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ delay: 0.5 * index, duration: 1 }}
      className="w-[300px] h-[50px] border-[#9a6819] border p-1.5 rounded-md hover:bg-[#b6a6569a] transition-colors flex items-center justify-between capitalize cursor-pointer"
    >
      <h2>{title}</h2>
      <Icon style={{ color }} />
    </motion.div>
  );
};

export default SocialMediaIcon;
