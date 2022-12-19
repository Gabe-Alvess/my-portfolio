import { AboutBtn, SkillBtn, ProjectBtn, ContactBtn, DownloadBtn, Text } from "..";
import { PageInfo, PageInfoFR, PageInfoNL, PageInfoPT } from "../../typings";
import { BackgroundCircles } from "../circles";
import { useRouter } from "next/router";
import { urlFor } from "../../sanity";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
  pageInfoNL: PageInfoNL;
  pageInfoFR: PageInfoFR;
  pageInfoPT: PageInfoPT;
  scrollRef: any;
};

export const Main = ({ pageInfo, pageInfoNL, pageInfoFR, pageInfoPT, scrollRef }: Props) => {
  let router = useRouter();

  const role =
    router.locale === "en"
      ? pageInfo?.role
      : router.locale === "nl"
      ? pageInfoNL?.role
      : router.locale === "fr"
      ? pageInfoFR?.role
      : router.locale === "pt"
      ? pageInfoPT?.role
      : "";

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative h-32 w-32 mx-auto">
        <Image className="rounded-full" layout="fill" src={urlFor(pageInfo?.introImage).url()} alt="" priority />
      </div>
      <div className="z-20">
        <h1 className="text-beige dark:text-beige text-base uppercase pb-2 tracking-[15px] animate-pulse font-bold">{role}</h1>
        <Text pageInfo={pageInfo} pageInfoNL={pageInfoNL} pageInfoFR={pageInfoFR} pageInfoPT={pageInfoPT} />
        <div className="pt-5">
          <AboutBtn
            pageInfo={pageInfo}
            pageInfoNL={pageInfoNL}
            pageInfoFR={pageInfoFR}
            pageInfoPT={pageInfoPT}
            scrollRef={scrollRef}
          />
          <SkillBtn
            pageInfo={pageInfo}
            pageInfoNL={pageInfoNL}
            pageInfoFR={pageInfoFR}
            pageInfoPT={pageInfoPT}
            scrollRef={scrollRef}
          />
          <ProjectBtn
            pageInfo={pageInfo}
            pageInfoNL={pageInfoNL}
            pageInfoFR={pageInfoFR}
            pageInfoPT={pageInfoPT}
            scrollRef={scrollRef}
          />
          <ContactBtn
            pageInfo={pageInfo}
            pageInfoNL={pageInfoNL}
            pageInfoFR={pageInfoFR}
            pageInfoPT={pageInfoPT}
            scrollRef={scrollRef}
          />
          <DownloadBtn
            pageInfo={pageInfo}
            pageInfoNL={pageInfoNL}
            pageInfoFR={pageInfoFR}
            pageInfoPT={pageInfoPT}
            scrollRef={scrollRef}
          />
        </div>
      </div>
    </div>
  );
};
