import aboutImg from "../../imports/tatva_02.jpg";

export function About() {
  return (
    <section id="about" className="bg-white py-28 lg:py-36">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square max-w-md relative overflow-hidden bg-[#163A70]" style={{ borderRadius: "2px" }}>
              <img src={aboutImg} alt="Architecture and Interiors" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#163A70]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <div className="text-white/90" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: "0.7rem", letterSpacing: "0.25em" }}>
                  ARCHITECTURE & EXTERIORS
                </div>
              </div>
              <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-xs border border-white/30" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-[#163A70]/20 pointer-events-none" style={{ borderRadius: "2px" }} />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#163A70]" />
              <span className="text-[#163A70]" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", fontFamily: "DM Sans, sans-serif", fontWeight: 500 }}>ABOUT US</span>
            </div>
            <h2 className="text-black mb-8"
              style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900, fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", lineHeight: 1.0, letterSpacing: "-0.02em" }}>
              Designing the<br />Modern Skyline
            </h2>
            <div className="space-y-5 text-black/50" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.95rem", lineHeight: 1.9 }}>
              <p>Sri Bharat Builders was founded in 1989 with a vision to build Nellore with integrity and strength. For over 35 years, the firm has been a trusted name in construction, known for delivering projects that stand as a testament to structural excellence and local trust.</p>
              <p>The firm continues to evolve, merging its deep-rooted construction expertise with modern architectural innovation — growing into a full-service architectural and design firm.</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {["Nellore", "Vijayawada", "Hyderabad", "Bengaluru"].map((city) => (
                <span key={city} className="border border-[#163A70]/20 text-[#163A70]/60 px-4 py-1.5"
                  style={{ fontSize: "0.68rem", letterSpacing: "0.15em", fontFamily: "DM Sans, sans-serif", fontWeight: 500, borderRadius: "2px" }}>
                  📍 {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
