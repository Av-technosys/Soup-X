"use client";

import Image from "next/image";

export default function TetraPack() {
  return (
    <section
      id="product"
      className="relative w-full mt-10 md:py-10  overflow-hidden"
    >
      <div className="text-center mb-4">
        <h2
          className="text-4xl md:text-6xl font-extrabold "
          style={{ fontFamily: "Poppins" }}
        >
          Upcoming Products
        </h2>
        <div className=" mt-2 h-2 w-40 md:w-64 bg-yellow-400 mx-auto rounded-full"></div>
      </div>
      {/* TOP YELLOW LINE */}
      <div className="w-full bg-[#032111] ">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative">
          {/* <div className="text-center mb-4">
          <h2
            className="text-4xl md:text-6xl font-extrabold "
            style={{ fontFamily: "Poppins" }}
          >
            Upcoming Products
          </h2>
          <div className=" mt-2 h-2 w-40 md:w-64 bg-yellow-400 mx-auto rounded-full"></div>
        </div> */}

          {/* MAIN CONTENT GRID */}
          <div className=" py-8 grid grid-cols-1 md:grid-cols-2    items-center bg-[#032111]">
            {/* LEFT: TWO IMAGES → TETRA PACK + SOUP BOWL */}

            <div className=" md:flex ">
              {/* Tetra Pack */}
              <Image
                src="/tetratea.png"
                alt="SoupX Tetra Pack"
                width={800}
                height={600}
                className=" md:absolute -top-40 -left-10"
                // className="object-contain md:absolute -ml-10 md:ml-0  md:bottom-8 md:left-0  md:z-10"
              />

              {/* Soup Bowl */}
              {/* <Image
                className=" md:ml-40 absolute top-80 md:top-20 left-20  md:left-0 md:bottom-0"
                src="/tea.png"
                alt="Soup Bowl"
                width={600}
                height={500}
              /> */}
            </div>

            {/* RIGHT CONTENT */}
            <div
              className="text-white  lg:px-10"
              style={{ fontFamily: "Prompt" }}
            >
              <h2
                className="text-4xl md:text-4xl font-medium mb-8"
                style={{ fontFamily: "Prompt" }}
              >
                SoupX Tetra Pack
              </h2>

              {/* INFO GRID (2 × 2 BOXES) */}
              <div className="grid grid-cols-1 sm:grid-cols-2  ">
                <div className="md:border-r-2 md:border-b-2 lg:p-4 border-r-[#FF4E65] border-b-[#EE27FF] ">
                  <h3 className="text-3xl font-medium">Gabe Valdivia</h3>
                  <p className="text-gray-300 text-lg lg:text-sm mt-2 font-normal">
                    I am design at chef, where he is making it possible to
                    order.
                  </p>
                  {/* <div className="h-[2px] w-full bg-yellow-400 mt-3"></div> */}
                </div>

                <div className="lg:p-4 mt-2 lg:mt-0 ">
                  <h3 className="text-3xl font-medium">Gilff Warren</h3>
                  <p className="text-gray-300 text-lg lg:text-sm mt-2 font-normal">
                    Gabe is currently leading consumer experience design.
                  </p>
                  {/* <div className="h-[2px] w-full bg-pink-500 mt-3"></div> */}
                </div>

                <div className="lg:p-4 mt-2 lg:mt-0 ">
                  <h3 className="text-3xl font-medium">Oleg Panichev</h3>
                  <p className="text-gray-300 text-sm mt-2 font-normal">
                    I am a product Designer at Facebook working at the
                    intersection.
                  </p>
                  {/* <div className="h-[2px] w-full bg-blue-500 mt-3"></div> */}
                </div>

                <div className=" -ml-0.5 lg:-mt-0.5 md:border-t-2 md:border-l-2 lg:p-4 mt-2 lg:mt-0  border-t-[#1657FF] border-l-[#FF9B00]   ">
                  <h3 className="text-3xl font-medium">Gabe Valdivia</h3>
                  <p className="text-gray-300 text-sm mt-2 font-normal">
                    I am explored a wide variety of technologies in his career.
                  </p>
                  {/* <div className="h-[2px] w-full bg-yellow-400 mt-3"></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
