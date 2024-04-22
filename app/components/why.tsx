import React from "react";

export const Why = () => {
  return (
    <section className="my-72 flex flex-col justify-center">
      <div className="container max-w-screen-md mx-auto">
        <h2 className="text-4xl text-yellow-400 underline">Why choose us?</h2>
        <p className="text-3xl mt-72">
          <span className="underline font-medium">Affordable:</span> access a
          dedicated product team for just 25% of the cost of an in-house team.
        </p>
        <p className="text-3xl mt-72">
          <span className="underline font-medium">Flexible:</span> bi-weekly
          subscribtion with the freedom to cancel anytime.
        </p>
        <p className="text-3xl mt-72">
          <span className="underline font-medium">Experience:</span> with 8+
          years of experience in building startups, we specialize in turning
          ideas into high-quality web apps.
        </p>
        <p className="text-3xl mt-72">
          <span className="underline font-medium">Technology:</span> we use{" "}
          <span className="underline">Node JS</span>,{" "}
          <span className="underline">React</span>,{" "}
          <span className="underline">Next.js</span>,{" "}
          <span className="underline">Supabase</span>,{" "}
          <span className="underline">MySQL</span>,{" "}
          <span className="underline">MongoDB</span> and{" "}
          <span className="underline">Sanity CMS</span> to build scalable,
          maintainable apps that integrate seamlessly with your existing tools.
        </p>
      </div>
    </section>
  );
};
