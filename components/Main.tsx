import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "../components/BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { PageInfo, PageInfoFR, PageInfoNL, PageInfoPT } from "../typings";
import { urlFor } from "../sanity";
import { useSelector } from "react-redux";
import { themeState } from "../slices/darkModeSlice";
import { useRouter } from "next/router";

type Props = {
  pageInfo: PageInfo;
  pageInfoNL: PageInfoNL;
  pageInfoFR: PageInfoFR;
  pageInfoPT: PageInfoPT;
};

function Main({ pageInfo, pageInfoNL, pageInfoFR, pageInfoPT }: Props) {
  const darkMode = useSelector(themeState);

  let router = useRouter();

  const [text] = useTypewriter({
    words:
      router.locale === "en"
        ? [
            pageInfo?.typewriter_1,
            pageInfo?.typewriter_2,
            pageInfo?.typewriter_3,
            pageInfo?.typewriter_4,
          ]
        : router.locale === "nl"
        ? [
            pageInfoNL?.typewriter_1,
            pageInfoNL?.typewriter_2,
            pageInfoNL?.typewriter_3,
            pageInfoNL?.typewriter_4,
          ]
        : router.locale === "fr"
        ? [
            pageInfoFR?.typewriter_1,
            pageInfoFR?.typewriter_2,
            pageInfoFR?.typewriter_3,
            pageInfoFR?.typewriter_4,
          ]
        : router.locale === "pt"
        ? [
            pageInfoPT?.typewriter_1,
            pageInfoPT?.typewriter_2,
            pageInfoPT?.typewriter_3,
            pageInfoPT?.typewriter_4,
          ]
        : [""],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

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
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative h-32 w-32 mx-auto">
        <Image
          className="rounded-full"
          layout="fill"
          src={urlFor(pageInfo?.introImage).url()}
          alt=""
          priority
        />
      </div>
      <div className="z-20">
        <h1 className="text-beige dark:text-beige text-base uppercase pb-2 tracking-[15px] animate-pulse font-bold">
          {role}
        </h1>
        <h2 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3 text-corn dark:text-honey text-[29px] md:text-[37px] xl:text-6xl ">
            {text}
          </span>
          <Cursor cursorColor={darkMode ? "#FD2E2E" : "#FFFDE1"} />
        </h2>
        <div className="pt-5">
          <Link href="#about">
            <button className="Buttons">{aboutButton}</button>
          </Link>

          <Link href="#skills">
            <button className="Buttons">{skillButton}</button>
          </Link>

          <Link href="#projects">
            <button className="Buttons">{projectButton}</button>
          </Link>

          <Link href="#contact">
            <button className="Buttons">{contactButton}</button>
          </Link>

          <a href={`${pageInfo?.myCurriculumURL}?dl=`}>
            <button className="Buttons">{downloadButton}</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
