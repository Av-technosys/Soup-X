"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import ParallaxSection from "./ParallaxSection";
import Link from "next/link";

export default function BusinessVerticals() {
  const sections = [
    {
      tag: "Why Hospitals Choose SoupX",
      title: "HOSPITAL WELLNESS QSR",
      desc: "Healthy Food Inside Hospitals",
      points: [
        "No investment needed",
        "Hospital earns ten to twelve percent on revenue",
        "Hygienic, modern, nutritious meals",
        "Menu created with nutritionists",
        "Improves staff energy during long shifts",
        "Enhances hospital brand value",
      ],
      button: "Request for QSR ",
      img: "/hospital.png",
      bg: "/parallax/bg1.jpg",
      href: "/contact",
    },
    {
      tag: "Healthy Employees, Better Productivity",
      title: "CORPORATE WELLNESS CAFÉS",
      desc: "SoupX brings wellness food programs to companies with:",
      points: [
        "Café setups",
        "Breakfast and lunch plans",
        "Smoothie and hydration bars",
        "Evening nutrition snacks",
        "Doctor approved meal plans",
        "Perfect for IT parks, co working spaces, corporate towers.",
      ],
      button: "Apply for Franchise",
      button1: "Download Franchise Brochure",
      img: "/corporate.png",
      bg: "/parallax/bg2.jpg",
      href: "https://franchiseready.in/soupx",
      href1: "/soupX.pdf",
    },
    {
      tag: "Nutrition for Students and Campus Wellness",
      title: "UNIVERSITY AND SCHOOL CAFÉS",
      desc: "Students spend long hours on campus and need clean, affordable food. SoupX serves:",
      points: [
        "Khichdi bowls",
        "Soups",
        "Wraps",
        "Smoothies",
        "Protein snacks",
        "Low sugar drinks",
        "Affordable pricing for youth",
      ],
      button: "Apply for Franchise",
      img: "/university.png",
      bg: "/parallax/bg3.jpg",
      href: "/contact",
    },
    {
      tag: "SoupX Retail Cafés Coming Soon",
      title: "RETAIL AND MALL CAFÉS",
      desc: "Full menu dining experience for:",
      points: [
        "Malls",
        "High streets",
        "Busy retail clusters",
        "Public spaces",
        "A clean, modern, wellness focused café format",
      ],
      button: "Apply for QSR",
      button1: "Download Franchise Brochure",
      img: "/business4.png",
      bg: "/parallax/bg4.jpg",
      href: "https://franchiseready.in/soupx",
      href1: "/soupX.pdf",
    },
    {
      tag: "Bulk Soups for QSRs, Hospitals, Corporates ",
      title: "B2B SUPPLY",
      desc: "Two Formats Concentrated Soups, Thirty Five Rupees, three hundred ml serve Ready to Serve Soups, Eighty Rupees, three hundred ml serve",
      points: [
        "QSRs",
        "Cafés",
        "Food courts",
        "Corporate kitchens",
        "Hospitals",
        "Cloud kitchens",
        "Caterers",
      ],
      button: "Apply for Franchise",
      img: "/supply.png",
      bg: "/parallax/bg5.jpg",
      href: "/contact",
    },
    {
      tag: "Healthy Food at Home",
      title: "FMCG AND QUICK COMMERCE",
      desc: "Launching soon:",
      points: [
        "Frozen soups",
        "Ready to eat khichdi",
        "Instant meal bowls",
        "Cold pressed smoothies",
        "Millet bowls",
      ],
      button: "Start Pre-Order",
      img: "/FCMG.png",
      bg: "/parallax/bg5.jpg",
      href: "/contact",
    },

  ];

  return (
    <section id="solution" className="w-full ">
      <div className="max-w-[1400px] mx-auto lg:px-8">
        {/* MAIN HEADING */}
        <div className="text-center mt-16 mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=" text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "Poppins" }}
          >
            The SoupX Ecosystem
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-gray-600 max-w-4xl mx-auto mt-3 px-4 text-xl md:text-2xl font-normal"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            Explore our diverse portfolio of business solutions, each backed by
            our robust supply chain infrastructure.
          </motion.p>
        </div>

        {/* ALL SECTIONS */}
        <div className="flex flex-col mt-4">
          {sections.map((item, index) => {
            const reverse = index % 2 !== 0;

            return (
              <ParallaxSection key={index} background={item.bg}>
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 items-center gap-14 ${reverse
                    ? "md:flex-row-reverse md:[&>*:first-child]:order-2"
                    : ""
                    }`}
                >
                  {/* TEXT AREA */}
                  <motion.div
                    className="mx-10"
                    initial={{ opacity: 0, x: reverse ? 80 : -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <span
                      className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-lg font-semibold "
                      style={{ fontFamily: "Plus Jakarta Sans" }}
                    >
                      {item.tag}
                    </span>

                    <h3
                      className="mt-4 text-2xl lg:text-4xl font-bold text-gray-900 leading-snug"
                      style={{ fontFamily: "Poppins" }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="text-gray-600 mt-3 text-xl lg:text-2xl
                   font-normal"
                      style={{ fontFamily: "Plus Jakarta Sans" }}
                    >
                      {item.desc}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {item.points.map((pt, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-gray-700 text-lg lg:text-xl font-normal"
                          style={{ fontFamily: "Plus Jakarta Sans" }}
                        >
                          <CheckCircle className="text-green-600" size={22} />
                          {pt}
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-2">
                      <Link {...(item.href ? { href: item.href } : { href: "#" })}>
                        <button
                          className="mt-6 bg-green-700 text-white text-xl font-semibold px-6 py-3 rounded-lg hover:bg-green-800 transition shadow-lg"
                          style={{ fontFamily: "Plus Jakarta Sans" }}
                        >
                          {item.button}
                        </button>
                      </Link>
                      {item.button1 && (
                        <a
                          href="/soupX.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button
                            className="mt-6 bg-green-700 text-white text-xl font-semibold px-6 py-3 rounded-lg hover:bg-green-800 transition shadow-lg"
                            style={{ fontFamily: "Plus Jakarta Sans" }}
                          >
                            {item.button1}
                          </button>
                        </a>
                      )}
                    </div>

                  </motion.div>

                  {/* IMAGE AREA */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                  >
                    <div className="rounded-xl shadow-md overflow-hidden">
                      <Image
                        src={item.img}
                        width={550}
                        height={350}
                        alt="Business section image"
                        className="object-cover rounded-xl"
                      />
                    </div>
                  </motion.div>
                </div>
              </ParallaxSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
