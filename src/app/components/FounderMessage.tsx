import founderImg from "../../imports/deer_sculpture.jpg";

const locations = [
  "Nellore", "Vijayawada", "Hyderabad", "Bengaluru",
  "Guntur", "Tirupati", "Ongole", "Kurnool",
];

export function FounderMessage() {
  return (
    <section className="bg-white py-28 lg:py-36 border-t border-black/6">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <div className="flex items-center gap-3 mb-8"><div className="w-8 h-px bg-[#163A70]" /><span className="text-[#163A70]" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", fontFamily: "DM Sans, sans-serif", fontWeight: 500 }}>FROM THE FOUNDERS</span></div>
            <blockquote className="text-black" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900, fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", lineHeight: 1.25, letterSpacing: "-0.015em" }}>
              "A building is not merely a structure - it is an expression of trust between the builder and those who will live within it. That trust is our foundation."
            </blockquote>
            <div className="mt-10 border-t border-black/8 pt-8">
              <p className="text-black/45" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.88rem", lineHeight: 1.9, maxWidth: "480px" }}>
                Founded in 1989 by our father, Sri Bharath Builders has stood on a single promise: deliver every project with the care you would give your own home. We are proud to carry that philosophy forward into a new era of architecture and design.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-8 h-px bg-[#163A70]/30" />
                <span className="text-black/35" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: "0.75rem", letterSpacing: "0.12em" }}>SRI BHARATH BUILDERS · EST. 1989</span>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden bg-[#163A70] aspect-[4/3]" style={{ borderRadius: "2px" }}>
            <img src={founderImg} alt="Architecture and Construction" className="w-full h-full object-cover object-[center_40%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#163A70]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 text-center left-0 right-0">
              <div className="text-white/90" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: "0.7rem", letterSpacing: "0.25em" }}>
                ARCHITECTURE & CONSTRUCTION
              </div>
            </div>
            <div className="absolute top-5 right-5 w-7 h-7 bg-white/20 backdrop-blur-xs border border-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
