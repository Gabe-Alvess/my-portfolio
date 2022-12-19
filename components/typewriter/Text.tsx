import { PageInfo, PageInfoFR, PageInfoNL, PageInfoPT } from "../../typings";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { themeState } from "../../slices/darkModeSlice";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  pageInfo: PageInfo;
  pageInfoNL: PageInfoNL;
  pageInfoFR: PageInfoFR;
  pageInfoPT: PageInfoPT;
};

export const Text = ({ pageInfo, pageInfoNL, pageInfoFR, pageInfoPT }: Props) => {
  const darkMode = useSelector(themeState);

  let router = useRouter();

  const [text] = useTypewriter({
    words:
      router.locale === "en"
        ? [pageInfo?.typewriter_1, pageInfo?.typewriter_2, pageInfo?.typewriter_3, pageInfo?.typewriter_4]
        : router.locale === "nl"
        ? [pageInfoNL?.typewriter_1, pageInfoNL?.typewriter_2, pageInfoNL?.typewriter_3, pageInfoNL?.typewriter_4]
        : router.locale === "fr"
        ? [pageInfoFR?.typewriter_1, pageInfoFR?.typewriter_2, pageInfoFR?.typewriter_3, pageInfoFR?.typewriter_4]
        : router.locale === "pt"
        ? [pageInfoPT?.typewriter_1, pageInfoPT?.typewriter_2, pageInfoPT?.typewriter_3, pageInfoPT?.typewriter_4]
        : [""],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <>
      <h2 className="text-5xl lg:text-6xl font-semibold px-10">
        <span className="mr-3 text-corn dark:text-honey text-[29px] md:text-[37px] xl:text-6xl ">{text}</span>
        <Cursor cursorColor={darkMode ? "#FD2E2E" : "#FFFDE1"} />
      </h2>
    </>
  );
};
