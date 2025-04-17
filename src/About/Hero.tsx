import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[530px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e55978aff085ef926cf7dc2a562806ca35c3fd20"
        alt="Hero Background"
        className="object-cover size-full"
      />
      <div className="flex absolute top-2/4 left-2/4 flex-col gap-9 items-center text-center -translate-x-2/4 -translate-y-2/4 w-[919px] max-md:w-4/5 max-sm:w-[90%]">
        <div>
          <h1 className="text-8xl font-bold text-white max-sm:text-5xl">
            About Us
          </h1>
          <p className="text-lg leading-normal text-white max-sm:text-base">
            Welcome to StarGigs, your ultimate destination for discovering and
            booking exceptional talent! Whether you're planning a private event,
            corporate function, or a public concert, StarGigs connects you with
            the finest musicians, entertainers, and performers from around the
            globe. Our platform makes it easy to find and hire top-rated artists
            that suit your specific needs and budget. At StarGigs, we are
            passionate about bringing extraordinary performances to life,
            ensuring your event is memorable and spectacular. Explore our
            diverse roster of talent and let us help you create an unforgettable
            experience.
          </p>
        </div>
        <button className="h-10 text-lg font-semibold text-black bg-orange-600 rounded-xl cursor-pointer w-[135px]">
          See More
        </button>
      </div>
    </section>
  );
};
