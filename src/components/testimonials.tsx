"use client";

import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section
      id="testimonial"
      className="    relative w-full py-20 bg-white overflow-hidden"
    >
      <div className="max-w-screen-2xl w-full mx-auto px-4 lg:px-8 relative">
        {/* FLOATING USER IMAGES */}
        <Image
          src="/test1.png"
          alt=""
          width={90}
          height={90}
          className=" hidden md:block absolute top-6 left-32 rounded-full object-cover"
        />

        <Image
          src="/test2.png"
          alt=""
          width={120}
          height={120}
          className="absolute hidden md:block top-56 left-40 rounded-full object-cover"
        />
        <Image
          src="/test2.png"
          alt=""
          width={60}
          height={80}
          className="absolute hidden md:block top-40 left-10 rounded-full object-cover"
        />

        <Image
          src="/test3.png"
          alt=""
          width={80}
          height={90}
          className="absolute hidden md:block bottom-28 left-6 rounded-full object-cover"
        />

        <Image
          src="/test4.png"
          alt=""
          width={100}
          height={90}
          className="absolute hidden md:block top-0 right-5 rounded-full object-cover"
        />

        <Image
          src="/test5.png"
          alt=""
          width={60}
          height={120}
          className="absolute hidden md:block top-20 right-40 rounded-full object-cover"
        />

        <Image
          src="/test6.png"
          alt=""
          width={80}
          height={90}
          className="absolute hidden md:block bottom-60 right-40 rounded-full object-cover"
        />
        <Image
          src="/test6.png"
          alt=""
          width={140}
          height={170}
          className="absolute hidden md:block  right-0 bottom-16 rounded-full object-cover"
        />

        {/* CENTER HEADING */}
        <div className="relative z-10 text-center mb-10">
          <div className="text-4xl " style={{ fontFamily: "gerbil" }}>
            <span className="inline-block bg-[#CDE0D1] rounded-full px-2 py-1 text-4xl font-gerbil">
              What
            </span>
            our customer <br />
            says About Us
          </div>

          {/* Yellow brush underline */}
          <div className="ml-28 flex justify-center">
            <Image
              src="/lines.png"
              alt="underline"
              width={200}
              height={40}
              className="object-contain"
            />
          </div>
        </div>

        {/* MAIN TESTIMONIAL BOX */}
        <div
          className="relative z-10 flex justify-center  font-regular text-2xl "
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          <div className="bg-[#D7EEDD4D] rounded-3xl p-10 max-w-2xl shadow-md">
            <p className="flex text-gray-700 text-center  leading-relaxed">
              <span className=" -mt-1 ">
                <Image
                  src="/comma.png"
                  alt="underline"
                  width={140}
                  height={40}
                  className="object-contain"
                />
              </span>
              Elementum delivered the site within the timeline as they
              requested. In the end, the client found a 50% increase in traffic
              within days since its launch. They also had an impressive ability
              to use technologies that the company hasn’t used, which have also
              proved to be easy to use and reliable.
              {/* <span className="text-4xl -mb-10 font-serif ml-2">”</span> */}
            </p>
            {/* <Image
            src="/comma.png"
            alt="underline"
            width={40}
            height={40}
            className="object-contain absolute left-9/12 bottom-9 -ml-14 rotate-180"
          /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
