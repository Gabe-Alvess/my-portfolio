import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect } from "react";

type Props = {
  scrollXRef: any;
};

export const ChevronBtns = ({ scrollXRef }: Props) => {
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const horizontalScroll = () => {
      const xValue = scrollXRef.current.scrollLeft;

      setScrollX(xValue);
    };
    scrollXRef.current.addEventListener("scroll", horizontalScroll);
  }, [scrollXRef]);

  const scrollRight = () => {
    scrollXRef.current.scrollTo({
      left: scrollX + 1920,
      behavior: "smooth",
    });

    const maxScrollX = scrollXRef.current.scrollWidth - scrollXRef.current.offsetWidth;

    if (scrollX === maxScrollX) {
      scrollXRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      return;
    }
  };

  const scrollLeft = () => {
    scrollXRef.current.scrollTo({
      left: scrollX - 1920,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button onClick={scrollLeft} className="chevronLeft left-5 ">
        <ChevronLeftIcon className="h-full" />
      </button>

      <button onClick={scrollRight} className="chevronRight right-5">
        <ChevronRightIcon className="h-full" />
      </button>
    </>
  );
};
