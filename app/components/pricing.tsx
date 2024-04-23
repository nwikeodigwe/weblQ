"use client";
import { motion, useAnimation } from "framer-motion";
import { FcConferenceCall } from "react-icons/fc";
import { LuPhoneCall } from "react-icons/lu";
import { button, easing, element } from "../animation/motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <section
      className="my-28 flex flex-col justify-center"
      id="pricing"
      ref={ref}
    >
      <motion.div
        className="container max-w-screen-md mx-auto"
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: {
              delayChildren: 0.5,
              staggerChildren: 0.5,
              easing,
            },
          },
        }}
      >
        <motion.h2
          className="text-4xl text-yellow-400 underline"
          variants={element}
        >
          Pricing
        </motion.h2>
        <motion.p className="text-3xl mt-5" variants={element}>
          Get a dedicated product team for 20% of the price of hiring a
          full-time team.
        </motion.p>
        <motion.p variants={element} className="text-3xl mt-28">
          $2,000 <span className="text-sm font-light">bi-weekly</span>
        </motion.p>
        <motion.p className="text-3xl mt-5" variants={element}>
          Senior full-stack developer, QA tester and product manager.
        </motion.p>
        <motion.p className="text-3xl mt-28" variants={element}>
          $4,000 <span className="text-sm font-light">bi-weekly</span>
        </motion.p>
        <motion.p className="text-3xl mt-5" variants={element}>
          Full product team.
        </motion.p>
        <motion.p className="text-3xl mt-1" variants={element}>
          Technical product manager,UI/UX designer,
        </motion.p>
        <motion.p className="text-3xl mt-1" variants={element}>
          full-stack developer and QA tester.
        </motion.p>

        <motion.p className="text-3xl mt-28" variants={element}>
          Pay every two weeks, cancel anytime.
        </motion.p>

        <motion.p className="text-3xl mt-28" variants={element}>
          Pitch us your idea and we&apos;ll get back to you with a{" "}
          <span className="underline">proposal in 24 hours</span>. If you worry
          about your idea being stolen, we&apos;ll sign a custom NDA before you
          share it with us.
        </motion.p>
        <div className="mt-28">
          <motion.button
            className="flex items-center text-3xl gap-4 py-3 px-4 rounded-full border-[2px] border-white"
            variants={element}
            whileHover={{
              scale: 1.1,
              transition: {
                type: "spring",
                mass: 0.4,
                stiffness: 400,
                damping: 10,
              },
            }}
          >
            <span className="p-1 rounded-full border-[2px] border-white">
              <FcConferenceCall />
            </span>
            Book a call <LuPhoneCall />{" "}
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};
