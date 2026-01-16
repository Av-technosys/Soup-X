"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const categories = [
    {
        title: "Signature Soups",
        img: "/one.png",
    },
    {
        title: "Wrap & Sandwiches",
        img: "/two.png",
    },
    {
        title: "Khichdi & Bowls",
        img: "/three.png",
    },
    {
        title: "Powerful Salads",
        img: "/four.png",
    },
    {
        title: "Khichdi & Bowls",
        img: "/five.png",
    },
    {
        title: "Powerful Salads",
        img: "/six.png",
    },
];

export default function FoodCarousel() {
    return (
        <div className="w-full py-10">
            <h3 className=" text-4xl lg:text-5xl font-semibold text-center mb-10">Media </h3>
            <Swiper
                navigation={true}
                modules={[Autoplay]}
                autoplay={{
                    delay: 0, // 2 seconds
                    disableOnInteraction: false,
                }}
                loop={true}
                speed={1000}
                spaceBetween={30}
                slidesPerView={1.3}
                breakpoints={{
                    640: { slidesPerView: 2.5 },
                    1024: { slidesPerView: 4 },
                }}
                className="px-6"
            >
                {categories.map((cat, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center">

                            {/* Rounded image box */}
                            <div className=" rounded-md overflow-hidden shadow-md">
                                <Image
                                    src={cat.img}
                                    width={200}
                                    height={200}
                                    alt={cat.title}
                                    className="object-cover"
                                />
                            </div>


                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
