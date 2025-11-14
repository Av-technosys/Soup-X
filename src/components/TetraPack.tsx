"use client";

import Image from "next/image";

export default function TetraPack() {
  return (
    <section className="relative w-full mt-10 py-10  overflow-hidden">
      {/* TOP YELLOW LINE */}
      <div className="text-center mb-4">
        <h2
          className="text-4xl md:text-6xl font-extrabold "
          style={{ fontFamily: "Poppins" }}
        >
          Upcoming Products
        </h2>
        <div className=" mt-2 h-2 w-40 md:w-64 bg-yellow-400 mx-auto rounded-full"></div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className=" py-8 grid grid-cols-1 md:grid-cols-2   items-center bg-[#032111]">
        {/* LEFT: TWO IMAGES → TETRA PACK + SOUP BOWL */}
        <div className=" md:flex ">
          {/* Tetra Pack */}
          <Image
            src="/tetra.png"
            alt="SoupX Tetra Pack"
            width={350}
            height={100}
            className="object-contain md:absolute -ml-10 md:ml-0  md:bottom-8 md:left-0  md:z-10"
          />

          {/* Soup Bowl */}
          <Image
            className=" md:ml-40 absolute top-96 md:top-48 left-20  md:left-0 md:-bottom-10"
            src="/tea.png"
            alt="Soup Bowl"
            width={600}
            height={500}
            // className="object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-white  px-10" style={{ fontFamily: "Prompt" }}>
          <h2
            className="text-5xl md:text-4xl font-medium mb-8"
            style={{ fontFamily: "Prompt" }}
          >
            SoupX Tetra Pack
          </h2>

          {/* INFO GRID (2 × 2 BOXES) */}
          <div className="grid grid-cols-1 sm:grid-cols-2  ">
            <div className="md:border-r-2 md:border-b-2 p-4 border-r-[#FF4E65] border-b-[#EE27FF] ">
              <h3 className="text-3xl font-medium">Gabe Valdivia</h3>
              <p className="text-gray-300 text-sm mt-2 font-normal">
                I am design at chef, where he is making it possible to order.
              </p>
              {/* <div className="h-[2px] w-full bg-yellow-400 mt-3"></div> */}
            </div>

            <div className="p-4  ">
              <h3 className="text-3xl font-medium">Gilff Warren</h3>
              <p className="text-gray-300 text-sm mt-2 font-normal">
                Gabe is currently leading consumer experience design.
              </p>
              {/* <div className="h-[2px] w-full bg-pink-500 mt-3"></div> */}
            </div>

            <div className=" p-4   ">
              <h3 className="text-3xl font-medium">Oleg Panichev</h3>
              <p className="text-gray-300 text-sm mt-2 font-normal">
                I am a product Designer at Facebook working at the intersection.
              </p>
              {/* <div className="h-[2px] w-full bg-blue-500 mt-3"></div> */}
            </div>

            <div className=" -ml-0.5 -mt-0.5 md:border-t-2 md:border-l-2 p-4  border-t-[#1657FF] border-l-[#FF9B00]   ">
              <h3 className="text-3xl font-medium">Gabe Valdivia</h3>
              <p className="text-gray-300 text-sm mt-2 font-normal">
                I am explored a wide variety of technologies in his career.
              </p>
              {/* <div className="h-[2px] w-full bg-yellow-400 mt-3"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
