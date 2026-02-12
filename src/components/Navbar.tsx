"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // NAV MENU LIST (DRY REUSABLE ARRAY)
  const navItems = [
    { label: "About Us", href: "/about" },
    { label: "Menu", href: "/menu1.pdf", target: "_blank", rel: "noopener noreferrer" },
    { label: "Solutions", href: "/#solution" },
    // { label: "Products", href: "/#product" },
    { label: "Franchise", href: "https://franchiseready.in/soupx", target: "_blank", rel: "noopener noreferrer" },
    { label: "Testimonial", href: "/#testimonial" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav
      className=" h-28 w-full bg-white shadow-md "
      style={{ fontFamily: "Plus Jakarta Sans" }}
    >
      <div className="max-w-[1800px] mx-auto lg:px-6 px-2 py-4 flex items-center justify-between md:justify-start">
        {/* LOGO */}
        <Link href="/" >
          <Image
            src="/image 114.png"
            alt="SoupX Logo"
            width={100}
            height={80}
            className="object-contain cursor-pointer"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden bg-white md:flex items-center gap-8 text-black font-semibold text-xl ml-10">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                target={item.target || "_self"}
                rel={item.rel || ""}
                className="cursor-pointer hover:text-green-600 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden bg-white text-black" onClick={() => setOpen(!open)}>
          {open ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`md:hidden  bg-white text-black font-semibold text-xl px-6 py-4 absolute z-10 w-full right-0 transition-all duration-300 shadow-lg ${open ? "top-28 opacity-100" : "top-[-300px] opacity-0"
          }`}
      >
        <ul className="flex flex-col gap-6">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                target={item.target || "_self"}
                rel={item.rel || ""}
                className="cursor-pointer hover:text-green-600"
                onClick={() => setOpen(false)} // auto-close menu on click
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
