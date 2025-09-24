import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

import { ArrowIcon } from "../../../assets/arrow";

import { C } from "./const";

export function Hero() {
  const WrapperScope = useRef(null);
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const emailRef = useRef(null);
  const imageItemsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { snap: { y: 1 } },
        delay: 2.3,
      });

      tl.from(imageItemsRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "back.out(1.7)", // ease-out suave
        stagger: 0.1,
      })
        .from(nameRef.current, { opacity: 0, y: 20 }, "0.5")
        .from(descriptionRef.current, { opacity: 0, y: 20 }, "<")
        .from(emailRef.current, { opacity: 0, y: 20 });
    },
    { scope: WrapperScope }
  );

  return (
    <div ref={WrapperScope} className="h-screen w-full flex flex-col items-center justify-center">
      <div className="w-full flex justify-start flex-col gap-8">
        {/* Images Nicole */}
        <div className="flex w-full">
          {C.imagesHero.map((image, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) imageItemsRef.current[index] = el;
              }}
              className="w-[400px] h-[400px]"
              style={{
                marginLeft: index === 0 ? 0 : -150,
              }}
            >
              <img src={image.src} alt={`Hero Image ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Name and Description */}
      <div className="flex flex-col justify-center w-full gap-0 md:flex-row md:gap-64 md:items-start mt-16">
        <p className="text-5xl md:text-8xl 2xl:text-[9rem] font-extralight font-literata" ref={nameRef}>
          NIC<span>ESTAROLLI.</span>
        </p>

        <div className="flex flex-col items-start w-full">
          <p className="text-lg font-literata font-extralight italic flex items-center" ref={descriptionRef}>
            Criando experiências que conectam
            <ArrowIcon className="w-3 h-3 rotate-90 ml-2 mt" />
          </p>
          <p className="text-2xl mt-2 self-end md:self-center font-literata font-extralight" ref={emailRef}>
            nic.cestarolli@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
