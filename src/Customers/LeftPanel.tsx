

export function LeftPanel() {
  return (
    <section className="overflow-hidden relative h-screen w-[720px] max-md:w-full max-md:h-[40vh] max-sm:h-[30vh]">
      <img src="Login2.jpg" alt="Background" className="object-cover size-full" />
      <img
        src="Logo.png"
        alt="Star Gigs Logo"
        className="absolute h-[42px] left-[63px] top-[66px] w-[183px]"
      />
      <footer className="absolute text-base leading-7 bottom-[70px] left-[63px] text-stone-50">
        STAR GIGS © 2025 ALL RIGHTS RESERVED
      </footer>
      <h1 className="absolute text-4xl font-bold bottom-[188px] leading-[62px] left-[63px] max-w-[314px] text-stone-50 max-sm:text-3xl">
        Discover & Get Discovered!
      </h1>
    </section>
  );
}
