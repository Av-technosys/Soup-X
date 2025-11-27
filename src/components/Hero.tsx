// "use client";
// import { Search } from "lucide-react";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section
//       className="  flex w-full "
//       style={{ fontFamily: "Plus Jakarta Sans" }}
//     >
//       {/* LEFT SECTION */}
//       <div className=" lg:absolute justify-center items-center mt-10 lg:mt-36 md:mt-52 mx-4 md:mx-0 md:ml-20">
//         <h3 className="text-green-700 font-bold text-3xl">Shark Tank India Trusted.</h3>

//         <h1 className="  text-4xl md:text-5xl font-bold leading-tight mt-3">
//           Healthy Food, <br /> Finally Accessible
//         </h1>
//         <p className="text-gray-600 font-normal md:text-left text-left text-xl mt-4 max-w-md">
//           India’s 1st wellness soup-based food ecosystem trusted by hospitals, corporates & modern India..
//           <br />
//           Clean. Nutritious. Comforting. And ready in minutes.

//         </p>


//       </div>

//       {/* RIGHT SECTION */}
//       <div className="w-full hidden md:flex justify-center items-center">
//         <Image
//           src="/hero.jpg"
//           alt="Soup Bowl"
//           width={6000}
//           height={100}
//           className="object-contain w-full "
//         />
//       </div>
//     </section>
//   );
// }




"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

export default function Hero() {
  const slides = [
    {
      image: "/hero11.jpg",
      title1: "Shark Tank India Trusted.",
      title2: "Healthy Food, Finally Accessible",
      desc: `India’s 1st wellness soup-based food ecosystem trusted by hospitals, corporates & modern India..
      Clean. Nutritious. Comforting. And ready in minutes.`,
    },
    {
      image: "/hero22.jpg",
      title1: " Good Food Should Heal, Not Harm.",
      title2: "Wellness in Every Bowl. ",
      desc: `Nutritious soups, bowls & smoothies made with real ingredients —
designed by chefs, approved by nutritionists, loved by India.
Wholesome flavour. Zero preservatives. Everyday wellness.`,
    },
    {
      image: "/hero.jpg",
      title1: " Wellness Made Simple, Fast & Affordable.",
      title2: "The Clean Food India Was Waiting For.",
      desc: `Not luxury. Not diet food. Just honest, healthy meals accessible to all —
in hospitals, workplaces, campuses & now near you.
Eat well. Feel better. Live healthier.`,
    },
  ];

  return (
    <section className="w-full" style={{ fontFamily: "Plus Jakarta Sans" }}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2000, // 2 seconds
          disableOnInteraction: false,
        }}
        navigation={true}
        speed={1000}

        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        className="w-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col md:flex-row w-full ">
              {/* LEFT */}
              <div className=" lg:absolute z-0   flex flex-col justify-center md:mt-0 px-8 md:pl-20 max-w-xl">
                <h3 className="text-green-700 font-bold mt-4 lg:mt-40 text-3xl">{s.title1}</h3>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-3">
                  {s.title2}
                </h1>

                <p className="text-gray-600 text-xl mt-4">
                  {s.desc}
                </p>
              </div>

              {/* RIGHT */}
              <div className="flex w-full justify-center items-center">
                <Image
                  src={s.image}
                  alt="Hero"
                  width={2000}
                  height={1000}
                  className="object-contain w-full"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
