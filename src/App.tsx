import { Home } from "./pages/Home";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import ReactLenis, { type LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";
import { Loader } from "./components/Loader";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisRef = useRef<LenisRef | null>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <Loader>
      <ReactLenis root options={{ autoRaf: false, smoothWheel: true, wheelMultiplier: 0.5 }} ref={lenisRef}>
        <Home />
      </ReactLenis>
    </Loader>
  );
}

export default App;
