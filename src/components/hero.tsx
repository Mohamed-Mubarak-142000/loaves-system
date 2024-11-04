import { useEffect } from "react";
import CreateClock from "./create-clock";
import InfoContentHero from "./info-content-hero";
import { motion } from "framer-motion";

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex items-center justify-center flex-col gap-5 bg-image ">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 1, duration: 1 }}
        className=" flex items-center justify-around w-full"
      >
        <CreateClock />
      </motion.div>
      <InfoContentHero />
    </div>
  );
};

export default Hero;
