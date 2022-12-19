import { PageInfo, PageInfoFR, PageInfoNL, PageInfoPT } from "../../typings";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  pageInfo: PageInfo;
  pageInfoNL: PageInfoNL;
  pageInfoFR: PageInfoFR;
  pageInfoPT: PageInfoPT;
  scrollRef: any;
};

export const SkillBtn = ({ pageInfo, pageInfoNL, pageInfoFR, pageInfoPT, scrollRef }: Props) => {
  let router = useRouter();

  const skillButton =
    router.locale === "en"
      ? pageInfo?.skillsButton
      : router.locale === "nl"
      ? pageInfoNL?.skillsButton
      : router.locale === "fr"
      ? pageInfoFR?.skillsButton
      : router.locale === "pt"
      ? pageInfoPT?.skillsButton
      : "";

  const scrollToSkills = () => {
    scrollRef.current.scrollTo({
      top: 1858,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button type="button" className="Buttons" onClick={scrollToSkills}>
        {skillButton}
      </button>
    </>
  );
};
