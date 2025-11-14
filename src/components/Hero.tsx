"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className=" mx-auto flex w-full h-full  "
      style={{ fontFamily: "Plus Jakarta Sans" }}
    >
      {/* LEFT SECTION */}
      <div className="w-full  justify-center items-center mt-36 md:mt-52 mx-4 md:mx-0 md:ml-20">
        <h3 className="text-green-700 font-bold text-3xl">CHEF’S SPECIAL</h3>

        <h1 className="  text-5xl md:text-8xl font-bold leading-tight mt-3">
          Freshness <br /> in every bite
        </h1>
        <p className="text-gray-600 font-normal text-2xl mt-4 max-w-md">
          Delicious soups made from fresh, locally sourced ingredients.
        </p>
        {/* Search Box */}
        <div className="mt-6 w-full max-w-lg">
          <div className="flex items-center border border-gray-300 rounded-md px-4 py-3 shadow-sm">
            <input
              type="text"
              placeholder="Enter item or restaurant you are looking for"
              className="w-full outline-none text-gray-700"
            />
            <Image src="/vector.png" width={22} height={22} alt="search" />
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full hidden md:flex justify-center items-center">
        <Image
          src="/Frame 177.png"
          alt="Soup Bowl"
          width={800}
          height={450}
          className="relative z-10 "
        />
      </div>
    </section>
  );
}
