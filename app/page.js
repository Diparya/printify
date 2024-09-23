import DesignTools from "@/components/DesignTools";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MakeMoney from "@/components/MakeMoney";
import Navbar from "@/components/Navbar";
import Platforms from "@/components/Platforms";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <>
      <div className="bg-black">
        <Navbar />

        <Hero />

        <Features />

        <DesignTools />

        <Services />

        <Platforms />

        <Solutions />

        <Testimonials />

        <MakeMoney />

        <Footer />
      </div>
    </>
  );
}
