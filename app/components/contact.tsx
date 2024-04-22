import React from "react";

export const Contact = () => {
  return (
    <section className="mt-72 mb-48 flex flex-col justify-center">
      <div className="container max-w-screen-md mx-auto">
        <h2 className="text-4xl text-yellow-400 text-center">Get in touch</h2>
        <p className="text-3xl text-center mt-28">
          We help you build your MVP in 14 days and grow it with a bi-weekly
          subscription.
        </p>
        <div className="flex items-center justify-center mt-28">
          <button className="flex items-center text-3xl gap-4 py-3 px-4 rounded-full border-[2px] border-white">
            Say hello
          </button>
        </div>
      </div>
    </section>
  );
};
