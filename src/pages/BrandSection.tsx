

export function BrandSection() {
  return (
    <section className="flex relative flex-col left-[section] w-[860px] max-md:w-full max-md:min-h-[50vh]">
      <img
        src="logo2-sm-light.png"
        className="mt-16 mr-0 mb-0 ml-16 h-[42px] w-[183px] max-sm:mt-8 max-sm:mr-0 max-sm:mb-0 max-sm:ml-8 max-sm:h-8 max-sm:w-[140px]"
        alt="Star Gigs Logo"
      />
      <h1 className="mr-0 mb-0 ml-16 text-4xl font-bold leading-[62px] mt-[604px] text-stone-50 w-[314px] max-md:mt-72 max-sm:mt-52 max-sm:mr-0 max-sm:mb-0 max-sm:ml-8 max-sm:w-auto max-sm:text-3xl">
        Discover & Get Discovered!
      </h1>
      <footer className="mt-28 mr-0 mb-0 ml-16 text-base leading-7 text-stone-50 max-md:mt-12 max-sm:my-8 max-sm:mr-0 max-sm:ml-8 max-sm:text-sm">
        STAR GIGS © 2025 ALL RIGHTS RESERVED
      </footer>
    </section>
  );
}
