import {
  PageInfo,
  PageInfoFR,
  PageInfoNL,
  PageInfoPT,
  Project,
  Skill,
  Social,
} from "../typings";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchPageInfoPT } from "../utils/fetchPageInfoPT";
import { fetchPageInfoFR } from "../utils/fetchPageInfoFR";
import { fetchPageInfoNL } from "../utils/fetchPageInfoNL";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocial } from "../utils/fetchSocials";
import { useSelector } from "react-redux";
import { themeState } from "../slices/darkModeSlice";
// import { useEffect, useState } from "react";

type Props = {
  pageInfo: PageInfo;
  pageInfoNL: PageInfoNL;
  pageInfoFR: PageInfoFR;
  pageInfoPT: PageInfoPT;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({
  pageInfo,
  pageInfoNL,
  pageInfoFR,
  pageInfoPT,
  skills,
  projects,
  socials,
}: Props) => {
  const darkMode = useSelector(themeState);

  // const [showTopBtn, setShowTopBtn] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 400) {
  //       setShowTopBtn(true);
  //     } else {
  //       setShowTopBtn(false);
  //     }
  //   });
  // }, []);

  // console.log(showTopBtn)

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-red-800 text-beige dark:bg-eerie h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 font-Signika scrollbar-thin scrollbar-thumb-gold/80 dark:scrollbar-thumb-tomato">
        <Head>
          <title>{pageInfo?.name} - Portfolio</title>
        </Head>
        <Header
          socials={socials}
          pageInfo={pageInfo}
          pageInfoNL={pageInfoNL}
          pageInfoFR={pageInfoFR}
          pageInfoPT={pageInfoPT}
        />
        <section id="main" className="snap-start">
          <Main
            pageInfo={pageInfo}
            pageInfoNL={pageInfoNL}
            pageInfoFR={pageInfoFR}
            pageInfoPT={pageInfoPT}
          />
        </section>
        <section id="about" className="snap-center">
          <About
            pageInfo={pageInfo}
            pageInfoNL={pageInfoNL}
            pageInfoFR={pageInfoFR}
            pageInfoPT={pageInfoPT}
          />
        </section>
        <section id="skills" className="snap-start">
          <Skills
            skills={skills}
            pageInfo={pageInfo}
            pageInfoNL={pageInfoNL}
            pageInfoFR={pageInfoFR}
            pageInfoPT={pageInfoPT}
          />
        </section>
        <section id="projects" className="snap-start">
          <Projects
            projects={projects}
            pageInfo={pageInfo}
            pageInfoNL={pageInfoNL}
            pageInfoFR={pageInfoFR}
            pageInfoPT={pageInfoPT}
          />
        </section>
        <section id="contact" className="snap-start">
          <Contact
            pageInfo={pageInfo}
            pageInfoNL={pageInfoNL}
            pageInfoFR={pageInfoFR}
            pageInfoPT={pageInfoPT}
          />
        </section>
        <Link href="#main">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
              <ChevronDoubleUpIcon
                className={`w-10 h-10 text-gold/40 hover:text-gold dark:text-honey/40  dark:hover:text-honey cursor-pointer transition-all duration-[0.5s]`}
              />
            </div>
          </footer>
        </Link>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const pageInfoNL: PageInfoNL = await fetchPageInfoNL();
  const pageInfoFR: PageInfoFR = await fetchPageInfoFR();
  const pageInfoPT: PageInfoPT = await fetchPageInfoPT();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      pageInfoNL,
      pageInfoFR,
      pageInfoPT,
      skills,
      projects,
      socials,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every every 10 seconds
    revalidate: 10,
  };
};
