import React from "react";

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
    </section>
  );
};
