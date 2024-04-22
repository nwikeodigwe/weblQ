import Link from "next/link";
import React from "react";
import { FiGithub } from "react-icons/fi";

import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { SlSocialFacebook, SlSocialTwitter } from "react-icons/sl";

export const Footer = () => {
  return (
    <section>
      <div className="container max-w-screen-sm mx-auto flex flex-col items-center justify-center gap-3">
        <ul className="flex items-center justify-between gap-10">
          <li className="text-2xl">Latest work</li>
          <li className="text-2xl">Pricing</li>
          <li className="text-2xl">Contact</li>
        </ul>
        <p className="text-sm">All rights reserved, 2024</p>
      </div>
      <div className="fixed bottom-0 left-10">
        <ul className="flex flex-col gap-6 items-center justify-center text-gray-200">
          <li>
            <Link
              href={"https://facebook.com"}
              target="_blank"
              className="hover:text-yellow-400 transition duration-150 group"
            >
              <SlSocialFacebook className="text-xl group-hover:scale-125 transition duration-150" />
            </Link>
          </li>
          <li>
            <Link
              href={"https://facebook.com"}
              target="_blank"
              className="hover:text-yellow-400 hover:scale-105 transition duration-150 group"
            >
              <IoLogoInstagram className="text-xl group-hover:scale-125 transition duration-150" />
            </Link>
          </li>
          <li>
            <Link
              href={"https://facebook.com"}
              target="_blank"
              className="hover:text-yellow-400 hover:scale-105 transition duration-150 group"
            >
              <SlSocialTwitter className="text-xl group-hover:scale-125 transition duration-150" />
            </Link>
          </li>
          <li>
            <Link
              href={"https://facebook.com"}
              target="_blank"
              className="hover:text-yellow-400 hover:scale-105 transition duration-150 group"
            >
              <RiTwitterXLine className="text-xl group-hover:scale-125 transition duration-150" />
            </Link>
          </li>
          <li>
            <Link
              href={"https://facebook.com"}
              target="_blank"
              className="hover:text-yellow-400 hover:scale-105 transition duration-150 group"
            >
              <FiGithub className="text-xl group-hover:scale-125 transition duration-150" />
            </Link>
          </li>
          <li className="h-20 border-[1px] border-gray-200"></li>
        </ul>
      </div>
    </section>
  );
};
