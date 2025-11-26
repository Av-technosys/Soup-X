"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
            <h1 className="text-5xl font-semibold text-center mb-10">Media Coverage</h1>
            <Swiper
                navigation={true}
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

                            {/* Title */}
                            <h3 className="mt-4 text-2xl font-semibold text-black text-center">
                                {/* {cat.title} */}
                            </h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
