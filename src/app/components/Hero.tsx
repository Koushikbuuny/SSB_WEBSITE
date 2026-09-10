import heroBuildingImg from "../../imports/hero_building.jpg";

export function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen bg-white flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] bg-cover bg-[center_top]"
          style={{ backgroundImage: `url(${heroBuildingImg})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
      </div>

      <div className="absolute top-24 right-8 border border-black/30 px-3 py-1.5 text-black"
        style={{ fontSize: "0.75rem", letterSpacing: "0.15em", fontFamily: "DM Sans, sans-serif", fontWeight: 500 }}>
        2 0 2 6
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-14 w-full pb-24 pt-40">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-[#163A70]" />
          <span className="text-[#163A70]" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", fontFamily: "DM Sans, sans-serif", fontWeight: 500 }}>
            ARCHITECTURE & INTERIORS · SINCE 1989
          </span>
        </div>

        <h1 className="text-[#163A70] mb-6"
          style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900, fontSize: "clamp(3.5rem, 5.75vw, 7.5rem)", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
          Sri Bharath<br /><span style={{ color: "#163A70" }}>Builders</span>
        </h1>

        <div className="max-w-lg mb-10">
          <p className="text-black/60 mb-2" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: "1rem", letterSpacing: "0.02em" }}>
            Legacy of Trust. Vision for the Future.
          </p>
          <p className="text-black/45" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem", lineHeight: 1.8 }}>
            Since 1989, Sri Bharath Builders has been a cornerstone of Nellore's development.
            Today, we combine decades of construction expertise with next generation architectural innovation.
          </p>
          <p className="text-black/30 mt-3" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.82rem", letterSpacing: "0.05em" }}>
            Operating in Nellore
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <button onClick={() => scrollTo("expertise")}
            className="bg-[#163A70] text-white hover:bg-[#1e4a8a] px-8 py-4 transition-all duration-200"
            style={{ fontSize: "0.72rem", letterSpacing: "0.15em", fontFamily: "DM Sans, sans-serif", fontWeight: 700, borderRadius: "2px" }}>
            OUR EXPERTISE
          </button>
          <button onClick={() => scrollTo("contact")}
            className="border border-black/30 hover:border-[#163A70] text-black/60 hover:text-[#163A70] px-8 py-4 transition-all duration-200"
            style={{ fontSize: "0.72rem", letterSpacing: "0.15em", fontFamily: "DM Sans, sans-serif", fontWeight: 600, borderRadius: "2px", background: "transparent" }}>
            CONTACT US
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-black/8">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-14 py-5 grid grid-cols-2 divide-x divide-black/8">
          {[{ v: "35+", l: "Years of Excellence" }, { v: "100+", l: "Projects Delivered" }].map((s) => (
            <div key={s.l} className="text-center px-6">
              <div className="text-[#163A70]" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1.8rem", lineHeight: 1 }}>{s.v}</div>
              <div className="text-black/30 mt-1" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem", letterSpacing: "0.08em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
