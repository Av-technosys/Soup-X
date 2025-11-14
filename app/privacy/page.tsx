"use client";

export default function PrivacyPolicy() {
  return (
    <section className="w-full pt-32 pb-20 px-6 text-gray-800">
      <div className="max-w-[1400px] mx-auto">
        <h1
          className="text-5xl font-bold mb-6"
          style={{ fontFamily: "Poppins" }}
        >
          Privacy Policy
        </h1>

        <p
          className="text-xl text-gray-600 leading-relaxed max-w-4xl"
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          At SoupX, we value your privacy and are committed to protecting your
          personal information. This policy outlines how we collect, use, and
          safeguard your data.
        </p>

        <div
          className="mt-10 space-y-8 text-lg leading-relaxed"
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              1. Information We Collect
            </h2>
            <p>
              We may collect your name, contact number, email, location, and
              order details when using our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              2. How We Use Your Information
            </h2>
            <p>
              Your information is used to process orders, improve customer
              experience, and provide updates regarding SoupX services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">3. Data Protection</h2>
            <p>
              We use secure servers, encryption, and restricted access to ensure
              your personal information is protected.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">4. Cookies</h2>
            <p>
              Our website uses cookies to enhance the browsing experience and
              personalize content.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              5. Third-Party Sharing
            </h2>
            <p>
              SoupX does not sell your personal information. We only share data
              with trusted partners for order fulfilment and support services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">6. Contact Us</h2>
            <p>
              For privacy-related queries, email us at:{" "}
              <strong>contact@soupx.co.in</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
