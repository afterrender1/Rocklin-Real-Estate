import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkProcess from "./components/WorkProcess";
import LuxuryHomes from "./components/LuxuryHomes";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WorkProcess />
        <LuxuryHomes />
      </main>
    </>
  );
}
