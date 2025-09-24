import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

import { NicoleHero01 } from "../../../assets/hero/index";

export function About() {
  const titleRef = useRef(null);
  const wrapperRef = useRef(null);
  const descriptionRef = useRef(null);
  const wrapperText = useRef(null);

  //Teste
  const imageRefPin = useRef(null);
  const imageRef = useRef(null);
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const thirdTextRef = useRef(null);
  const fourthTextRef = useRef(null);

  useGSAP(
    () => {
      document.fonts.ready.then(() => {
        const splitTitle = SplitText.create(titleRef.current, { type: "chars" });

        gsap.from(splitTitle.chars, {
          y: -100,
          stagger: { each: 0.02, from: "center" },
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: true,
            fastScrollEnd: true,
          },
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top center",
          end: "30% center",
          scrub: 3,
          markers: true,
        },
      });

      tl.from(descriptionRef.current, { y: 120, autoAlpha: 0 });

      //Pin Section

      const timelinePinSection = gsap.timeline({
        scrollTrigger: {
          trigger: imageRefPin.current,
          start: "30% center",
          end: "+=1200",
          pin: imageRefPin.current,
          markers: true,
          scrub: 0.6,
        },
      });

      timelinePinSection
        .to(imageRef.current, { y: -600, ease: "none" })
        .from(firstTextRef.current, { y: 100, autoAlpha: 0 }, ">")
        .from(thirdTextRef.current, { y: 100, autoAlpha: 0 }, ">")
        .from(secondTextRef.current, { y: 100, autoAlpha: 0 }, ">")
        .from(fourthTextRef.current, { y: 100, autoAlpha: 0 }, ">");
    },
    { scope: wrapperRef }
  );

  return (
    <div className="h-screen relative pointer-none" ref={wrapperRef}>
      <div>
        <div className="bg-[#f0f0f0] w-full h-55 absolute -top-30 z-2" />
        <p className="text-[17.3rem] text-center uppercase font-bold font-sofia will-change-auto" ref={titleRef}>
          Sobre Mim
        </p>
        <div className="max-w-7xl mx-auto2 mx-auto relative z-2" ref={wrapperText}>
          <p className="text-2xl font-light text-left leading-12 italic" ref={descriptionRef}>
            Estudante de Comunicação e Propaganda na ESPM e uma comunicadora criativa apaixonada por marketing, eventos
            e storytelling. Com experiência em mídias sociais, produção de eventos e ambientes multiculturais, crio e
            apoio experiências de marca impactantes. Colaboro com equipes e organizações que valorizam criatividade e
            estratégia, transformando ideias em realidade por meio da comunicação, do design e de conexões
            significativas.
          </p>
        </div>
      </div>

      {/*Pin Section */}
      <div className="h-full w-full" ref={imageRefPin}>
        <div className="flex">
          <div className=" flex-1 flex flex-col justify-between items-center text-center">
            <p className="text-2xl italic font-literata w-[400px]" ref={firstTextRef}>
              Apaixonado por eventos desde pequenininha, sempre busquei criar experiências memoráveis para as pessoas ao
              meu redor.
            </p>
            <p className="text-2xl italic font-literata w-[400px] mb-48" ref={secondTextRef}>
              Falar sobre ativações e experiências de marca é o que me move.
            </p>
          </div>

          <div className="w-[400px] mx-auto relative overflow-hidden">
            <div className="bg-[#f0f0f0] w-[400px] h-full absolute z-1" ref={imageRef} />
            <img src={NicoleHero01} alt="Nicole" className="object-cover" />
          </div>

          <div className=" flex-1 flex flex-col justify-between items-center text-center">
            <p className="text-2xl italic font-literata max-w-[400px] mt-24" ref={thirdTextRef}>
              Marketing e branding são minhas paixões, e acredito no poder de contar histórias
            </p>
            <p className="text-2xl italic font-literata max-w-[400px]" ref={fourthTextRef}>
              Evento é mais que um evento: é uma experiência que fica na memória.
            </p>
          </div>
        </div>
      </div>

      <div className="h-screen mt-40">
        <p className="text-center">teste</p>
      </div>
    </div>
  );
}
