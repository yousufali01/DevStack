import React from "react";
import heroImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex min-h-[600px] w-[90%] flex-col items-center justify-center gap-10 py-12 md:min-h-[700px] md:flex-row md:justify-between md:gap-12 md:py-16">
        
        {/* Left Content */}
        <div className="w-full max-w-[580px] text-center md:text-left">
          <h1 className="text-[42px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#111827] sm:text-[48px] md:text-[52px]">
            <span className="block">
              Build Your Ideal
            </span>

            <span className="block bg-gradient-to-r from-[#ff5a2f] via-[#e62e7b] to-[#8b2be2] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-[500px] text-[15px] leading-6 text-[#64748b] md:mx-0">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
            <button
              className="rounded-md bg-gradient-to-r from-[#ff641f] to-[#e92d87] px-4 py-2 text-[15px] font-medium text-white transition hover:opacity-90"
            >
              Explore Technologies
            </button>

            <button
              className="rounded-md border border-[#e5e7eb] bg-white px-6 py-2 text-[15px] font-medium text-[#475569] transition hover:bg-gray-50"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Banner Image */}
        <div className="flex w-full items-center justify-center md:w-[45%]">
          <img
            src={heroImage}
            alt="Development Stack"
            className="w-[260px] object-contain sm:w-[320px] md:w-[360px] lg:w-[390px]"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;