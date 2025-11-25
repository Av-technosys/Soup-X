"use client";
import { Search } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="  flex w-full "
      style={{ fontFamily: "Plus Jakarta Sans" }}
    >
      {/* LEFT SECTION */}
      <div className="w-full  justify-center items-center mt-4 lg:mt-36 md:mt-52 mx-4 md:mx-0 md:ml-20">
        <h3 className="text-green-700 font-bold text-3xl">Shark Tank India Trusted.</h3>

        <h1 className="  text-4xl md:text-5xl font-bold leading-tight mt-3">
          Healthy Food, <br /> Finally Accessible
        </h1>
        <p className="text-gray-600 font-normal md:text-left text-left text-xl mt-4 max-w-md">
          India’s 1st wellness soup-based food ecosystem trusted by hospitals, corporates & modern India..
          <br />
          Clean. Nutritious. Comforting. And ready in minutes.

        </p>


      </div>

      {/* RIGHT SECTION */}
      <div className="w-full hidden md:flex justify-center items-center">
        <Image
          src="/hero.jpg"
          alt="Soup Bowl"
          width={6000}
          height={100}
          className="object-contain w-full "
        />
      </div>
    </section>
  );
}
