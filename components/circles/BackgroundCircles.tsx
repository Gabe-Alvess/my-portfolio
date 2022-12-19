import React from "react";
import { motion } from "framer-motion";

type Props = {};

export const BackgroundCircles = ({}: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "50%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.2,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border-2 border-gold dark:border-tomato rounded-full w-[100px] h-[100px] md:w-[150px] md:h-[150px] xl:w-[200px] xl:h-[200px]  mt-52 animate-ping" />

      <div className="absolute border-2 border-beige dark:border-beige rounded-full w-[200px] h-[200px] md:w-[250px] md:h-[250px] xl:w-[300px] xl:h-[300px]  mt-52 animate-pulse" />

      <div className="absolute border-2 border-gold dark:border-tomato rounded-full w-[300px] h-[300px] md:w-[350px] md:h-[350px] xl:w-[400px] xl:h-[400px]  mt-52 animate-pulse" />

      <div className="absolute border-2 border-gold dark:border-tomato rounded-full w-[400px] h-[400px] md:w-[450px] md:h-[450px] xl:w-[500px] xl:h-[500px]  mt-52 animate-pulse" />

      <div className="absolute border-2 border-beige dark:border-beige rounded-full w-[500px] h-[500px] md:w-[550px] md:h-[550px] xl:w-[600px] xl:h-[600px]  mt-52 animate-pulse" />

      <div className="absolute border-2 border-gold dark:border-tomato rounded-full w-[600px] h-[600px] md:w-[650px] md:h-[650px]  xl:w-[700px] xl:h-[700px] mt-52 animate-pulse" />
    </motion.div>
  );
};
