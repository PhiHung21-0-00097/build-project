import Header from "@/src/app/components/Header";
import Features from "@/src/app/components/Features";
import Hero from "@/src/app/components/Hero";
import Illustration from "@/src/app/components/Illustration";
import Zigzag from "@/src/app/components/Zigzag";
import Testimonials from "@/src/app/components/Testimonials";
import Blocks from "@/src/app/components/Blocks";
import Footer from "@/src/app/components/Footer";
import { Newsletter } from "@/src/app/components/NewLetter";
import Map from "@/src/app/components/Map";
import FacebookChatPlugin from "@/src/app/components/FacebookChat";
export default function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <Features />
        <Zigzag />
        <Testimonials />
        <Blocks />
        <Illustration />
        <Newsletter />
        <FacebookChatPlugin />
        <Map />
        <Footer />
      </div>
    </>
  );
}
