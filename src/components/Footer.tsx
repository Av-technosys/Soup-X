import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#022D1B] text-white pt-24">
      <div className="max-w-[1400px] mx-auto relative">

        {/* TOP CTA SECTION */}
        <div className="text-center px-4">
          <h2
            className="text-4xl md:text-8xl font-semibold leading-tight"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            Subscribe To Our <br /> Newsletter
          </h2>

          <p
            className="text-gray-300 mt-4 font-normal text-2xl"
            style={{ fontFamily: "Poppins" }}
          >
            To make your stay special and even more memorable
          </p>

          <Link href="/contact">
            <button
              className="mt-8 px-10 py-3 bg-white text-black rounded-full font-normal text-xl hover:bg-gray-100 transition"
              style={{ fontFamily: "Poppins" }}
            >
              Subscribe Now
            </button>
          </Link>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-600 mt-20"></div>

        {/* FOOTER GRID */}
        <div className="text-black py-10 bg-white grid grid-cols-1 md:grid-cols-4 gap-10 px-4 md:px-20">

          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-normal mb-4" style={{ fontFamily: "Poppins" }}>
              Company
            </h3>
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
            <h3 className="text-2xl font-normal mb-4" style={{ fontFamily: "Poppins" }}>
              Terms & Policies
            </h3>
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
            <h3 className="text-2xl font-normal mb-4" style={{ fontFamily: "Poppins" }}>
              Follow Us
            </h3>
            <ul className="space-y-3 font-normal text-xl" style={{ fontFamily: "Poppins" }}>
              <li><a href="https://www.instagram.com/soupxindia/">Instagram</a></li>
              <li><a href="https://in.linkedin.com/company/soupx-sip-of-health">LinkedIn</a></li>
              <li><a href="https://www.facebook.com/soupxindia/">Facebook</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-2xl font-normal mb-4" style={{ fontFamily: "Poppins" }}>
              Contact Us
            </h3>
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
