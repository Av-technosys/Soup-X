"use client";

import Image from "next/image";
import { CheckCircle, Users, Factory, Leaf } from "lucide-react";
import Leaders from "@/src/components/Leaders";

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-white pt-4 lg:pt-28"
      style={{ fontFamily: "Plus Jakarta Sans" }}
    >
      {/* ---------------- HERO SECTION ---------------- */}
      <div className="w-full flex flex-col md:flex-row items-center px-6 md:px-20">
        {/* LEFT TEXT */}
        <div className="w-full md:w-1/2 space-y-1">
          <h1
            className="text-5xl md:text-7xl font-bold leading-tight text-gray-900"
            style={{ fontFamily: "Poppins" }}
          >
            About SoupX
          </h1>
          <h1 className="text-5xl font-semibold text-green-700">Our Origin Story
          </h1>
          <p className="text-gray-600 text-xl mt-4 max-w-lg">
            SoupX was born inside a hospital room.
            During days at Apollo Hospital for his mother’s treatment, our founder saw a harsh truth—
            India’s healing spaces still serve unhealthy food.
            Patients struggled. Doctors depended on snacks. Attendants ate junk for days.




          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <Image
            src="/soupbowl.jpg"
            width={500}
            height={500}
            alt="About SoupX"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* ---------------- OUR STORY SECTION ---------------- */}
      <div className="lg:mt-32 mt-10 px-6 md:px-20 text-center">
        <h2
          className="text-4xl md:text-5xl font-bold text-gray-900"
          style={{ fontFamily: "Poppins" }}
        >
          Our Story
        </h2>
        <p className="text-gray-600 text-xl max-w-3xl mx-auto mt-4">
          SoupX is India’s first wellness QSR designed for hospitals, workplaces, and public environments.
          We create clean label meals that support energy, recovery, and nourishment.
          Our menus are crafted with chefs, nutritionists, and food technologists to provide balanced, delicious meals that suit modern lifestyles.

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
      <div className=" mt-10 lg:mt-32 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <Image
            src="/mission.jpg"
            width={550}
            height={500}
            alt="Our Mission"
            className="rounded-xl shadow-md"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <h2
            className="text-4xl text-center md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "Poppins" }}
          >
            Our Mission
          </h2>
          <p className="text-gray-600 text-xl text-center">
            We aim to redefine healthy eating in India by offering delicious,
            chef-prepared soups and meals made with high-quality, locally
            sourced ingredients.
          </p>

          <ul className="space-y-3">
            {[
              "Health first",
              "Consistency in every bowl",
              "Clean food without preservatives",
              "Fast, convenient service",
              "Affordability and accessibility",
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
      {/* ---------------- OUR VISION SECTION ---------------- */}
      {/* <div className="mt-32 px-6 md:px-20 flex flex-col md:flex-row-reverse items-center gap-12">
        <div className="w-full md:w-1/2">
          <Image
            src="/vision2.jpg"
            width={370}
            height={500}
            alt="Our Vision"
            className="rounded-xl shadow-md"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "Poppins" }}
          >
            Our Vision
          </h2>
          <p className="text-gray-600 text-xl">
            A nation where every cafeteria, campus, hospital & office serves food that fuels life—not drains it.
          </p>

          <ul className="space-y-3">
            {[
              "No shortcuts, no preservatives",
              "Every bowl meets our gold standard",
              "Ready when you need it",
              "Wellness for everyone",
              "Compostable packaging, minimal waste",
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
      </div> */}
      <div className="mt-10 lg:mt-32 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center gap-12">

        {/* TEXT SECTION */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "Poppins" }}
          >
            Our Vision
          </h2>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            A nation where every cafeteria, campus, hospital & office serves food that fuels life—
            not drains it.
          </p>

          <ul className="space-y-3">
            {[
              "No shortcuts, no preservatives",
              "Every bowl meets our gold standard",
              "Ready when you need it",
              "Wellness for everyone",
              "Compostable packaging, minimal waste",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-lg md:text-xl text-gray-800"
              >
                <CheckCircle className="text-green-700 w-6 h-6 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* IMAGE SECTION */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/vision2.jpg"
            width={450}
            height={550}
            alt="Our Vision"
            className="rounded-xl shadow-lg object-cover max-h-[500px]"
          />
        </div>

      </div>



      {/* What we stand for */}
      <section
        id="product"
        className="relative w-full mt-10 md:py-10  overflow-hidden"
      >
        <div className="text-center mb-4">
          <h2
            className="text-4xl md:text-6xl font-extrabold "
            style={{ fontFamily: "Poppins" }}
          >
            What we Stand For
          </h2>
          <div className=" mt-2 h-2 w-40 md:w-64 bg-yellow-400 mx-auto rounded-full"></div>
        </div>
        {/* TOP YELLOW LINE */}
        <div className="w-full bg-[#032111] ">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative">


            {/* MAIN CONTENT GRID */}
            <div className=" py-8 grid grid-cols-1 md:grid-cols-2    items-center bg-[#032111]">

              <div className=" md:flex ">
                {/* Tetra Pack */}
                <Image
                  src="/vision3.png"
                  alt="SoupX Tetra Pack"
                  width={450}
                  height={600}
                  className=" md:absolute -mt-40 lg:mt-0   lg:-top-44 "
                />


              </div>

              {/* RIGHT CONTENT */}
              <div
                className="text-white -mt-36 lg:mt-0 lg:px-10"
                style={{ fontFamily: "Prompt" }}
              >
                <h2
                  className="text-4xl md:text-4xl font-medium mb-8"
                  style={{ fontFamily: "Prompt" }}
                >
                  The Values That Shape Every Bowl We Serve

                </h2>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex gap-4"><CheckCircle className="text-green-600" size={22} />
                    <h1>Health Before Everything
                    </h1></div>
                  <div className="flex gap-4"><CheckCircle className="text-green-600" size={22} />
                    <h1>Consistency You Can Trust
                    </h1></div>
                  <div className="flex gap-4"><CheckCircle className="text-green-600" size={22} />
                    <h1>Fast, Convenient, Everyday Food
                    </h1></div>
                  <div className="flex gap-4"><CheckCircle className="text-green-600" size={22} />
                    <h1>Wellness Made Affordable
                    </h1></div>
                  <div className="flex gap-4"><CheckCircle className="text-green-600" size={22} />
                    <h1>Sustainability, Built In
                    </h1></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ---------------- FOUNDERS SECTION ---------------- */}
      <div className=" mt-10 px-6 md:px-20 text-center">
        <h2
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "Poppins" }}
        >
          Meet Our Founders
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:mt-16 mt-4">
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

      {/* ---------------- OUR LEADERS -----------------*/}
      {/* <div className="w-full justify-around mt-10 flex">
        <div>
          <div><Image
            src="/vikas.png"
            width={250}
            height={250}
            alt="Founder 1"
            className=" shadow-lg"
          /></div>
          <div className=" bg-green-500 text-white border border-green-500 h-40 
           flex flex-col pt-6 px-4">
            <h1 className="text-2xl font-bold">VIKAS CHAWLA</h1>
            <p className="text-md  font-normal">Managing Director and <br />Chief Executive Officer</p>
          </div>
        </div>
        <div>
          <div><Image
            src="/joel.png"
            width={250}
            height={250}
            alt="Founder 1"
            className=" shadow-lg"
          /></div>
          <div className=" bg-green-500 text-white border border-green-500 h-40 
           flex flex-col pt-6 px-4">
            <h1 className="text-2xl font-bold ">JOEL ANTHONY</h1>
            <p className="text-md  font-normal">Chief Executive Officer, <br /> Support Services</p>
          </div>
        </div>
        <div>
          <div><Image
            src="/krish.png"
            width={250}
            height={250}
            alt="Founder 1"
            className=" shadow-lg"
          /></div>
          <div className=" bg-green-500 text-white border border-green-500 h-40 
           flex flex-col pt-6 px-4">
            <h1 className="text-2xl font-bold">KRISHNA WAGE</h1>
            <p className="text-md  font-normal">Co-Founder & CEO <br /> SmartQ, A Compass <br /> Group Company</p>
          </div>
        </div>
        <div>
          <div><Image
            src="/deb.png"
            width={250}
            height={250}
            alt="Founder 1"
            className=" shadow-lg"
          /></div>
          <div className=" bg-green-500 text-white border border-green-500 h-40 
           flex flex-col pt-6 px-4">
            <h1 className="text-2xl font-bold">DEBASHISH YADAV</h1>
            <p className="text-md  font-normal">Chief Executive Officer,  <br /> ICS Foods – A <br /> Compass Group <br /> Company</p>
          </div>
        </div>
      </div> */}
      <Leaders />


      {/* ---------------- CTA SECTION ---------------- */}
      <div className="lg:my-32 my-4 px-6 md:px-20 text-center">
        <div className="bg-green-700 text-white p-12 rounded-3xl shadow-xl">
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "Poppins" }}
          >
            Join the SoupX Journey
          </h2>
          <p className="text-lg md:text-xl mt-3 text-gray-200">
            Whether you &apos;re a customer, partner, or franchise — we’d love to
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
