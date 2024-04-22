import Link from "next/link";
import React from "react";

export const Questions = () => {
  return (
    <section className="my-72 flex flex-col justify-center">
      <div className="container max-w-screen-md mx-auto">
        <Link href={"/faq"}>
          <h2 className="text-4xl text-yellow-400 underline">
            Have questions?
          </h2>
        </Link>
      </div>
    </section>
  );
};
