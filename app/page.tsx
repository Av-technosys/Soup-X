import BusinessVerticals from "@/src/components/BusinessVerticals";
import Categories from "@/src/components/Categories";
import Footer from "@/src/components/Footer";
import Hero from "@/src/components/Hero";
import Media from "@/src/components/media";
import TestimonialSection from "@/src/components/testimonials";
import TetraPack from "@/src/components/TetraPack";

export default function Home() {
  return (
    <div className=" ">
      <Hero />
      <Categories />
      <BusinessVerticals />
      <TetraPack />
      <Media />
      <TestimonialSection />
      {/* <Footer /> */}
    </div>
  );
}
