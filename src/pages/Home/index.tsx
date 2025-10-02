import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { About } from "./About";
import { EventsCampaigns } from "./EventsCampaigns";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";

export function Home() {
  const navbarRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 3 });

    tl.from(navbarRef.current, { opacity: 0, y: -20, snap: { y: 1 } }, "+=0.3");
  }, {});

  return (
    <main className="px-5">
      <Navbar ref={navbarRef} />
      <Hero />
      <About />
      <EventsCampaigns />
    </main>
  );
}
