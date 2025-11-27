// "use client";

// import Image from "next/image";

// export default function TestimonialSection() {
//   return (
//     <section
//       id="testimonial"
//       className="    relative w-full py-20 bg-white overflow-hidden"
//     >
//       <div className="max-w-screen-2xl w-full mx-auto px-4 lg:px-8 relative">
//         {/* FLOATING USER IMAGES */}
//         <Image
//           src="/test1.png"
//           alt=""
//           width={90}
//           height={90}
//           className=" hidden md:block absolute top-6 left-32 rounded-full object-cover"
//         />

//         <Image
//           src="/test2.png"
//           alt=""
//           width={120}
//           height={120}
//           className="absolute hidden md:block top-56 left-40 rounded-full object-cover"
//         />
//         <Image
//           src="/test2.png"
//           alt=""
//           width={60}
//           height={80}
//           className="absolute hidden md:block top-40 left-10 rounded-full object-cover"
//         />

//         <Image
//           src="/test3.png"
//           alt=""
//           width={80}
//           height={90}
//           className="absolute hidden md:block bottom-28 left-6 rounded-full object-cover"
//         />

//         <Image
//           src="/test4.png"
//           alt=""
//           width={100}
//           height={90}
//           className="absolute hidden md:block top-0 right-5 rounded-full object-cover"
//         />

//         <Image
//           src="/test5.png"
//           alt=""
//           width={60}
//           height={120}
//           className="absolute hidden md:block top-20 right-40 rounded-full object-cover"
//         />

//         <Image
//           src="/test6.png"
//           alt=""
//           width={80}
//           height={90}
//           className="absolute hidden md:block bottom-60 right-40 rounded-full object-cover"
//         />
//         <Image
//           src="/test6.png"
//           alt=""
//           width={140}
//           height={170}
//           className="absolute hidden md:block  right-0 bottom-16 rounded-full object-cover"
//         />

//         {/* CENTER HEADING */}
//         <div className="relative z-10 text-center mb-10">
//           <div className="text-4xl " style={{ fontFamily: "gerbil" }}>
//             <span className="inline-block bg-[#CDE0D1] rounded-full px-2 py-1 text-4xl font-gerbil">
//               What
//             </span>
//             our customer <br />
//             says About Us
//           </div>

//           {/* Yellow brush underline */}
//           <div className="ml-28 flex justify-center">
//             <Image
//               src="/lines.png"
//               alt="underline"
//               width={200}
//               height={40}
//               className="object-contain"
//             />
//           </div>
//         </div>

//         {/* MAIN TESTIMONIAL BOX */}
//         <div
//           className="relative z-10 flex justify-center  font-regular text-2xl "
//           style={{ fontFamily: "Plus Jakarta Sans" }}
//         >
//           <div className="bg-[#D7EEDD4D] rounded-3xl p-10 max-w-2xl shadow-md">
//             <p className="flex text-gray-700 text-center  leading-relaxed">
//               <span className=" -mt-1 ">
//                 <Image
//                   src="/comma.png"
//                   alt="underline"
//                   width={140}
//                   height={40}
//                   className="object-contain"
//                 />
//               </span>
//               Elementum delivered the site within the timeline as they
//               requested. In the end, the client found a 50% increase in traffic
//               within days since its launch. They also had an impressive ability
//               to use technologies that the company hasn’t used, which have also
//               proved to be easy to use and reliable.
//               {/* <span className="text-4xl -mb-10 font-serif ml-2">”</span> */}
//             </p>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

export default function TestimonialSection() {
  const testimonials = [
    {
      text: "SoupX has become my everyday comfort food. The meals are light, delicious, and genuinely make me feel better after a long day. It’s the first healthy food brand that doesn’t taste boring. I actually look forward to my bowl now.",
    },
    {
      text: "I wanted a healthier eating habit but didn’t want to compromise on taste. SoupX changed everything for me. Their soups and bowls are wholesome, affordable, and honestly the cleanest food I’ve ever had from a QSR",
    },
    {
      text: "I’ve tried so many ‘healthy food brands’ but nothing comes close to SoupX. Everything tastes homemade yet professional. It’s clean food that doesn’t feel like a compromise — finally!",
    },
  ];

  return (
    <section id="testimonial" className="relative w-full py-20 bg-white overflow-hidden">
      <div className="max-w-screen-2xl w-full mx-auto px-4 lg:px-8 relative">

        {/* FLOATING IMAGES (same as your code) */}
        <Image src="/test1.png" alt="" width={90} height={90} className="hidden md:block absolute top-6 left-32 rounded-full" />
        <Image src="/test2.png" alt="" width={120} height={120} className="hidden md:block absolute top-56 left-40 rounded-full" />
        <Image src="/test2.png" alt="" width={60} height={80} className="hidden md:block absolute top-40 left-10 rounded-full" />
        <Image src="/test3.png" alt="" width={80} height={90} className="hidden md:block absolute bottom-28 left-6 rounded-full" />
        <Image src="/test4.png" alt="" width={100} height={90} className="hidden md:block absolute top-0 right-5 rounded-full" />
        <Image src="/test5.png" alt="" width={60} height={120} className="hidden md:block absolute top-20 right-40 rounded-full" />
        <Image src="/test6.png" alt="" width={80} height={90} className="hidden md:block absolute bottom-60 right-40 rounded-full" />
        <Image src="/test6.png" alt="" width={140} height={170} className="hidden md:block absolute right-0 bottom-16 rounded-full" />

        {/* HEADING */}
        <div className="relative z-10 text-center mb-10">
          <div className="text-4xl font-gerbil">
            <span className="inline-block bg-[#CDE0D1] rounded-full px-2 py-1 text-4xl">What</span>
            our customer <br /> says About Us
          </div>

          <div className="ml-28 flex justify-center">
            <Image src="/lines.png" alt="underline" width={200} height={40} />
          </div>
        </div>

        {/* ⭐ TESTIMONIAL CAROUSEL ⭐ */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000 }}
          loop={true}
          className="max-w-2xl mx-auto"
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className="relative z-10 flex justify-center text-2xl font-regular"
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                <div className="bg-[#D7EEDD4D]  rounded-3xl p-10 shadow-md">
                  <p className="text-gray-700 text-center leading-relaxed">
                    <span className="-mt-1 block mb-2">
                      {/* <Image src="/comma.png" alt="" width={140} height={40} /> */}
                    </span>
                    {item.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full pt-10 px-6 md:px-12 lg:px-24 text-black">
        <div className="max-w-6xl mx-auto text-center">

          {/* HEADING */}
          <h1 className="inline-block text-2xl md:text-4xl lg:text-5xl font-extrabold px-6 py-3  rounded-xl shadow-lg">
            Build the Future of Healthy Food in India
          </h1>

          {/* SUBTEXT */}
          <p className="text-lg md:text-xl mt-8 font-light">
            We hire passionate people in:
          </p>

          {/* GRID BOXES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              "Operations",
              "Nutrition",
              "Central Kitchen",
              "Marketing",
              "Sales",
              "Technology",
            ].map((item, index) => (
              <div
                key={index}
                className=" hover:border-green-500 transition-all duration-300 
          rounded-xl p-6 shadow-md hover:shadow-green-600/40 flex items-center justify-center text-xl font-semibold"
              >
                {item}
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <div className="mt-12 flex justify-center">
            <button
              className="bg-green-600 hover:bg-green-700 transition-all duration-300 
        text-white px-10 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-green-600/40"
            >
              Join Our Team
            </button>
          </div>

        </div>
      </div>


    </section>
  );
}
