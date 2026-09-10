import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "./source/Image";
import logoSrc from "../../imports/sri_bharath_builders_navy_logo.png";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Journey", id: "journey" },
  { label: "Expertise", id: "expertise" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#162b49] ${scrolled ? "bg-[#162b49]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20" : "border-b border-white/5"}`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14 flex items-center justify-between h-20">
        <button onClick={() => scrollTo("home")} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }} className="flex items-center">
          <ImageWithFallback src={logoSrc} alt="Sri Bharath Builders logo" className="h-14 w-auto object-contain" />
        </button>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => scrollTo(link.id)}
              className="text-white/70 hover:text-white transition-colors duration-200 relative group"
              style={{ fontSize: "0.78rem", letterSpacing: "0.12em", fontFamily: "DM Sans, sans-serif", fontWeight: 500, background: "none", border: "none", cursor: "pointer" }}>
              {link.label.toUpperCase()}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        <div className="hidden lg:block">
          <a href="https://wa.me/919110328998" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white px-5 py-2.5 transition-all duration-200"
            style={{ fontSize: "0.72rem", letterSpacing: "0.12em", fontFamily: "DM Sans, sans-serif", fontWeight: 600, borderRadius: "2px" }}>
            <MessageCircle className="w-4 h-4" />
            WHATSAPP
          </a>
        </div>

        <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#162b49] border-t border-white/10 px-6 py-5 flex flex-col gap-5 shadow-2xl">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => scrollTo(link.id)}
              className="text-white/75 hover:text-white text-left transition-colors"
              style={{ fontSize: "0.85rem", letterSpacing: "0.1em", fontFamily: "DM Sans, sans-serif", fontWeight: 500, background: "none", border: "none", cursor: "pointer" }}>
              {link.label.toUpperCase()}
            </button>
          ))}
          <a href="https://wa.me/919110328998" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 w-fit"
            style={{ fontSize: "0.72rem", letterSpacing: "0.12em", fontFamily: "DM Sans, sans-serif", fontWeight: 600, borderRadius: "2px" }}>
            <MessageCircle className="w-4 h-4" />
            WHATSAPP
          </a>
        </div>
      )}
    </nav>
  );
}
