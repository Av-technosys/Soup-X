import BusinessVerticals from "@/src/components/BusinessVerticals";
import Categories from "@/src/components/Categories";
import Hero from "@/src/components/Hero";
import Media from "@/src/components/media";
import TestimonialSection from "@/src/components/testimonials";
import TetraPack from "@/src/components/TetraPack";

export const metadata = {
  title: "SoupX – India’s 1st Healthy Soup & Wellness Food Brand",
  description:
    "SoupX is a wellness-focused healthy food brand delivering nutritious soups & meal solutions for hospitals, corporates, campuses & QSRs across India. Call us.",
};

export default function Home() {
  return (
    <div className=" ">
      <Hero />
      <Categories />
      <BusinessVerticals />
      <TetraPack />
      <Media />
      <TestimonialSection />
    </div>
  );
}
