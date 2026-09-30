import Hero from "./components/Hero";
import WorkProcess from "./components/WorkProcess";
import LuxuryHomes from "./components/LuxuryHomes";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <WorkProcess />
        <LuxuryHomes />
        <Faq />
      </main>
    </>
  );
}
