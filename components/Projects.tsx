import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../sanity";
import { PageInfo, Project } from "../typings";

type Props = {
  projects: Project[];
  pageInfo: PageInfo;
};

function Projects({ projects, pageInfo }: Props) {
  return (
    <div className="flex flex-col overflow-hidden  relative h-screen text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <motion.h2
        initial={{ x: -300, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="absolute top-24 uppercase tracking-[20px] text-gold dark:text-tomato text-2xl font-bold"
      >
        {pageInfo?.projectsTitle}
      </motion.h2>
      <motion.h3
        initial={{ scale: 0, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="absolute top-36 uppercase tracking-[3px] dark:text-honey text-base"
      >
        {pageInfo?.projectsSubtitle}
      </motion.h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-thumb-gold/80 dark:scrollbar-thumb-tomato/70">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen h-screen flex-shrink-0 snap-center flex flex-col items-center justify-center space-y-5 p-20 md:pd-44"
          >
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="transition-all hover:scale-110 duration-[0.5s] mt-[155px]">
                <a
                  href={project?.buildLink}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <Image
                    className="rounded-[20px] object-cover"
                    src={urlFor(project?.projectImage).url()}
                    alt=""
                    width={400}
                    height={400}
                  />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 2.5 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-10 px-0 md:px-10 max-w-6xl"
            >
              <h4 className=" flex justify-center text-gold dark:text-honey text-3xl font-semibold">
                <p>
                  {pageInfo?.word_1} {i + 1} {pageInfo?.word_2}{" "}
                  {projects.length}:
                </p>
                <p className="pl-2 text-beige">{project?.projectTitle}</p>
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <Image
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=""
                    width={40}
                    height={40}
                  />
                ))}
              </div>

              <p className="text-lg text-center md:text-left max-h-[120px] overflow-y-scroll overflow-x-hidden scrollbar-thin">
                {/* {project?.summary} */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                voluptas doloremque pariatur reiciendis numquam officiis ab
                culpa debitis. Voluptate vero veritatis magnam nulla facere
                molestiae odit! Ex fugit doloribus soluta. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Molestiae, neque libero?
                Quidem voluptatem eveniet in ad ipsam nobis, adipisci eius
                aliquam harum perferendis accusantium nisi doloremque sint
                consequatur praesentium voluptates! Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Animi nostrum odit iusto voluptate
                blanditiis repellendus possimus! Aut quae, facilis possimus
                porro consequatur magnam magni nesciunt debitis sint blanditiis
                deserunt! Porro? Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Commodi hic reprehenderit harum nemo, error
                sint. Libero, nostrum temporibus! Obcaecati eos nisi dolore
                omnis quia in sunt expedita eum nemo ut! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Provident temporibus sapiente
                quia officia totam. Cum nihil fugiat quasi laudantium voluptates
                ipsum expedita enim assumenda nesciunt voluptas, ea ratione,
                molestias ullam?
              </p>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-eerie dark:bg-tomato/50 left-0 h-[400px] -skew-y-12" />
    </div>
  );
}

export default Projects;
