"use client";

import { CheckCircle } from "lucide-react";
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
          Our Impact
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
                src="/soup1.png"
                alt="SoupX Tetra Pack"
                width={450}
                height={600}
                className=" md:absolute -top-20 "
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
                Changing How India Eats — One Bowl at a Time
              </h2>

              {/* INFO GRID (2 × 2 BOXES) */}
              {/* <div className="grid grid-cols-1 sm:grid-cols-2  ">
                <div className="md:border-r-2 md:border-b-2 lg:p-4 border-r-[#FF4E65] border-b-[#EE27FF] ">
                  <h3 className="text-3xl font-medium">Gabe Valdivia</h3>
                  <p className="text-gray-300 text-lg lg:text-sm mt-2 font-normal">
                    I am design at chef, where he is making it possible to
                    order.
                  </p>
                </div>

                <div className="lg:p-4 mt-2 lg:mt-0 ">
                  <h3 className="text-3xl font-medium">Gilff Warren</h3>
                  <p className="text-gray-300 text-lg lg:text-sm mt-2 font-normal">
                    Gabe is currently leading consumer experience design.
                  </p>
                </div>

                <div className="lg:p-4 mt-2 lg:mt-0 ">
                  <h3 className="text-3xl font-medium">Oleg Panichev</h3>
                  <p className="text-gray-300 text-sm mt-2 font-normal">
                    I am a product Designer at Facebook working at the
                    intersection.
                  </p>
                </div>

                <div className=" -ml-0.5 lg:-mt-0.5 md:border-t-2 md:border-l-2 lg:p-4 mt-2 lg:mt-0  border-t-[#1657FF] border-l-[#FF9B00]   ">
                  <h3 className="text-3xl font-medium">Gabe Valdivia</h3>
                  <p className="text-gray-300 text-sm mt-2 font-normal">
                    I am explored a wide variety of technologies in his career.
                  </p>
                </div>
              </div> */}
              <div className="grid grid-cols-1 gap-2">
                <div className="flex gap-4"><CheckCircle className="text-green-600" size={22} />
                  <h1>Hospitals now serve clean food</h1></div>
                <div className="flex gap-4"><CheckCircle className="text-green-600" size={22} />
                  <h1>Corporates see healthier, happier teams</h1></div>
                <div className="flex gap-4"><CheckCircle className="text-green-600" size={22} />
                  <h1>Students finally get affordable, nourishing meals</h1></div>
                <div className="flex gap-4"><CheckCircle className="text-green-600" size={22} />
                  <h1>Zero-preservative production</h1></div>
                <div className="flex gap-4"><CheckCircle className="text-green-600" size={22} />
                  <h1>Compostable, planet-friendly packaging</h1></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto text-center mt-10 ">
        <h1 className="text-2xl lg:text-6xl font-semibold">Build India’s Wellness Revolution</h1>
        <p className=" text-lg lg:text-3xl mt-4 ">Low investment. High demand. Fast returns. <br />
          Perfect for hospitals & high-footfall hubs.</p>

      </div>
    </section>
  );
}
