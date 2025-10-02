import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

import ESPM from "../../../assets/espm.jpg";
import { NicoleHero01 } from "../../../assets/hero/index";
import JOY from "../../../assets/joy.png";
import { Magnetic } from "../../../components/Magnetic";

export function About() {
  const titleRef = useRef(null);
  const wrapperRef = useRef(null);
  const descriptionRef = useRef(null);
  const currentJobRef = useRef(null);
  const wrapperText = useRef(null);
  const wrapperTitle = useRef(null);

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
        const splitDescription = SplitText.create(descriptionRef.current, { type: "lines" });
        const splitCurrentJob = SplitText.create(currentJobRef.current, { type: "lines" });

        const mainTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperTitle.current,
            start: "top 70%",
            end: "bottom 50%",
            scrub: 1,
          },
        });
        gsap.set(splitTitle.chars, { y: -100 });
        gsap.set(splitDescription.lines, { y: 50, autoAlpha: 0 });
        gsap.set(splitCurrentJob.lines, { y: 50, autoAlpha: 0 });

        mainTimeline
          .to(splitTitle.chars, {
            y: 0,
            stagger: { each: 0.02, from: "center" },
            ease: "back.out(1.7)",
          })
          .to(
            splitDescription.lines,
            {
              y: 0,
              autoAlpha: 1,
              stagger: 0.1,
            },
            "-=0.5"
          )
          .to(splitCurrentJob.lines, { y: 0, autoAlpha: 1, stagger: 0.1 }, "-=0.4");
      });

      //Pin Section

      const timelinePinSection = gsap.timeline({
        scrollTrigger: {
          trigger: imageRefPin.current,
          start: "50% center",
          end: "+=1500",
          pin: imageRefPin.current,
          scrub: 0.4,
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
    <div className="relative pointer-none overflow-hidden" ref={wrapperRef}>
      <div ref={wrapperTitle} className="">
        <div className="bg-[#f0f0f0] w-full h-24 absolute top-0 z-2" />
        <p className="text-[17.3rem] text-center uppercase font-bold font-sofia" ref={titleRef}>
          Sobre Mim
        </p>
        <div className="max-w-7xl mx-auto relative z-2" ref={wrapperText}>
          <p className="text-2xl font-light text-left leading-12" ref={descriptionRef}>
            Estudante de <span className="italic font-semibold">Comunicação e Propaganda</span> na{" "}
            <a href="https://www.espm.br/" target="_blank" rel="noopener noreferrer">
              <Magnetic>
                <img src={ESPM} className="inline w-20 h-auto align-middle mx-1" />
              </Magnetic>
            </a>
            e uma comunicadora criativa apaixonada por marketing, eventos e storytelling. Com experiência em mídias
            sociais, produção de eventos e ambientes multiculturais, crio e apoio experiências de marca impactantes.
            Colaboro com equipes e organizações que valorizam criatividade e estratégia, transformando ideias em
            realidade por meio da comunicação, do design e de conexões significativas.
          </p>

          <p className="text-2xl font-light text-left leading-12 mt-20 max-w-5xl ml-auto" ref={currentJobRef}>
            Atualmente trabalhando em uma agência de <span className="italic font-semibold">Live Marketing</span>{" "}
            chamada{" "}
            <a href="https://joyeventos.com.br/" target="_blank" rel="noopener noreferrer">
              <Magnetic>
                <img src={JOY} className="inline w-20 h-auto align-middle mx-1" />
              </Magnetic>{" "}
            </a>
            onde atuo como Produção mas passei por áreas como atendimento criando sempre conexões, atendemos desafios
            com entusiasmo e criamos experiências marcantes.
          </p>
        </div>
      </div>

      {/*Pin Section */}
      <div className=" w-full" ref={imageRefPin}>
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
    </div>
  );
}
