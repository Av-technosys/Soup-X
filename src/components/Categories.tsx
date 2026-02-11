"use client";

import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  const items = [
    {
      img: "/bowlz.jpg",
      title: "Signature Soups",
    },
    {
      img: "/wrapz.jpg",
      title: "Wrap & Sandwiches",
    },
    {
      img: "/khichdiz.jpg",
      title: "Khichdi & Bowls",
    },
    {
      img: "/saladz.jpg",
      title: "Powerful Salads",
    },
  ];

  return (
    <section id="menu" className="w-full mt-6 px-6 md:px-24">
      {/* TITLE + LINE */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-2 relative">
        <div className="text-center">
          <h2
            className=" text-3xl md:text-6xl font-semibold "
            style={{ fontFamily: "poppins" }}
          >
            {" "}
            Comfort Food That Loves You Back
          </h2>
          <h2
            className=" mt-4 text-xl md:text-2xl font-normal "
            style={{ fontFamily: "poppins" }}
          >
            {" "}
            Crafted by chefs. Approved by nutritionists. Made for daily nourishment.
          </h2>
          <div className=" mt-2 h-2 w-64 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        {/* CATEGORIES GRID */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 place-items-center">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              {/* Oval Image Frame */}
              <div className="relative w-[260px] h-[150px] rounded-[80px] overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src={item.img}
                  alt="Category"
                  fill
                  className="object-cover rounded-[80px]"
                />
              </div>
              {/* Title */}
              <h3
                className="text-2xl font-bold mt-4"
                style={{ fontFamily: "poppins" }}
              >
                {item.title}
              </h3>
              {/* Text */}
              {/* <p
                className="text-green-900 font-bold text-xl "
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                {item.dishes}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    <div className="flex justify-center gap-4 mt-6">
  <a href="/menu1.pdf" target="_blank" rel="noopener noreferrer">
    <button className="text-xl border rounded-lg px-6 py-2 bg-green-600 text-white hover:bg-green-700 transition">
      Explore Our Menu
    </button>
  </a>

   <Link href="https://order.soupx.health/" target="_blank" rel="noopener noreferrer">
  <button className="text-xl border rounded-lg px-6 py-2 bg-green-600 text-white hover:bg-green-700 transition">
    Order Now
  </button>
</Link>

</div>

      
    </section>
  );
}
