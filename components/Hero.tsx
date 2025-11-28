"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { MapPin, User } from "lucide-react";
import { useTranslations } from "next-intl";
import { contacts } from "@/data/data";

const Hero = () => {
  const t = useTranslations("home");
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const slashRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.fromTo(
        slashRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.4, ease: "power4.inOut" }
      ).to(slashRef.current, {
        scaleX: 0,
        transformOrigin: "right center",
        duration: 0.4,
        ease: "power4.inOut",
        delay: 0.1,
      });

      tl.from(
        imageRef.current,
        {
          x: -50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3"
      );

      tl.from(
        nameRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      )
        .from(
          ".hero-text",
          {
            y: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .from(
          ".contact-icon",
          {
            scale: 0,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.5"
        );

      // Floating shapes animation
      gsap.to(".floating-shape", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "linear",
      });

      gsap.to(".floating-shape", {
        y: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 2,
          from: "random",
        },
      });
    },
    { scope: containerRef }
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;

    gsap.to(".floating-shape", {
      x: x,
      y: y,
      duration: 1,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[70vh] flex flex-col md:flex-row justify-center items-center gap-20 overflow-hidden py-20 px-4"
    >
      <div className="absolute top-1/2 left-0 w-full h-1 -rotate-12 z-0 pointer-events-none">
        <div ref={slashRef} className="w-full h-full bg-primary-green/50" />
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-5">
        <div className="floating-shape absolute top-1/4 left-1/4 w-16 h-16 border-2 border-primary-green rotate-45" />
        <div className="floating-shape absolute top-3/4 right-1/4 w-24 h-24 border-2 border-foreground rotate-12" />
        <div className="floating-shape absolute top-1/2 left-3/4 w-12 h-12 bg-primary-green/20 rotate-90" />
        <div
          className="floating-shape absolute bottom-1/4 left-1/3 w-20 h-20 bg-foreground/10"
          style={{
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
        />
      </div>

      <div
        ref={imageRef}
        className="relative z-10 w-64 h-64 md:w-80 md:h-80 shrink-0"
      >
        <div
          className="w-full h-full bg-foreground/5 border-2 border-primary-green/30 flex items-center justify-center overflow-hidden"
          style={{
            clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
          }}
        >
          <User className="w-24 h-24 text-muted-foreground/20" />
          <div className="absolute inset-0 bg-linear-to-tr from-primary-green/10 to-transparent" />
        </div>

        <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary-green" />
        <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary-green" />
      </div>

      <div className="z-10 flex flex-col items-center md:items-start gap-6 max-w-xl text-center md:text-left">
        <div className="overflow-hidden">
          <h1
            ref={nameRef}
            className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70"
          >
            Ondřej Pták
          </h1>
        </div>

        <div className="flex flex-col gap-2 text-lg md:text-xl text-muted-foreground items-center md:items-start">
          <p className="hero-text flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary-green" />{" "}
            {t("about.location")}
          </p>
          <div className="hero-text flex flex-col gap-1 mt-4">
            <span>{t("about.description.0")}</span>
            <span>{t("about.description.1")}</span>
            <span>{t("about.description.2")}</span>
          </div>
        </div>

        <div className="flex gap-6 mt-8">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon p-3 rounded-full border border-foreground/10 hover:border-primary-green hover:bg-primary-green/10 hover:text-primary-green transition-colors duration-300"
              aria-label={contact.name}
            >
              <contact.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
