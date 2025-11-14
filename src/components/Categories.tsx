"use client";

import Image from "next/image";

export default function Categories() {
  const items = [
    {
      img: "/soup.png",
      title: "Organic Soup",
      dishes: "12 Dishes in the Menu",
    },
    {
      img: "/sandwich.png",
      title: "Organiic Sandwiche",
      dishes: "04 Dishes in the Menu",
    },
    {
      img: "/grill.png",
      title: "Organic Grill Food",
      dishes: "12 Dishes in the Menu",
    },
    {
      img: "/salad.png",
      title: "Freshly Prepared Salad",
      dishes: "12 Dishes in the Menu",
    },
  ];

  return (
    <section id="menu" className="w-full mt-6 px-6 md:px-24">
      {/* TITLE + LINE */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative">
        <div className="text-center">
          <h2
            className=" text-4xl md:text-6xl font-extrabold "
            style={{ fontFamily: "poppins" }}
          >
            {" "}
            Choose a Category
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
              <p
                className="text-green-900 font-bold text-xl "
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                {item.dishes}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
