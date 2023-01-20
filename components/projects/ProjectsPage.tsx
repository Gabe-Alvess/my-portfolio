import { PageInfo, PageInfoFR, PageInfoNL, PageInfoPT, Project } from "../../typings";
import React, { useRef } from "react";
import { useRouter } from "next/router";
import { urlFor } from "../../sanity";
import Image from "next/image";
import { ChevronBtns } from "../../components";

type Props = {
  projects: Project[];
  pageInfo: PageInfo;
  pageInfoNL: PageInfoNL;
  pageInfoFR: PageInfoFR;
  pageInfoPT: PageInfoPT;
};

export const Projects = ({ projects, pageInfo, pageInfoNL, pageInfoFR, pageInfoPT }: Props) => {
  const scrollXRef: any = useRef();
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
    <div className="flex flex-col relative h-screen text-left md:flex-row max-w-full justify-evenly mx-auto items-center select-none z-0 ">
      <h2 className="absolute top-24 uppercase tracking-[20px] text-gold dark:text-tomato text-2xl font-bold">{title}</h2>
      <h3 className="absolute top-36 uppercase tracking-[3px] dark:text-honey text-base">{subtitle}</h3>

      <div ref={scrollXRef} className="relative w-full flex scrollbar scrollbar-thumb-transparent z-10">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center space-y-5 p-20 md:p-44"
          >
            <div>
              <div className="transition-all hover:scale-110 duration-[0.5s] mt-[155px]">
                <a href={project?.buildLink} target={"_blank"} rel={"noreferrer"}>
                  <Image
                    className="rounded-[20px] object-cover"
                    src={urlFor(project?.projectImage).url()}
                    alt=""
                    width={400}
                    height={400}
                    priority
                  />
                </a>
              </div>
            </div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
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
                  <Image key={technology._id} src={urlFor(technology.image).url()} alt="" width={40} height={40} />
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
            </div>
          </div>
        ))}
      </div>
      <ChevronBtns scrollXRef={scrollXRef} />
      <div className="w-full absolute top-[30%] bg-eerie dark:bg-tomato/50 left-0 h-[400px] -skew-y-12" />
    </div>
  );
};
