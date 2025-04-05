"use client";

import { cardFlowAnimation } from "@/animations/cardAnimation";
import { motion } from "motion/react";
import React from "react";

type AnimationWrapperProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
};

const AnimationWrapper = ({
  children,
  delay,
  duration,
}: AnimationWrapperProps) => {
  return (
    <motion.div {...cardFlowAnimation(duration, delay)}>{children}</motion.div>
  );
};

export default AnimationWrapper;
