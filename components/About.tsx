import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PageInfo, PageInfoFR, PageInfoNL, PageInfoPT } from "../typings";
import { urlFor } from "../sanity";
import { useRouter } from "next/router";

type Props = {
  pageInfo: PageInfo;
  pageInfoNL: PageInfoNL;
  pageInfoFR: PageInfoFR;
  pageInfoPT: PageInfoPT;
};

function About({ pageInfo, pageInfoNL, pageInfoFR, pageInfoPT }: Props) {
  let router = useRouter();

  const title =
    router.locale === "en"
      ? pageInfo?.aboutTitle
      : router.locale === "nl"
      ? pageInfoNL?.aboutTitle
      : router.locale === "fr"
      ? pageInfoFR?.aboutTitle
      : router.locale === "pt"
      ? pageInfoPT?.aboutTitle
      : "";

  const subtitle =
    router.locale === "en"
      ? pageInfo?.aboutSubtitle
      : router.locale === "nl"
      ? pageInfoNL?.aboutSubtitle
      : router.locale === "fr"
      ? pageInfoFR?.aboutSubtitle
      : router.locale === "pt"
      ? pageInfoPT?.aboutSubtitle
      : "";

  const info =
    router.locale === "en"
      ? pageInfo?.backgroundInformation
      : router.locale === "nl"
      ? pageInfoNL?.backgroundInformation
      : router.locale === "fr"
      ? pageInfoFR?.backgroundInformation
      : router.locale === "pt"
      ? pageInfoPT?.backgroundInformation
      : "";

  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <motion.h3
        initial={{ y: -90, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="absolute top-24 uppercase tracking-[20px] text-gold dark:text-tomato text-2xl font-bold"
      >
        {title}
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
          {subtitle}
        </motion.h4>
        <motion.p
          initial={{ y: 130, opacity: 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl font-semibold"
        >
          {info}
        </motion.p>
      </div>
    </div>
  );
}

export default About;
