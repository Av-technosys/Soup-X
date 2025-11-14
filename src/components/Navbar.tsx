// "use client";

// import Image from "next/image";

// export default function Navbar() {
//   return (
//     <nav
//       className=" absolute top-0 left-0 w-full z-50 bg-transparent"
//       style={{ fontFamily: "Plus Jakarta Sans" }}
//     >
//       <div className="max-w-full mx-auto px-6 py-4 flex items-center n">
//         {/* LEFT LOGO */}
//         <div className="flex items-center gap-3">
//           <Image
//             src="/image 114.png"
//             alt="SoupX Logo"
//             width={100}
//             height={80}
//             className="object-contain"
//           />
//         </div>

//         {/* CENTER MENU */}
//         <ul className="hidden md:flex items-center gap-12 text-black font-semibold text-2xl ml-10">
//           <li className="cursor-pointer hover:text-green-600">Menu</li>
//           <li className="cursor-pointer hover:text-green-600">Lunch boxes</li>
//           <li className="cursor-pointer hover:text-green-600">Platters</li>
//           <li className="cursor-pointer hover:text-green-600">Specials</li>
//         </ul>
//       </div>
//     </nav>
//   );
// }
"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="absolute top-0 left-0 w-full z-50 bg-transparent "
      style={{ fontFamily: "Plus Jakarta Sans" }}
    >
      <div className="max-w-[1800px] mx-auto px-6 py-4 flex items-center justify-between md:justify-start">
        {/* LEFT LOGO */}
        <a href="/">
          <Image
            src="/image 114.png"
            alt="SoupX Logo"
            width={100}
            height={80}
            className="object-contain"
          />
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-12 text-black font-semibold text-2xl ml-10">
          <li>
            <a href="/about" className="cursor-pointer hover:text-green-600">
              About Us
            </a>
          </li>
          <li>
            <a href="#menu" className="cursor-pointer hover:text-green-600">
              Menu
            </a>
          </li>

          <li>
            <a href="#solution" className="cursor-pointer hover:text-green-600">
              Solutions
            </a>
          </li>

          <li>
            <a href="#product" className="cursor-pointer hover:text-green-600">
              Products
            </a>
          </li>

          <li>
            <a
              href="#testimonial"
              className="cursor-pointer hover:text-green-600"
            >
              Testimonial
            </a>
          </li>
          <li>
            <a href="/contact" className="cursor-pointer hover:text-green-600">
              Contact Us
            </a>
          </li>
        </ul>

        {/* MOBILE HAMBURGER */}
        <button className="md:hidden text-black" onClick={() => setOpen(!open)}>
          {open ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden bg-white text-black font-semibold text-xl px-6 py-4 absolute w-full right-0 
          transition-all duration-300 shadow-lg
          ${open ? "top-28 opacity-100" : "top-[-300px] opacity-0"}
        `}
      >
        <ul className="flex flex-col gap-6">
          <li>
            <a href="/about" className="cursor-pointer hover:text-green-600">
              About Us
            </a>
          </li>
          <li>
            <a href="#menu" className="cursor-pointer hover:text-green-600">
              Menu
            </a>
          </li>

          <li>
            <a href="#solution" className="cursor-pointer hover:text-green-600">
              Solutions
            </a>
          </li>

          <li>
            <a href="#product" className="cursor-pointer hover:text-green-600">
              Products
            </a>
          </li>

          <li>
            <a
              href="#testimonial"
              className="cursor-pointer hover:text-green-600"
            >
              Testimonial
            </a>
          </li>
          <li>
            <a href="/contact" className="cursor-pointer hover:text-green-600">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
