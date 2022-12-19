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

export const DownloadBtn = ({ pageInfo, pageInfoNL, pageInfoFR, pageInfoPT, scrollRef }: Props) => {
  let router = useRouter();

  const downloadButton =
    router.locale === "en"
      ? pageInfo?.downloadButton
      : router.locale === "nl"
      ? pageInfoNL?.downloadButton
      : router.locale === "fr"
      ? pageInfoFR?.downloadButton
      : router.locale === "pt"
      ? pageInfoPT?.downloadButton
      : "";

  return (
    <>
      <a href={`${pageInfo?.myCurriculumURL}?dl=`}>
        <button className="Buttons">{downloadButton}</button>
      </a>
    </>
  );
};
