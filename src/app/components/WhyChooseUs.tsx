const reasons = [
  { num: "01", title: "35+ Years of Experience", desc: "Over three decades of trusted construction in Nellore and beyond. Our legacy speaks through every wall, every roof, every finished home." },
  { num: "02", title: "100+ Projects Delivered", desc: "Residential villas, commercial complexes, 3BHK interiors — our portfolio spans diverse typologies, all delivered to the highest standards." },
  { num: "03", title: "Trusted Across 4 Cities", desc: "Operating across Nellore, Vijayawada, Hyderabad, and Bengaluru with a consistent reputation for quality and integrity." },
  { num: "04", title: "End-to-End Design + Construction", desc: "From initial concept and architectural drawings to final site handover — we handle every step in-house for total design coherence." },
  { num: "05", title: "Quality & On-Time Delivery", desc: "Strict project timelines and transparent cost structures. We've maintained a 96% on-time delivery rate across all our major projects." },
  { num: "06", title: "Second-Generation Innovation", desc: "A legacy firm entering a new era — combining 35 years of construction expertise with modern architectural design thinking." },
];

export function WhyChooseUs() {
  return (
    <section className="bg-[#f0f0f0] py-28 lg:py-36 border-t border-black/6">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="flex items-center gap-3 mb-6"><div className="w-8 h-px bg-[#163A70]" /><span className="text-[#163A70]" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", fontFamily: "DM Sans, sans-serif", fontWeight: 500 }}>WHY CHOOSE US</span></div>
        <h2 className="text-black mb-16" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900, fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1.0, letterSpacing: "-0.02em" }}>
          What sets us<br />apart.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-black/8">
          {reasons.map((r) => (
            <div key={r.num} className="group border-b border-r border-black/8 p-8 hover:bg-black/2 transition-colors duration-300">
              <div className="text-black/10 mb-5 group-hover:text-[#163A70]/30 transition-colors" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "2.5rem", lineHeight: 1 }}>{r.num}</div>
              <h3 className="text-black mb-4" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: "1rem", lineHeight: 1.3 }}>{r.title}</h3>
              <p className="text-black/45" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.83rem", lineHeight: 1.8 }}>{r.desc}</p>
              <div className="mt-6 w-5 h-px bg-[#163A70]/30 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
