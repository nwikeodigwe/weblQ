export const element = {
  hidden: { y: "10vw", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.2 },
  },
};

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, staggerDirection: 1 },
  },
};

export const item = {
  hidden: { y: "10vh" },
  show: {
    y: 0,
  },
  transition: {
    type: "spring",
    mass: 0.4,
    damping: 8,
    duration: 1,
  },
};

export const button = {
  hidden: {
    opacity: 0,
    y: "10vh",
  },
  show: {
    transition: {
      delay: 0.2,
      duration: 0.5,
      type: "spring",
      mass: 0.4,
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
