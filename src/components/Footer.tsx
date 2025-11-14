export default function Footer() {
  return (
    <footer className="w-full  bg-[#022D1B] text-white pt-24 pb-10">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative">
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

          {/* Subscribe Button */}
          <a href="/contact">
            <button
              className="mt-8 px-10 py-3 bg-white text-black rounded-full font-normal text-xl hover:bg-gray-100 transition"
              style={{ fontFamily: "Poppins" }}
            >
              Subscribe Now
            </button>
          </a>
        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-gray-600 mt-20"></div>

        {/* FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16 px-4 md:px-20">
          {/* Column 1 */}
          <div>
            <h3
              className="text-2xl font-normal mb-4"
              style={{ fontFamily: "Poppins" }}
            >
              Company
            </h3>
            <ul
              className="space-y-3 font-normal text-xl text-gray-300"
              style={{ fontFamily: "Poppins" }}
            >
              <li>Home</li>
              <li>Studio</li>
              <li>Service</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3
              className="text-2xl font-normal mb-4"
              style={{ fontFamily: "Poppins" }}
            >
              Terms & Policies
            </h3>
            <ul
              className="space-y-3 font-normal text-xl text-gray-300"
              style={{ fontFamily: "Poppins" }}
            >
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Explore</li>
              <li>Accesibility</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3
              className="text-2xl font-normal mb-4"
              style={{ fontFamily: "Poppins" }}
            >
              Follow Us
            </h3>
            <ul
              className="space-y-3 font-normal text-xl text-gray-300"
              style={{ fontFamily: "Poppins" }}
            >
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Youtube</li>
              <li>Twitter</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3
              className="text-2xl font-normal mb-4"
              style={{ fontFamily: "Poppins" }}
            >
              Terms & Policies
            </h3>
            <ul
              className="space-y-3 font-normal text-xl text-gray-300"
              style={{ fontFamily: "Poppins" }}
            >
              <li>
                1498w Fluton ste, STE <br /> 2D Chicgo, IL 63867.
              </li>
              <li>(123) 456789000</li>
              <li>info@elementum.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
