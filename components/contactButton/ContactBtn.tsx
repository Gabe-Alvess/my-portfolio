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

export const ContactBtn = ({ pageInfo, pageInfoNL, pageInfoFR, pageInfoPT, scrollRef }: Props) => {
  let router = useRouter();

  const contactButton =
    router.locale === "en"
      ? pageInfo?.contactButton
      : router.locale === "nl"
      ? pageInfoNL?.contactButton
      : router.locale === "fr"
      ? pageInfoFR?.contactButton
      : router.locale === "pt"
      ? pageInfoPT?.contactButton
      : "";

  const scrollToContact = () => {
    scrollRef.current.scrollTo({
      top: 3716,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button type="button" className="Buttons" onClick={scrollToContact}>
        {contactButton}
      </button>
    </>
  );
};
