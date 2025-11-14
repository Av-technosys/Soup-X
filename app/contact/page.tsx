"use client";

export default function ContactPage() {
  return (
    <section className="min-h-screen w-full mt-4 px-6 md:px-20 py-24">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-semibold">Contact Us</h1>
        <p className="s mt-4 text-lg max-w-2xl mx-auto">
          Have questions? Want to collaborate? We&apos;re here to help and would
          love to hear from you.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-[#033624] rounded-2xl p-10 shadow-xl border border-gray-700">
        <form
          className="space-y-8"
          onSubmit={async (e) => {
            e.preventDefault();

            const form = e.currentTarget;
            const formDataObj = new FormData(form);

            const data = {
              name: formDataObj.get("name"),
              email: formDataObj.get("email"),
              category: formDataObj.get("category"),
              message: formDataObj.get("message"),
            };

            const res = await fetch("/api/send-email", {
              method: "POST",
              body: JSON.stringify(data),
            });

            if (res.ok) {
              alert("Your message has been sent successfully!");
              form.reset();
            } else {
              alert("Something went wrong. Try again.");
            }
          }}
        >
          {/* Name */}
          <div>
            <label className="block text-gray-300 mb-2">Your Name</label>
            <input
              name="name"
              type="text"
              className="w-full px-5 py-3 rounded-lg bg-white text-black outline-none"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2">Email Address</label>
            <input
              name="email"
              type="email"
              className="w-full px-5 py-3 rounded-lg bg-white text-black outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* SERVICE TYPE DROPDOWN */}
          <div>
            <label className="block text-gray-300 mb-2">Select Category</label>
            <select
              name="category"
              className="w-full px-5 py-3 rounded-lg bg-white text-black outline-none cursor-pointer"
              required
            >
              <option value="">Choose an option</option>
              <option value="b2b">B2B Enterprise Solutions</option>
              <option value="franchise">Franchise Network</option>
              <option value="consumer">Direct to Consumer</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-300 mb-2">Your Message</label>
            <textarea
              name="message"
              className="w-full px-5 py-3 h-32 rounded-lg bg-white text-black outline-none resize-none"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-full hover:bg-yellow-300 transition"
          >
            Send Message
          </button>
        </form>
      </div>

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
