import React from "react";
import { element } from "./motion";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="my-72 flex flex-col justify-center" id="about">
      <div className="container max-w-screen-md mx-auto">
        <motion.p
          className="text-3xl"
          variants={element}
          initial="hidden"
          animate="show"
        >
          From idea to product launch, we handle it all, in as little as 2-4
          weeks.
        </motion.p>
      </div>
    </section>
  );
};
