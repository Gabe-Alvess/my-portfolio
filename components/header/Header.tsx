import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import {
  PageInfo,
  PageInfoFR,
  PageInfoNL,
  PageInfoPT,
  Social,
} from "../../typings";
import { Dropdown } from "../dropdown";
import Image from "next/image";
import { Switcher } from "../switcher";
import { useSelector } from "react-redux";
import { themeState } from "../../slices/darkModeSlice";
import { useRouter } from "next/router";

type Props = {
  socials: Social[];
  pageInfo: PageInfo;
  pageInfoNL: PageInfoNL;
  pageInfoFR: PageInfoFR;
  pageInfoPT: PageInfoPT;
};

export const Header = ({
  socials,
  pageInfo,
  pageInfoNL,
  pageInfoFR,
  pageInfoPT,
}: Props) => {
  const darkMode = useSelector(themeState);

  let router = useRouter();

  const text =
    router.locale === "en"
      ? pageInfo?.koalenderText
      : router.locale === "nl"
      ? pageInfoNL?.koalenderText
      : router.locale === "fr"
      ? pageInfoFR?.koalenderText
      : router.locale === "pt"
      ? pageInfoPT?.koalenderText
      : "";

  return (
    <header className="sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center justify-evenly w-48"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.socialMediaUrl}
            fgColor={darkMode ? "#fffde1" : "#f2e863"}
            bgColor="transparent"
            target={"_blank"}
            className="hover:bg-black dark:hover:bg-honey rounded-full transition-all duration-[0.5s]"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <a
          href={pageInfo?.koalenderUrl}
          target={"_blank"}
          rel={"noreferrer"}
          className="w-[52px] h-[52px] rounded-full flex justify-center items-center hover:bg-black dark:hover:bg-honey transition-all duration-[0.5s]"
        >
          <Image
            src={
              darkMode
                ? "/images/WHITE_CALENDAR.svg"
                : "/images/CORN_CALENDER.svg"
            }
            alt={""}
            width={"28px"}
            height={"28px"}
          />
        </a>
        <a href={pageInfo?.koalenderUrl} target={"_blank"} rel={"noreferrer"}>
          <p className="uppercase hidden md:inline-flex text-lg font-semibold text-corn dark:text-beige hover:text-black dark:hover:text-honey transition-all duration-[0.5s] mx-2">
            {text}
          </p>
        </a>
        <Dropdown />
        <Switcher />
      </motion.div>
    </header>
  );
};
