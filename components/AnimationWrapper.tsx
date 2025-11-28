"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationWrapperProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
};

const AnimationWrapper = ({
  children,
  delay = 0,
  duration = 0.5,
  className,
}: AnimationWrapperProps) => {
  const el = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        el.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: duration,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el.current,
            start: "top 85%", // Animation starts when top of element hits 85% of viewport height
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: el }
  );

  return (
    <div ref={el} className={className}>
      {children}
    </div>
  );
};

export default AnimationWrapper;
