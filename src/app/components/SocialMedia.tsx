import { useState } from "react";
import { MessageCircle, Instagram, Linkedin } from "lucide-react";

const socials = [
  { icon: <Instagram className="w-5 h-5" />, name: "Instagram", handle: "@sri_bharath_builders_official", href: "https://www.instagram.com/sri_bharath_builders_official/" },
  { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", handle: "Sri Bharath Builders", href: "https://www.linkedin.com/in/sri-bharath-builders-1714b5426" },
  { icon: <MessageCircle className="w-5 h-5" />, name: "WhatsApp", handle: "+91 91103 28998", href: "https://wa.me/919110328998" },
];

function SocialCard({ s }: { s: typeof socials[0] }) {
  const [hover, setHover] = useState(false);

  const getBg = () => {
    if (!hover) return 'white';
    if (s.name === 'Instagram') return 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d, #f56040, #f77737, #fcaf45, #ffdc80)';
    if (s.name === 'LinkedIn') return '#0A66C2';
    if (s.name === 'WhatsApp') return '#25D366';
    return 'white';
  };

  return (
    <a 
      href={s.href} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="p-8 flex flex-col gap-5 transition-all duration-300 border border-black/5 hover:border-transparent"
      style={{ background: getBg() }}
    >
      <div className={`transition-colors duration-200 ${hover ? 'text-white' : 'text-black/35'}`}>{s.icon}</div>
      <div>
        <div className={`transition-colors duration-200 ${hover ? 'text-white' : 'text-black'}`} style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: "0.95rem" }}>{s.name}</div>
        <div className={`transition-colors duration-200 mt-1 ${hover ? 'text-white/80' : 'text-black/35'}`} style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.78rem" }}>{s.handle}</div>
      </div>
      <div className={`h-px transition-all duration-500 ${hover ? 'w-full bg-white/50' : 'w-4 bg-[#163A70]/25'}`} />
    </a>
  );
}

export function SocialMedia() {
  return (
    <section className="bg-[#f0f0f0] py-28 lg:py-36 border-t border-black/6">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="flex items-end justify-between mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4"><div className="w-8 h-px bg-[#163A70]" /><span className="text-[#163A70]" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", fontFamily: "DM Sans, sans-serif", fontWeight: 500 }}>SOCIAL CONNECT</span></div>
            <h2 className="text-black" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.0, letterSpacing: "-0.02em" }}>
              Follow our work
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {socials.map((s) => (
            <SocialCard key={s.name} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
