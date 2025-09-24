import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import type { StairsProps } from "./props";

export const Loader = ({ children }: StairsProps) => {
  const root = useRef(null);
  const stairParentRef = useRef(null);
  const pageRef = useRef(null);
  const logoRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { snap: { y: 1 } } });

      tl.to(stairParentRef.current, {
        display: "block",
      })
        .from(".stair", {
          height: 0,
          stagger: { amount: -0.2 },
        })
        .to(
          ".stair",
          {
            y: "100%",
            stagger: {
              amount: -0.25,
            },
          },
          "+=0.7"
        )
        .to(
          logoRef.current,
          {
            display: "none",
          },
          "-=0.9"
        )
        .to(stairParentRef.current, {
          display: "none",
        })
        .to(".stair", {
          y: "0%",
        });
    },
    { scope: root }
  );

  return (
    <div ref={root}>
      <div ref={stairParentRef} className="h-screen w-full fixed z-20 top-0 border-0">
        <div className="h-full w-full flex items-center justify-center">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>

          <div
            ref={logoRef}
            className="text-4xl font-literata font-extralight absolute text-white italic"
          >
            nicestarolli.
          </div>
        </div>
      </div>
      <div ref={pageRef}>{children}</div>
    </div>
  );
};
