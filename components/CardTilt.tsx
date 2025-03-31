"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import CardContent from "./CardContent";
import { Link } from "@/i18n/routing";

type TiltCardProps = {
  title: string;
  description: string;
  image: React.ReactNode;
  href?: string;
  className?: string;
};

const CardTilt = ({
  title,
  description,
  image,
  href,
  className,
}: TiltCardProps) => {
  const [transformStyle, setTransformStyle] = useState<string | null>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeX - 0.5) * 7;
    const tiltY = (relativeY - 0.5) * -7;

    const newTransform = `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) scale3d(1, 1, 1)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <article
      ref={itemRef}
      className={cn(
        "group cursor-pointer text-foreground h-[20rem] w-[20rem] md:h-[23rem] bg-background border-foreground/20 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle || undefined,
      }}
    >
      <Link href={href || "#"} className="h-full w-full">
        <CardContent title={title} description={description} image={image} />
      </Link>
    </article>
  );
};

export default CardTilt;
