import { motion } from "framer-motion";
import React from "react";

const Marque = () => {
  return (
    <div
      data-scroll
      data-section
      className="w-full py-20 bg-[#004D43]  rounded-tl-3xl"
    >
      <div className="text border-t-2 border-b-2 border-[#4D837C] text-[#F1F1F1] overflow-hidden flex items-center whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 5,
            speed: 8,
          }}
          className="text-[25vw] uppercase pt-10 -mb-[7vw] leading-none font-['Founders_Grotesk_X'] font-semibold pl-8"
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 5,
            speed: 8,
          }}
          className="text-[25vw] uppercase pt-10 -mb-[7vw] leading-none font-['Founders_Grotesk_X'] font-semibold pl-8"
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
};

export default Marque;
