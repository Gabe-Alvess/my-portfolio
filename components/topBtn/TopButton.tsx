import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";
import React from "react";

type Props = {};

export const TopButton = ({}: Props) => {
  return (
    <footer className="sticky bottom-5 w-full cursor-pointer">
      <div className="flex items-center justify-center">
        <ArrowSmallUpIcon
          className={`w-6 h-6 text-gold/40 hover:text-gold dark:text-honey/40  dark:hover:text-honey cursor-pointer transition-all duration-[0.5s]`}
        />
      </div>
    </footer>
  );
};
