

export function ImageSection() {
  return (
    <section className="relative h-full left-[section] w-[720px]">
      <img
        src="Login3.png"
        className="object-cover h-full"
        alt="Concert stage with dramatic lighting"
      />
      <img
        src="logo2-sm-light.png"
        className="h-[42px] w-[183px] absolute left-[63px] top-[66px]"
        alt="Star Gigs Logo"
      />
      <footer className="absolute bottom-11 text-base leading-7 left-[63px] text-stone-50">
        STAR GIGS © 2025 ALL RIGHTS RESERVED
      </footer>
      <h1 className="absolute text-4xl font-bold bottom-[188px] leading-[62px] left-[63px] max-w-[314px] text-stone-50">
        Discover & Get Discovered!
      </h1>
    </section>
  );
}
