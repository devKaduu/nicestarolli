import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cloneElement, useRef, type ReactElement } from "react";

interface MagneticProps {
  children: ReactElement;
  strength?: number; // 0 a 1, padrão 0.3
}

export function Magnetic({ children, strength = 0.3 }: MagneticProps) {
  const magnetic = useRef<HTMLElement>(null);

  useGSAP(() => {
    const element = magnetic.current;

    if (!element) return;

    const xTo = gsap.quickTo(element, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const yTo = gsap.quickTo(element, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const mouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = element.getBoundingClientRect();

      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      xTo(x * strength);
      yTo(y * strength);
    };

    const mouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener("mousemove", mouseMove);
    element.addEventListener("mouseleave", mouseLeave);

    return () => {
      element.removeEventListener("mousemove", mouseMove);
      element.removeEventListener("mouseleave", mouseLeave);
    };
  }, [strength]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return cloneElement(children, { ref: magnetic } as any);
}
