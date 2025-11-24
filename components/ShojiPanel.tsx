"use client";

import React, { useRef } from "react";
import { Link } from "@/i18n/routing";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

type ShojiPanelProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  href: string;
  className?: string;
};

const ShojiPanel = ({
  title,
  description,
  icon,
  buttonText,
  href,
  className,
}: ShojiPanelProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: containerRef });

  const handleMouseEnter = contextSafe(() => {
    gsap.to(".door-left", {
      xPercent: -100,
      duration: 0.6,
      ease: "power3.inOut",
    });
    gsap.to(".door-right", {
      xPercent: 100,
      duration: 0.6,
      ease: "power3.inOut",
    });

    gsap.to(".cover-content", {
      opacity: 0,
      scale: 0.9,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.fromTo(
      ".inner-content",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, delay: 0.2, ease: "power2.out" }
    );
  });

  const handleMouseLeave = contextSafe(() => {
    gsap.to(".door-left", {
      xPercent: 0,
      duration: 0.5,
      ease: "power3.inOut",
    });
    gsap.to(".door-right", {
      xPercent: 0,
      duration: 0.5,
      ease: "power3.inOut",
    });

    gsap.to(".cover-content", {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      delay: 0.1,
      ease: "power2.out",
    });

    gsap.to(".inner-content", {
      opacity: 0,
      y: 10,
      duration: 0.3,
      ease: "power2.in",
    });
  });

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-[20rem] h-[20rem] md:h-[23rem] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-background border border-foreground/10",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={href} className="block w-full h-full">
        <div className="inner-content absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 z-10">
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>
          <Button variant="outline" className="pointer-events-none">
            {buttonText}
          </Button>
        </div>

        <div className="door-left absolute top-0 left-0 w-1/2 h-full bg-card border-r border-foreground/5 z-20 transition-colors duration-300" />
        <div className="door-right absolute top-0 right-0 w-1/2 h-full bg-card border-l border-foreground/5 z-20 transition-colors duration-300" />

        <div className="cover-content absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none gap-6">
          <div className="text-primary-green transform transition-transform duration-300">
            {icon}
          </div>
          <h2 className="text-2xl font-bold tracking-wider uppercase">
            {title}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default ShojiPanel;
