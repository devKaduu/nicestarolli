import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

import { ArrowIcon } from "../../../assets/arrow";

import nos from "../../../assets/nos.jpeg";

import { C } from "./const";

export function Hero() {
  const WrapperScope = useRef(null);
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const emailRef = useRef(null);
  const imageItemsRef = useRef<HTMLDivElement[]>([]);
  const easterEggRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { snap: { y: 1 } },
        delay: 2.3,
      });

      tl.from(imageItemsRef.current, {
        autoAlpha: 0,
        y: 40,
        duration: 0.6,
        ease: "back.out(1.7)", // ease-out suave
        stagger: 0.1,
      })
        .from(nameRef.current, { autoAlpha: 0, y: 20 }, "0.5")
        .from(descriptionRef.current, { autoAlpha: 0, y: 20 }, "<")
        .from(emailRef.current, { autoAlpha: 0, y: 20 });
    },
    { scope: WrapperScope }
  );

  const isOpenRef = useRef(true); // Começa aberto

  const handleImageClick = () => {
    if (isOpenRef.current) {
      // Fecha a sanfona
      isOpenRef.current = false;

      imageItemsRef.current.forEach((img, i) => {
        if (i === 0) {
          gsap.to(img, {
            width: 400,
            marginLeft: 0,
            duration: 0.8,
            ease: "power3.inOut",
          });

          gsap.to(easterEggRef.current, {
            autoAlpha: 1,
            duration: 0.8,
            delay: 2,
            ease: "power3.inOut",
            display: "block",
          });
        } else {
          gsap.to(img, {
            width: 0,
            marginLeft: 0,
            autoAlpha: 0,
            duration: 0.8,
            ease: "power3.inOut",
            delay: (imageItemsRef.current.length - i) * 0.1,
          });
        }
      });
    } else {
      // Abre a sanfona
      isOpenRef.current = true;

      imageItemsRef.current.forEach((img, i) => {
        gsap.to(easterEggRef.current, {
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.inOut",
          display: "none",
        });
        gsap.to(img, {
          width: 400,
          marginLeft: i === 0 ? 0 : -150,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.inOut",
          delay: i * 0.1,
        });
      });
    }
  };

  return (
    <div ref={WrapperScope} className="h-screen w-full flex flex-col items-center justify-center">
      <div className="w-full flex justify-start flex-col gap-8">
        {/* Images Nicole */}
        <div className="flex w-full items-center">
          {C.imagesHero.map((image, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) imageItemsRef.current[index] = el;
              }}
              onClick={() => handleImageClick()}
              className="w-[400px] h-[400px]"
              style={{
                marginLeft: index === 0 ? 0 : -150,
              }}
            >
              <img src={image.src} alt={`Hero Image ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
          <div className="mx-auto hidden opacity-0" ref={easterEggRef}>
            <p className="text-center text-5xl font-extralight font-literata italic">
              Te amooooo muito, minha princesa! <br /> Nós dois sempre ❤️
            </p>
            <img src={nos} alt="" className="w-20 mx-auto rotate-270" />
          </div>
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
