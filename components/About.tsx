import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PageInfo, PageInfoNL, PageInfoFR, PageInfoPT } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <motion.h3
        initial={{ y: -90, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="absolute top-24 uppercase tracking-[20px] text-gold dark:text-tomato text-2xl font-bold"
      >
        {pageInfo?.aboutTitle}
      </motion.h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="relative -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      >
        <Image
          className="rounded-full object-cover md:rounded-lg"
          src={urlFor(pageInfo?.aboutPic).url()}
          alt="photo"
          layout="fill"
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <motion.h4
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold text-corn dark:text-honey "
        >
          {pageInfo?.aboutSubtitle}
        </motion.h4>
        <motion.p
          initial={{ y: 130, opacity: 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl font-semibold"
        >
          {/* {pageInfo?.backgroundInformation} */}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ratione tempore ullam, culpa quam eveniet non amet nobis laboriosam officia praesentium accusantium nemo commodi, laudantium ipsum illo ad aut exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum vel nihil voluptates fugiat, odit mollitia reprehenderit alias cum eius voluptate earum vitae eos sint provident deserunt consequatur quidem veniam illo.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic possimus ex totam debitis doloremque aperiam repudiandae excepturi corporis nemo. Esse, deserunt. Odio omnis magnam delectus excepturi at consectetur dolor sint. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab sint sed et laborum ex vel voluptates veritatis, aspernatur magnam reiciendis rem quibusdam odio velit quas adipisci. Temporibus sint provident ab?
        </motion.p>
      </div>
    </div>
  );
}
