"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "next-themes";
import { Experience } from "@/types/types";
import { Suspense, useEffect, useState } from "react";
import Loading from "@/app/[locale]/loading";

type ExperienceTimelineProps = {
  experience: Experience[];
};

const ExperienceTimeline = ({ experience }: ExperienceTimelineProps) => {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const isDark = resolvedTheme === "dark";

  const textColor = isDark ? "#fff" : "#000";
  const backgroundColor = isDark ? "rgb(30, 30, 30)" : "#fff";
  const lineColor = isDark ? "#555" : "#ddd";
  const iconBgColor = "var(--primary-green, #3bebab)";
  const iconColor = "#000";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Suspense fallback={<Loading />}>
      <VerticalTimeline lineColor={lineColor}>
        {experience.map((exp) => (
          <VerticalTimelineElement
            key={exp.id}
            date={exp.date}
            dateClassName="text-foreground opacity-80"
            contentStyle={{
              background: backgroundColor,
              color: textColor,
              boxShadow: isDark
                ? "0 3px 0 rgba(100, 100, 100, 0.2)"
                : undefined,
              border: isDark ? "1px solid rgba(100, 100, 100, 0.2)" : undefined,
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${backgroundColor}`,
            }}
            iconStyle={{
              background: iconBgColor,
              color: iconColor,
              boxShadow: `0 0 0 4px ${lineColor}`,
            }}
            icon={exp.icon}
            className="vertical-timeline-element--education"
          >
            <div>
              <h3 className="vertical-timeline-element-title font-bold text-xl mb-1">
                {exp.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-muted-foreground mb-2">
                {exp.subtitle}
              </h4>
              <p className="text-foreground/80">{exp.description}</p>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Suspense>
  );
};

export default ExperienceTimeline;
