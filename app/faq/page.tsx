"use client";
import React, { useEffect } from "react";
import { Tab } from "../components/tab";
import { motion, useAnimation } from "framer-motion";
import { easing, element } from "../animation/motion";
import { useInView } from "react-intersection-observer";
import { IoChevronBackSharp, IoReturnDownBackSharp } from "react-icons/io5";
import Link from "next/link";

export default function Page() {
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
    <main>
      <section className="p-10" ref={ref}>
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
          <motion.h2 variants={element}>
            <Link
              href={"/"}
              className="flex items-center gap-3 text-sm md:text-2xl hover:text-yellow-400 transition duration-200 my-16 md:my-28"
            >
              <IoReturnDownBackSharp /> back
            </Link>
          </motion.h2>
          <motion.h1
            className="text-3xl md:text-4xl text-yellow-400 underline mt-20"
            variants={element}
          >
            Frequently asked questions
          </motion.h1>
          <motion.div className="mt-16" variants={element}>
            <Tab title="Where are you based?">
              We are a remote team based in Europe and Central America. We work
              with clients from all over the world.
            </Tab>
          </motion.div>
          <motion.div variants={element}>
            <Tab title="What technology do we use?">
              we use <span className="underline">Node JS</span>,{" "}
              <span className="underline">React</span>,{" "}
              <span className="underline">Next.js</span>,{" "}
              <span className="underline">Supabase</span>,{" "}
              <span className="underline">MySQL</span>,{" "}
              <span className="underline">MongoDB</span> and{" "}
              <span className="underline">Sanity CMS</span> to build scalable,
              maintainable apps that integrate seamlessly with your existing
              tools.
            </Tab>
          </motion.div>
          <motion.div variants={element}>
            <Tab title="What is your process?">
              We start with a discovery call to understand your project and
              goals. Then we create a proposal with a fixed price and timeline.
              Once approved, we start working on your project. <br />
              We provide regular updates and feedback sessions to make sure we
              are on the right track.
            </Tab>
          </motion.div>

          <motion.div variants={element}>
            <Tab title="How long does it take?">
              Initial version of projects typically take 2-4 weeks to complete.
              Some projects may take longer depending on the scope and
              complexity.
            </Tab>
          </motion.div>
          <motion.div variants={element}>
            <Tab title="What if I don't like the final product?">
              We offer a 100% satisfaction guarantee. If the project does not
              match the agreed scope, we will keep working on it until it does.
            </Tab>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
