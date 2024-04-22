import { motion } from "framer-motion";
import React from "react";
import { element } from "./motion";

export const Plan = () => {
  return (
    <section className="my-72 flex flex-col justify-center">
      <div className="container max-w-screen-md mx-auto">
        <motion.p
          className="text-3xl"
          variants={element}
          initial="hidden"
          animate="show"
        >
          Strategy, design, prototype, code and deployment.
        </motion.p>
      </div>
    </section>
  );
};
