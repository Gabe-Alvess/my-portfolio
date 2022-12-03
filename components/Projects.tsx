import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { urlFor } from "../sanity";
import {
  PageInfo,
  PageInfoFR,
  PageInfoNL,
  PageInfoPT,
  Project,
} from "../typings";

type Props = {
  projects: Project[];
  pageInfo: PageInfo;
  pageInfoNL: PageInfoNL;
  pageInfoFR: PageInfoFR;
  pageInfoPT: PageInfoPT;
};

function Projects({
  projects,
  pageInfo,
  pageInfoNL,
  pageInfoFR,
  pageInfoPT,
}: Props) {
  let router = useRouter();

  const title =
    router.locale === "en"
      ? pageInfo?.projectsTitle
      : router.locale === "nl"
      ? pageInfoNL?.projectsTitle
      : router.locale === "fr"
      ? pageInfoFR?.projectsTitle
      : router.locale === "pt"
      ? pageInfoPT?.projectsTitle
      : "";

  const subtitle =
    router.locale === "en"
      ? pageInfo?.projectsSubtitle
      : router.locale === "nl"
      ? pageInfoNL?.projectsSubtitle
      : router.locale === "fr"
      ? pageInfoFR?.projectsSubtitle
      : router.locale === "pt"
      ? pageInfoPT?.projectsSubtitle
      : "";

  const word1 =
    router.locale === "en"
      ? pageInfo?.word_1
      : router.locale === "nl"
      ? pageInfoNL?.word_1
      : router.locale === "fr"
      ? pageInfoFR?.word_1
      : router.locale === "pt"
      ? pageInfoPT?.word_1
      : "";

  const word2 =
    router.locale === "en"
      ? pageInfo?.word_2
      : router.locale === "nl"
      ? pageInfoNL?.word_2
      : router.locale === "fr"
      ? pageInfoFR?.word_2
      : router.locale === "pt"
      ? pageInfoPT?.word_2
      : "";

  return (
    <div className="flex flex-col overflow-hidden  relative h-screen text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <motion.h2
        initial={{ x: -300, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="absolute top-24 uppercase tracking-[20px] text-gold dark:text-tomato text-2xl font-bold"
      >
        {title}
      </motion.h2>
      <motion.h3
        initial={{ scale: 0, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="absolute top-36 uppercase tracking-[3px] dark:text-honey text-base"
      >
        {subtitle}
      </motion.h3>

      <div className="relative w-full flex overflow-x-auto scroll-smooth snap-x snap-mandatory z-20 scrollbar-thin scrollbar-thumb-gold/80 dark:scrollbar-thumb-tomato/70">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen h-screen flex-shrink-0 snap-center flex flex-col items-center justify-center space-y-5 p-20 md:pd-44"
          >
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="transition-all hover:scale-110 duration-[0.5s] mt-[155px]">
                <a
                  href={project?.buildLink}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <Image
                    className="rounded-[20px] object-cover"
                    src={urlFor(project?.projectImage).url()}
                    alt=""
                    width={400}
                    height={400}
                  />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 2.5 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-10 px-0 md:px-10 max-w-6xl"
            >
              <h4 className=" flex justify-center text-gold dark:text-honey text-3xl font-semibold">
                <p>
                  {word1} {i + 1} {word2} {projects.length}:
                </p>
                <p className="pl-2 text-beige">
                  {router.locale === "en"
                    ? project?.projectTitle
                    : router.locale === "nl"
                    ? project?.projectTitleNL
                    : router.locale === "fr"
                    ? project?.projectTitleFR
                    : router.locale === "pt"
                    ? project?.projectTitlePT
                    : ""}
                </p>
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <Image
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=""
                    width={40}
                    height={40}
                  />
                ))}
              </div>

              <p className="text-lg text-center md:text-left max-h-[120px] overflow-y-scroll overflow-x-hidden scrollbar-thin">
                {router.locale === "en"
                  ? project?.summary
                  : router.locale === "nl"
                  ? project?.summaryNL
                  : router.locale === "fr"
                  ? project?.summaryFR
                  : router.locale === "pt"
                  ? project?.summaryPT
                  : ""}
              </p>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-eerie dark:bg-tomato/50 left-0 h-[400px] -skew-y-12" />
    </div>
  );
}

export default Projects;
