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

export const AboutBtn = ({ pageInfo, pageInfoNL, pageInfoFR, pageInfoPT, scrollRef }: Props) => {
  let router = useRouter();

  const aboutButton =
    router.locale === "en"
      ? pageInfo?.aboutButton
      : router.locale === "nl"
      ? pageInfoNL?.aboutButton
      : router.locale === "fr"
      ? pageInfoFR?.aboutButton
      : router.locale === "pt"
      ? pageInfoPT?.aboutButton
      : "";

  const scrollToAbout = () => {
    scrollRef.current.scrollTo({
      top: 929,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button type="button" className="Buttons" onClick={scrollToAbout}>
        {aboutButton}
      </button>
    </>
  );
};
