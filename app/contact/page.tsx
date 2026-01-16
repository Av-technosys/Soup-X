export const metadata = {
  title: "Contact SoupX | Healthy Food Soups & Wellness Solutions",
  description:
    "Get in touch with SoupX for partnerships, B2B supply, franchise, media & investor inquiries. Contact via email or phone for healthy food & wellness meals.",
  alternates: {
    canonical: "https://www.soupx.health/contact/",
  },
};

import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <section className="min-h-screen w-full mt-4 px-6 md:px-20 py-24">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-semibold">Contact Us</h1>
        <p className="s mt-4 text-lg max-w-2xl mx-auto">
          For partnerships, franchise, B2B supply, media, or investor communication.
        </p>
      </div>

      {/* Contact Form */}
      <ContactForm />

      {/* Info section */}
      <div className="text-center mt-16 ">
        <p>Or reach us directly at:</p>
        <a className="text-lg font-medium" href="mailto:contact@soupx.co.in">
          contact@soupx.co.in
        </a>
        <p className="text-lg font-medium">
          {" "}
          <a href="tel:+919996668387">(+91) 9996668387</a>
        </p>
      </div>
    </section>
  );
}
