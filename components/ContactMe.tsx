import { motion } from "framer-motion";
import React from "react";
import {
  DevicePhoneMobileIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { PageInfo } from "../typings";
import Form from "./Form";

type Props = {
  pageInfo: PageInfo;
};

function ContactMe({ pageInfo }: Props) {
  return (
    <div className="h-screen relative flex justify-evenly items-center text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto">
      <motion.h3
        initial={{ y: -90, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ y: 0, opacity: 1.1 }}
        viewport={{ once: true }}
        className="absolute top-24 uppercase tracking-[20px] text-gold dark:text-tomato text-2xl font-bold"
      >
        {pageInfo.contactTitle}
      </motion.h3>

      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.2, delay: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-10"
      >
        <div className="flex flex-col items-center space-y-10">
          <div className="flex items-center space-x-5">
            <MapPinIcon className="text-gold dark:text-tomato w-7 animate-pulse" />
            <a href={pageInfo.googleMapsUrl} rel="noreferrer" target={"_blank"}>
              <p className="text-2xl cursor-pointer hover:text-green-400 dark:hover:text-honey hover:scale-[105%] transition-all duration-[0.5s]">
                {pageInfo?.address}
              </p>
            </a>
          </div>

          <div className="flex items-center space-x-5">
            <EnvelopeIcon className="text-gold dark:text-tomato w-7 h-7 animate-pulse" />
            <p className="text-2xl">{pageInfo?.email}</p>
          </div>

          <div className="flex items-center space-x-5">
            <DevicePhoneMobileIcon className="text-gold dark:text-tomato w-7 h-7 animate-pulse" />
            <p className="text-2xl">{pageInfo?.phoneNumber}</p>
          </div>
        </div>
        <Form pageInfo={pageInfo} />
      </motion.div>
    </div>
  );
}

export default ContactMe;
