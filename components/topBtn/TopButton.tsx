import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

type Props = {
  scrollRef: any;
};

export const TopButton = ({ scrollRef }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (scrollRef.current.scrollTop > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    scrollRef.current.addEventListener("scroll", toggleVisibility);
  }, [scrollRef]);

  const scrollToTop = () => {
    scrollRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="fixed bottom-2 w-full flex justify-center">
      <button className={`${isVisible ? "opacity-100" : "opacity-0"} topBtn`} onClick={scrollToTop} type="button">
        <ChevronDoubleUpIcon className="w-6 h-6" aria-hidden="true" />
      </button>
    </footer>
  );
};
