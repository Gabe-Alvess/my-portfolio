import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {};

export const ProjectScrollX = (props: Props) => {
  gsap.registerPlugin(ScrollTrigger);

  const projectRef: any = useRef();
  const containerRef: any = useRef();

  useEffect(() => {
    gsap.to(projectRef, {
      xPercent: -100 * (projectRef.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef,
        pin: true,
        scrub: 1,
        snap: 1 / (projectRef.length - 1),
        end: () => "+=" + containerRef.offsetWidth,
      },
    });
  }, []);

  return (
    <div ref={containerRef}>
      <div ref={projectRef}>project</div>
      <div ref={projectRef}>project</div>
      <div ref={projectRef}>project</div>
    </div>
  );
};
