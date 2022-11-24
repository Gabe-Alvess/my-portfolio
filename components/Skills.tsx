import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { PageInfo, Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
  pageInfo: PageInfo;
};

function Skills({ skills, pageInfo }: Props) {
  return (
    <div className="min-h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center">
      <motion.h2
        initial={{ y: -90, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="absolute top-24 uppercase tracking-[20px] text-gold dark:text-tomato text-2xl font-bold"
      >
        {pageInfo?.skillsTitle}
      </motion.h2>
      <motion.h3
        initial={{ scale: 0, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="absolute top-36 uppercase tracking-[3px] dark:text-honey text-base"
      >
        {pageInfo?.skillsSubtitle}
      </motion.h3>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-6 gap-5"
      >
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;
