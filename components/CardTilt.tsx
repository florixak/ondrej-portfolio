"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import { Link } from "@/i18n/routing";

type TiltCardProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
};

const CardTilt = ({ children, href, className }: TiltCardProps) => {
  const [transformStyle, setTransformStyle] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    setMousePosition({
      x: relativeX * 100,
      y: relativeY * 100,
    });

    const tiltX = (relativeX - 0.5) * 7;
    const tiltY = (relativeY - 0.5) * -7;
    const newTransform = `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) scale3d(1, 1, 1)`;
    setTransformStyle(newTransform);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTransformStyle("");
  };

  return (
    <article
      ref={itemRef}
      className={cn(
        "relative group cursor-pointer text-foreground h-[20rem] w-[20rem] md:h-[23rem] bg-background border-foreground/20 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle || undefined,
      }}
    >
      <div
        className={cn(
          "absolute inset-0 pointer-events-none transition-opacity duration-300 z-10",
          isHovering ? "opacity-100" : "opacity-0"
        )}
        style={{
          background: isHovering
            ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 30%)`
            : "none",
        }}
      />
      <Link href={href || "#"} className="h-full w-full z-20">
        {children}
      </Link>
    </article>
  );
};

export default CardTilt;
