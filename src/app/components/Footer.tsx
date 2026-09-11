import { ImageWithFallback } from "./source/Image";
import logoSrc from "../../imports/sri_bharath_builders_navy_logo.png";

const quickLinks = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Our Journey", id: "journey" },
  { label: "Expertise", id: "expertise" },

  { label: "Contact", id: "contact" },
];

const services = [
  "Architectural Design",
  "Interior Architecture",
  "Landscape Design",
  "Turnkey Construction",
  "Site Management",
  "Renovation & Remodeling",
];

export function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-[#162b49] text-white border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <ImageWithFallback src={logoSrc} alt="Sri Bharath Builders" className="h-14 w-auto object-contain mb-5" />
          <div className="text-white mb-2" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.80rem", letterSpacing: "0.03em" }}>

          </div>
          <div className="text-white/40 mb-5" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem" }}>
            Architecture · Interiors · Construction
          </div>
          <p className="text-white/60" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.8rem", lineHeight: 1.8 }}>
            Trusted since 1989. Building Nellore and beyond with integrity, craft, and vision.
          </p>
        </div>

        <div>
          <div className="text-white/40 uppercase mb-5" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: "0.62rem", letterSpacing: "0.2em" }}>Quick Links</div>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.id}>
                <button onClick={() => scrollTo(l.id)} className="text-white/60 hover:text-white transition-colors text-left"
                  style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.85rem", background: "none", border: "none", cursor: "pointer" }}>
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-white/40 uppercase mb-5" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: "0.62rem", letterSpacing: "0.2em" }}>Services</div>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s} className="text-white/60" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.85rem" }}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-white/40 uppercase mb-5" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: "0.62rem", letterSpacing: "0.2em" }}>Contact</div>
          <div className="space-y-4 text-white/60" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.82rem", lineHeight: 1.7 }}>
            <div>+91 9110328998<br />+91 7337375664<br />+91 8500166495</div>
            <div>sribharathbuilders1989@gmail.com</div>
            <div>Ramesh Reddy Nagar<br />Nellore, AP 524003</div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-14 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-white/40" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem" }}>
            © 2026 Sri Bharat Builders. All Rights Reserved.
          </div>
          <div className="text-white/30" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em" }}>
            NELLORE
          </div>
        </div>
      </div>
    </footer>
  );
}

