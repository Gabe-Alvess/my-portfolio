import { PageInfo, PageInfoFR, PageInfoNL, PageInfoPT, Skill as SkillType } from "../../typings";
import { SkillComponent } from "./SkillComponent";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  skills: SkillType[];
  pageInfo: PageInfo;
  pageInfoNL: PageInfoNL;
  pageInfoFR: PageInfoFR;
  pageInfoPT: PageInfoPT;
};

export const Skills = ({ skills, pageInfo, pageInfoNL, pageInfoFR, pageInfoPT }: Props) => {
  let router = useRouter();

  const title =
    router.locale === "en"
      ? pageInfo?.skillsTitle
      : router.locale === "nl"
      ? pageInfoNL?.skillsTitle
      : router.locale === "fr"
      ? pageInfoFR?.skillsTitle
      : router.locale === "pt"
      ? pageInfoPT?.skillsTitle
      : "";

  const subtitle =
    router.locale === "en"
      ? pageInfo?.skillsSubtitle
      : router.locale === "nl"
      ? pageInfoNL?.skillsSubtitle
      : router.locale === "fr"
      ? pageInfoFR?.skillsSubtitle
      : router.locale === "pt"
      ? pageInfoPT?.skillsSubtitle
      : "";

  return (
    <div className="min-h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center">
      <h2 className="absolute top-24 uppercase tracking-[20px] text-gold dark:text-tomato text-2xl font-bold">{title}</h2>
      <h3 className="absolute top-36 uppercase tracking-[3px] dark:text-honey text-base">{subtitle}</h3>
      <div className="grid grid-cols-6 gap-5">
        {skills.map((skill) => (
          <SkillComponent key={skill._id} skill={skill} />
        ))}
      </div>
    </div>
  );
};
