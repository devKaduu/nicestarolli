import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin, SplitText } from "gsap/all";
import { useRef } from "react";

import ESPM from "../../../assets/espm.jpg";
import { NicoleHero01 } from "../../../assets/hero/index";
import JOY from "../../../assets/joy.png";
import { Magnetic } from "../../../components/Magnetic";

gsap.registerPlugin(DrawSVGPlugin);

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

  const svg1Ref = useRef<SVGSVGElement>(null);
  const svg2Ref = useRef<SVGSVGElement>(null);
  const svg3Ref = useRef<SVGSVGElement>(null);
  const svg4Ref = useRef<SVGSVGElement>(null);

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

        gsap.set(
          [imageRef.current, firstTextRef.current, secondTextRef.current, thirdTextRef.current, fourthTextRef.current],
          { willChange: "transform, opacity" }
        );

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
          scrub: 1,
        },
      });

      // helper: pega paths de um SVG específico
      const getPaths = (el: SVGSVGElement | null) =>
        el ? gsap.utils.toArray<SVGPathElement>(el.querySelectorAll("path[data-draw]")) : [];

      const svg1Paths = getPaths(svg1Ref.current);
      const svg2Paths = getPaths(svg2Ref.current);
      const svg3Paths = getPaths(svg3Ref.current);
      const svg4Paths = getPaths(svg4Ref.current);

      gsap.set([svg1Paths, svg2Paths, svg3Paths, svg4Paths].flat(), { drawSVG: "0% 0%" });

      timelinePinSection
        .to(imageRef.current, { y: -600, ease: "none" })
        .to(svg2Paths, { drawSVG: "0% 100%", stagger: 0.1 })
        .from(firstTextRef.current, { y: 100, autoAlpha: 0 }, "<")
        .to(svg3Paths, { drawSVG: "0% 100%", stagger: 0.1 })
        .from(thirdTextRef.current, { y: 100, autoAlpha: 0 }, "<")
        .to(svg1Paths, { drawSVG: "0% 100%", stagger: 0.1 })
        .from(secondTextRef.current, { y: 100, autoAlpha: 0 }, "<")
        .to(svg4Paths, { drawSVG: "0% 100%", stagger: 0.1 })
        .from(fourthTextRef.current, { y: 100, autoAlpha: 0 }, "<");
    },
    { scope: wrapperRef }
  );

  return (
    <div className="relative pointer-none overflow-hidden" ref={wrapperRef}>
      <div ref={wrapperTitle} className="">
        <div className="bg-[#f0f0f0] w-full h-24 absolute top-0 z-2" />
        <p className="text-[272px] text-center uppercase font-bold font-sofia" ref={titleRef}>
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
          <div className=" flex-1 flex flex-col justify-between items-center text-center relative">
            <p className="text-2xl italic font-literata w-[400px]" ref={firstTextRef}>
              Apaixonado por eventos desde pequenininha, sempre busquei criar experiências memoráveis para as pessoas ao
              meu redor.
            </p>

            <p className="text-2xl italic font-literata w-[400px] mb-48" ref={secondTextRef}>
              Falar sobre ativações e experiências de marca é o que me move.
            </p>

            <svg ref={svg1Ref} viewBox="0 0 300 120" className="w-[100px] absolute bottom-50 right-10">
              <defs>
                <filter id="rough">
                  <feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="2" seed="7" result="n" />
                  <feDisplacementMap in="SourceGraphic" in2="n" scale="1.2" xChannelSelector="R" yChannelSelector="G" />
                </filter>
              </defs>

              <path
                data-draw
                d="M280 30 C220 15 160 18 105 40 S60 85 40 60"
                fill="none"
                stroke="currentColor"
                strokeWidth={6}
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#rough)"
              />
              <path
                data-draw
                d="M40 60 L64 42"
                fill="none"
                stroke="currentColor"
                strokeWidth={6}
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#rough)"
              />
              <path
                data-draw
                d="M40 60 L64 78"
                fill="none"
                stroke="currentColor"
                strokeWidth={6}
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#rough)"
              />
              <path
                data-draw
                d="M276 44 C218 31 160 33 110 52 S68 94 46 71"
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.35}
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#rough)"
              />
              <path
                data-draw
                d="M270 20 C215 10 158 13 100 34 S55 77 38 56"
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.25}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#rough)"
              />
            </svg>

            <svg
              ref={svg2Ref}
              viewBox="0 0 300 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[100px] absolute top-10 right-10"
            >
              <defs>
                <filter id="rough">
                  <feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="2" seed="22" result="noise" />
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="1.2"
                    xChannelSelector="R"
                    yChannelSelector="G"
                  />
                </filter>
              </defs>

              <path
                data-draw
                d="M280 40
           C230 120, 150 160, 80 150
           Q60 148, 40 160"
                fill="none"
                stroke="currentColor"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
                filter="url(#rough)"
              />

              <path
                data-draw
                d="M40 160 L65 140"
                fill="none"
                stroke="currentColor"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
                filter="url(#rough)"
              />
              <path
                data-draw
                d="M40 160 L65 180"
                fill="none"
                stroke="currentColor"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
                filter="url(#rough)"
              />

              <path
                data-draw
                d="M276 55
           C225 130, 145 165, 75 160
           Q55 158, 45 172"
                fill="none"
                stroke="currentColor"
                stroke-opacity="0.35"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                filter="url(#rough)"
              />

              <path
                data-draw
                d="M270 25
           C220 110, 140 150, 70 145
           Q50 143, 35 160"
                fill="none"
                stroke="currentColor"
                stroke-opacity="0.25"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                filter="url(#rough)"
              />
            </svg>
          </div>

          <div className="w-[400px] mx-auto relative overflow-hidden">
            <div className="bg-[#f0f0f0] w-[400px] h-full absolute z-1" ref={imageRef} />
            <img src={NicoleHero01} alt="Nicole" className="object-cover" />
          </div>

          <div className=" flex-1 flex flex-col justify-between items-center text-center relative">
            <p className="text-2xl italic font-literata max-w-[400px] mt-24" ref={thirdTextRef}>
              Marketing e branding são minhas paixões, e acredito no poder de contar histórias
            </p>
            <p className="text-2xl italic font-literata max-w-[400px]" ref={fourthTextRef}>
              Evento é mais que um evento: é uma experiência que fica na memória.
            </p>

            <svg
              ref={svg3Ref}
              viewBox="0 0 300 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[100px] absolute top-30 left-10"
            >
              <defs>
                <filter id="rough">
                  <feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="2" seed="44" result="noise" />
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="1.2"
                    xChannelSelector="R"
                    yChannelSelector="G"
                  />
                </filter>
              </defs>

              <path
                data-draw
                d="M20 160
           C80 100, 150 60, 220 70
           Q240 72, 260 60"
                fill="none"
                stroke="currentColor"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
                filter="url(#rough)"
              />

              <path
                data-draw
                d="M260 60 L235 40"
                fill="none"
                stroke="currentColor"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
                filter="url(#rough)"
              />
              <path
                data-draw
                d="M260 60 L235 80"
                fill="none"
                stroke="currentColor"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
                filter="url(#rough)"
              />

              <path
                data-draw
                d="M24 145
           C85 85, 155 55, 225 65
           Q245 67, 255 55"
                fill="none"
                stroke="currentColor"
                stroke-opacity="0.35"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                filter="url(#rough)"
              />

              <path
                data-draw
                d="M30 175
           C90 105, 160 65, 230 75
           Q250 77, 265 60"
                fill="none"
                stroke="currentColor"
                stroke-opacity="0.25"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                filter="url(#rough)"
              />
            </svg>

            <svg
              ref={svg4Ref}
              viewBox="0 0 300 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[100px] absolute bottom-5 left-10"
            >
              <defs>
                <filter id="rough">
                  <feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="2" seed="33" result="noise" />
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="1.2"
                    xChannelSelector="R"
                    yChannelSelector="G"
                  />
                </filter>
              </defs>

              <path
                data-draw
                d="M20 40
           C70 120, 150 160, 220 150
           Q240 148, 260 160"
                fill="none"
                stroke="currentColor"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
                filter="url(#rough)"
              />

              <path
                data-draw
                d="M260 160 L235 140"
                fill="none"
                stroke="currentColor"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
                filter="url(#rough)"
              />
              <path
                data-draw
                d="M260 160 L235 180"
                fill="none"
                stroke="currentColor"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
                filter="url(#rough)"
              />

              <path
                data-draw
                d="M24 55
           C75 130, 155 165, 225 160
           Q245 158, 255 172"
                fill="none"
                stroke="currentColor"
                stroke-opacity="0.35"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                filter="url(#rough)"
              />

              <path
                data-draw
                d="M30 25
           C80 110, 160 150, 230 145
           Q250 143, 265 160"
                fill="none"
                stroke="currentColor"
                stroke-opacity="0.25"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                filter="url(#rough)"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
