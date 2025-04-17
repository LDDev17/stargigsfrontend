export function LeftSection() {
    return (
      <section className="flex flex-col flex-1 justify-between p-10 bg-center bg-cover bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/9b89537cce9c9f4a07ca80bd6d924b6609e3d0a2?placeholderIfAbsent=true')] max-md:p-5 max-sm:p-5">
        <img
          src="loginPic4.png"
          className="h-[42px] w-[183px] max-sm:h-[34px] max-sm:w-[150px]"
          alt="Star Gigs Logo"
        />
        <header className="text-4xl font-bold leading-[62px] text-stone-50 max-sm:text-3xl max-sm:leading-[50px]">
          <span>Discover &amp;</span>
          <br />
          <span>Get Discovered!</span>
        </header>
        <footer className="text-base leading-7 text-stone-50 max-sm:text-sm max-sm:leading-6">
          STAR GIGS © 2025 ALL RIGHTS RESERVED
        </footer>
      </section>
    );
  }
  