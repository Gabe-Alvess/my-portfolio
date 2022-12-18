import { fetchPageInfo, fetchPageInfoNL, fetchPageInfoFR, fetchPageInfoPT, fetchProjects, fetchSkills, fetchSocial } from "../utils";
import { PageInfo, PageInfoFR, PageInfoNL, PageInfoPT, Project, Skill, Social } from "../typings";
import { About, Contact, Header, Main, Projects, Skills, TopButton } from "../components";
import { themeState } from "../slices/darkModeSlice";
import type { GetStaticProps } from "next";
import { useSelector } from "react-redux";
import { useRef } from "react";
import Head from "next/head";

type Props = {
  pageInfo: PageInfo;
  pageInfoNL: PageInfoNL;
  pageInfoFR: PageInfoFR;
  pageInfoPT: PageInfoPT;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, pageInfoNL, pageInfoFR, pageInfoPT, skills, projects, socials }: Props) => {
  const darkMode = useSelector(themeState);
  const scrollRef: any = useRef();

  return (
    <div className={darkMode ? "dark" : ""}>
      <div ref={scrollRef} className="wrapper">
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
            scrollRef={scrollRef}
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
        <TopButton scrollRef={scrollRef} />
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
