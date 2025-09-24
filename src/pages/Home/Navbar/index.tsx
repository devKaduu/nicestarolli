export function Navbar({ ref }: { ref?: React.Ref<HTMLElement> }) {
  return (
    <nav ref={ref} className="fixed top-0 left-0  w-full px-5 z-10 flex items-center justify-between h-14 py-8">
      <div className="text-3xl font-extralight relative italic">nicestarolli.</div>

      <div>
        <ul className="flex gap-6">
          <li className="text-lg font-extralight italic">Quem sou</li>
          <li className="text-lg font-extralight italic">Campanhas & Eventos</li>
          <li className="text-lg font-extralight italic">Conecte-se</li>
        </ul>
      </div>
    </nav>
  );
}
