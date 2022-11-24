import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
import { useSelector } from "react-redux";
import { themeValue } from "../slices/darkModeSlice";

type Props = {
  pageInfo: PageInfo;
};

export default function Intro({ pageInfo }: Props) {
  const darkMode = useSelector(themeValue);
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
          {pageInfo?.role}
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
