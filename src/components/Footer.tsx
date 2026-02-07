
"use client";

import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus("error");
        setMessage(data?.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("Thanks! We will be in touch soon.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <footer className="w-full bg-[#022D1B] text-white pt-24">
      <div className="w-full mx-auto relative">

        {/* TOP CTA SECTION */}
        <div className="text-center px-4">
          <p
            className="text-4xl md:text-8xl font-semibold leading-tight"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            Subscribe To Our <br /> Newsletter
          </p>

          <p
            className="text-gray-300 mt-4 font-normal text-2xl"
            style={{ fontFamily: "Poppins" }}
          >
            To make your stay special and even more memorable
          </p>

          <button
            className="mt-8 px-10 py-3 bg-white text-black rounded-full font-normal text-xl hover:bg-gray-100 transition"
            style={{ fontFamily: "Poppins" }}
            onClick={() => setIsOpen(true)}
          >
            Subscribe Now
          </button>
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="w-full max-w-md rounded-2xl bg-white p-6 text-black"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-2xl font-semibold" style={{ fontFamily: "Plus Jakarta Sans" }}>
                    Newsletter Signup
                  </p>
                  <p className="text-gray-600 mt-1" style={{ fontFamily: "Poppins" }}>
                    Get updates and offers in your inbox.
                  </p>
                </div>
                <button
                  className="text-gray-500 hover:text-gray-800"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700" htmlFor="newsletter-email">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#022D1B]/40"
                    placeholder="you@example.com"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-full bg-[#022D1B] px-6 py-3 text-white text-lg font-medium hover:bg-[#034E2B] transition disabled:opacity-60"
                  style={{ fontFamily: "Poppins" }}
                >
                  {status === "loading" ? "Submitting..." : "Submit"}
                </button>

                {message && (
                  <p
                    className={status === "error" ? "text-red-600 text-sm" : "text-green-700 text-sm"}
                    style={{ fontFamily: "Poppins" }}
                  >
                    {message}
                  </p>
                )}
              </form>
            </div>
          </div>
        )}

        {/* Divider */}
        <div className="w-full border-t border-gray-600 mt-20"></div>

        {/* FOOTER GRID */}
        <div className="text-black py-10 bg-white grid grid-cols-1 md:grid-cols-4 gap-10 px-4 md:px-20">

          {/* Column 1 */}
          <div>
            <p className="text-2xl font-normal mb-4" style={{ fontFamily: "Poppins" }}>
              Company
            </p>
            <ul className="space-y-3 font-normal text-xl" style={{ fontFamily: "Poppins" }}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/#solution">Solutions</Link></li>
              <li><Link href="/#testimonial">Testimonial</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li>
                <a href="https://franchiseready.in/soupx" target="_blank">
                  Apply for Franchise
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <p className="text-2xl font-normal mb-4" style={{ fontFamily: "Poppins" }}>
              Terms & Policies
            </p>
            <ul className="space-y-3 font-normal text-xl" style={{ fontFamily: "Poppins" }}>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms & Conditions</Link></li>
              <li>
                <a href="/soupX.pdf" target="_blank" rel="noopener noreferrer">
                  Brochure
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <p className="text-2xl font-normal mb-4" style={{ fontFamily: "Poppins" }}>
              Follow Us
            </p>
            <ul className="space-y-3 font-normal text-xl" style={{ fontFamily: "Poppins" }}>
              <li><a href="https://www.instagram.com/soupxindia/">Instagram</a></li>
              <li><a href="https://in.linkedin.com/company/soupx-sip-of-health">LinkedIn</a></li>
              <li><a href="https://www.facebook.com/soupxindia/">Facebook</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <p className="text-2xl font-normal mb-4" style={{ fontFamily: "Poppins" }}>
              Contact Us
            </p>
            <ul className="space-y-3 font-normal text-xl" style={{ fontFamily: "Poppins" }}>
              <li>
                MercuryRise Hospitality Pvt. Ltd. Sector 73, Noida, UP-201307.
              </li>
              <li><a href="tel:+919996668387">(+91) 9996668387</a></li>
              <li><a href="mailto:contact@soupx.co.in">contact@soupx.co.in</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
