import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Skill } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

export const SkillAnimation = ({ skill, directionLeft }: Props) => {
  return (
    <div className="group flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 max-h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
      >
        <Image
          className="object-contain"
          src={urlFor(skill?.image).url()}
          alt=""
          layout="fill"
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-[0.5s] ease-in-out w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 max-h-24 z-0">
        <p className="flex items-center justify-center text-lg text-center font-semibold text-beige  bg-red-800/50 dark:text-honey dark:bg-eerie/50 w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 max-h-24">
          {skill?.skillName}
        </p>
      </div>
    </div>
  );
};
