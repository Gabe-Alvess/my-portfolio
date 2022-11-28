import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
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

export default function Intro({
  pageInfo,
  pageInfoNL,
  pageInfoFR,
  pageInfoPT,
}: Props) {
  const darkMode = useSelector(themeState);
  const [text] = useTypewriter({
    words: [
      pageInfo?.typewriter_1,
      pageInfo?.typewriter_2,
      pageInfo?.typewriter_3,
      pageInfo?.typewriter_4,
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  let router = useRouter();

  let role =
    router.locale === "en-US"
      ? pageInfo?.role
      : router.locale === "nl-BE"
      ? pageInfoNL?.role
      : router.locale === "fr-BE"
      ? pageInfoFR?.role
      : router.locale === "pt-BR"
      ? pageInfoPT?.role
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
            <button className="Buttons">{pageInfo?.aboutButton}</button>
          </Link>

          <Link href="#skills">
            <button className="Buttons">{pageInfo?.skillsButton}</button>
          </Link>

          <Link href="#projects">
            <button className="Buttons">{pageInfo?.projectsButton}</button>
          </Link>

          <Link href="#contact">
            <button className="Buttons">{pageInfo?.contactButton}</button>
          </Link>

          <a href={`${pageInfo?.myCurriculumURL}?dl=`}>
            <button className="Buttons">{pageInfo?.downloadButton}</button>
          </a>
        </div>
      </div>
    </div>
  );
}
