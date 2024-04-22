import Image from "next/image";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Plan } from "./components/plan";
import { How } from "./components/how";
import { Why } from "./components/why";
import { Pricing } from "./components/pricing";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Plan />
      <How />
      <Why />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
