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

export const ProjectBtn = ({ pageInfo, pageInfoNL, pageInfoFR, pageInfoPT, scrollRef }: Props) => {
  let router = useRouter();

  const projectButton =
    router.locale === "en"
      ? pageInfo?.projectsButton
      : router.locale === "nl"
      ? pageInfoNL?.projectsButton
      : router.locale === "fr"
      ? pageInfoFR?.projectsButton
      : router.locale === "pt"
      ? pageInfoPT?.projectsButton
      : "";

  const scrollToProjects = () => {
    scrollRef.current.scrollTo({
      top: 2787,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button type="button" className="Buttons" onClick={scrollToProjects}>
        {projectButton}
      </button>
    </>
  );
};
