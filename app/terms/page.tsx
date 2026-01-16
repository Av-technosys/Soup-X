export const metadata = {
  title: "SoupX Terms & Conditions | Healthy Soup Food Brand",
  description:
    "Read SoupX's terms and conditions governing the use of our website, food soups, orders, payments, refunds, and user responsibilities for a safe experience.",
  alternates: {
    canonical: "https://www.soupx.health/terms/",
  },
};

export default function Terms() {
  return (
    <section className="w-full pt-32 pb-20 px-6 text-gray-800">
      <div className="max-w-[1400px] mx-auto">
        <h1
          className="text-5xl font-bold mb-6"
          style={{ fontFamily: "Poppins" }}
        >
          Terms & Conditions
        </h1>

        <p
          className="text-xl text-gray-600 leading-relaxed max-w-4xl"
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          Welcome to SoupX. By accessing or using our website, services, or
          products, you agree to comply with the following terms and conditions.
          Please read them carefully.
        </p>

        <div
          className="mt-10 space-y-8 text-lg leading-relaxed"
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
            <p>
              These terms govern your use of SoupX’s services, including online
              ordering, subscriptions, and our website content.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              2. Eligibility & Responsibility
            </h2>
            <p>
              You must be at least 18 years old to make purchases from SoupX.
              You are responsible for maintaining the confidentiality of your
              login information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              3. Pricing & Payment
            </h2>
            <p>
              All prices displayed are final and inclusive of applicable taxes.
              Payment must be completed before order processing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">4. Refund Policy</h2>
            <p>
              Due to the nature of food products, we do not provide refunds
              unless the product is damaged or incorrect.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              5. Service Availability
            </h2>
            <p>
              SoupX reserves the right to modify, suspend, or discontinue any
              service at any time without notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">6. Contact Us</h2>
            <p>
              For any concerns, contact us at:{" "}
              <strong>contact@soupx.co.in</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
