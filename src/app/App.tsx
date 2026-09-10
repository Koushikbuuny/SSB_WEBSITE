import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { History } from "./components/History";
import { Stats } from "./components/Stats";
import { Expertise } from "./components/Expertise";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { FounderMessage } from "./components/FounderMessage";
import { Contact } from "./components/Contact";
import { SocialMedia } from "./components/SocialMedia";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "DM Sans, sans-serif" }}>
      <Navbar />
      <Hero />
      <About />
      <History />
      <Stats />
      <Expertise />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FounderMessage />
      <Contact />
      <SocialMedia />
      <Footer />
    </div>
  );
}
