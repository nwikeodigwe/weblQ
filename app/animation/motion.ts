import { exit } from "process";

export const easing = [0.6, -0.05, 0.01, 0.99];

export const container = {
  visible: {
    transition: {
      staggerChildren: 0.2,
      easing,
    },
  },
};

export const element = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

export const tab = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: easing },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: easing },
  },
};

export const backdrop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: easing },
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: { duration: 0.8, ease: easing },
  },
};

export const button = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    transition: {
      delay: 0.6,
      duration: 1,
      type: "spring",
      mass: 0.1,
      damping: 8,
    },
    opacity: 1,
    y: 0,
  },
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      mass: 0.4,
      stiffness: 400,
      damping: 10,
    },
  },
};
