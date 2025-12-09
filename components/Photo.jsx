"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative" // Ensure this container is relative for the absolute child
      >
        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          // FIXED: Added centering classes below
          className="w-[250px] h-[250px] xl:w-[310px] xl:h-[310px]  absolute top-6/16 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt="Profile Photo"
            className="object-contain opacity-75 mix-blend-overlay"/>
        </motion.div>

        {/* Animated Circle SVG */}
        <motion.svg
          className="w-[250px] h-[250px] xl:w-[406px] xl:h-[406px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;