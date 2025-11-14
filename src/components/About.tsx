"use client";

import Image from "next/image";
import { CheckCircle, Users, Factory, Leaf } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-white pt-28"
      style={{ fontFamily: "Plus Jakarta Sans" }}
    >
      {/* ---------------- HERO SECTION ---------------- */}
      <div className="w-full flex flex-col md:flex-row items-center px-6 md:px-20">
        {/* LEFT TEXT */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1
            className="text-5xl md:text-7xl font-bold leading-tight text-gray-900"
            style={{ fontFamily: "Poppins" }}
          >
            About <span className="text-green-700">SoupX</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-lg">
            Bringing health, freshness, and convenience together — one bowl at a
            time. SoupX is committed to serving nutritious, tasty, chef-crafted
            soups and meals to homes, restaurants, hospitals, and enterprise
            clients.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <Image
            src="/about.png"
            width={500}
            height={500}
            alt="About SoupX"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* ---------------- OUR STORY SECTION ---------------- */}
      <div className="mt-32 px-6 md:px-20 text-center">
        <h2
          className="text-4xl md:text-5xl font-bold text-gray-900"
          style={{ fontFamily: "Poppins" }}
        >
          Our Story
        </h2>
        <p className="text-gray-600 text-xl max-w-3xl mx-auto mt-4">
          SoupX began with a simple mission — make healthy eating accessible and
          enjoyable. What started as a small kitchen experiment has now scaled
          into a trusted food brand serving thousands every day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-14">
          <div className="p-6 border rounded-2xl shadow-sm">
            <Users size={50} className="text-green-700 mx-auto" />
            <h3 className="text-2xl font-semibold mt-4">
              Trusted by 50K+ People
            </h3>
            <p className="text-gray-600 mt-2">
              Across cities, homes, hospitals & enterprises.
            </p>
          </div>

          <div className="p-6 border rounded-2xl shadow-sm">
            <Factory size={50} className="text-green-700 mx-auto" />
            <h3 className="text-2xl font-semibold mt-4">
              Modern Cloud Kitchens
            </h3>
            <p className="text-gray-600 mt-2">
              Cutting-edge production for consistent taste & quality.
            </p>
          </div>

          <div className="p-6 border rounded-2xl shadow-sm">
            <Leaf size={50} className="text-green-700 mx-auto" />
            <h3 className="text-2xl font-semibold mt-4">Fresh & Natural</h3>
            <p className="text-gray-600 mt-2">
              Real ingredients, zero preservatives, pure nutrition.
            </p>
          </div>
        </div>
      </div>

      {/* ---------------- OUR MISSION SECTION ---------------- */}
      <div className="mt-32 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <Image
            src="/mission.png"
            width={550}
            height={500}
            alt="Our Mission"
            className="rounded-xl shadow-md"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "Poppins" }}
          >
            Our Mission
          </h2>
          <p className="text-gray-600 text-xl">
            We aim to redefine healthy eating in India by offering delicious,
            chef-prepared soups and meals made with high-quality, locally
            sourced ingredients.
          </p>

          <ul className="space-y-3">
            {[
              "Promote healthy eating habits",
              "Create affordable nutritious food",
              "Deliver quality with uncompromised consistency",
              "Support hospitals, corporates, and communities",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-xl text-gray-800"
              >
                <CheckCircle className="text-green-700" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---------------- FOUNDERS SECTION ---------------- */}
      <div className="mt-32 px-6 md:px-20 text-center">
        <h2
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "Poppins" }}
        >
          Meet Our Founders
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          {/* Founder 1 */}
          <div className="flex flex-col items-center">
            <Image
              src="/user.png"
              width={250}
              height={250}
              alt="Founder 1"
              className="rounded-full shadow-lg"
            />
            <h3 className="text-2xl font-semibold mt-6">Priyank Jain</h3>
            <p className="text-gray-600">Founder</p>
          </div>

          {/* Founder 2 */}
          <div className="flex flex-col items-center">
            <Image
              src="/user.png"
              width={250}
              height={250}
              alt="Founder 2"
              className="rounded-full shadow-lg"
            />
            <h3 className="text-2xl font-semibold mt-6">Uttam Kumar</h3>
            <p className="text-gray-600">Co-Founder</p>
          </div>
        </div>
      </div>

      {/* ---------------- CTA SECTION ---------------- */}
      <div className="mt-32 mb-32 px-6 md:px-20 text-center">
        <div className="bg-green-700 text-white p-12 rounded-3xl shadow-xl">
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "Poppins" }}
          >
            Join the SoupX Journey
          </h2>
          <p className="text-lg md:text-xl mt-3 text-gray-200">
            Whether you're a customer, partner, or franchise — we’d love to
            connect.
          </p>

          <a
            href="/contact"
            className="inline-block mt-6 bg-white text-green-700 font-semibold px-8 py-3 
                       rounded-xl text-xl hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
