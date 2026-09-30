import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkProcess from "./components/WorkProcess";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WorkProcess />
      </main>
    </>
  );
}
