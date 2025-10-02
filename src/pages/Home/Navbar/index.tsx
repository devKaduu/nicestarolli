import { Magnetic } from "../../../components/Magnetic";

export function Navbar({ ref }: { ref?: React.Ref<HTMLElement> }) {
  return (
    <nav
      ref={ref}
      className="fixed top-0 left-0  w-full px-5 z-10 flex items-center justify-between h-14 py-8 bg-[#f0f0f0]"
    >
      <div className="text-3xl font-extralight relative italic">nicestarolli.</div>

      <div>
        <ul className="flex gap-6">
          <Magnetic strength={1.5}>
            <li className="text-lg font-extralight italic">
              <a href="">Sobre Mim</a>
            </li>
          </Magnetic>

          <Magnetic strength={1.5}>
            <li className="text-lg font-extralight italic">
              <a href="">Campanhas & Eventos</a>
            </li>
          </Magnetic>

          <Magnetic strength={1.5}>
            <li className="text-lg font-extralight italic">
              <a href="">Conecte-se</a>
            </li>
          </Magnetic>
        </ul>
      </div>
    </nav>
  );
}
