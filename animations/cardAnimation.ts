export const cardFlowAnimation = (duration?: number, delay?: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: {
    duration: duration ?? 0.3,
    ease: "easeInOut",
    delay: delay ?? 0,
  },
});
