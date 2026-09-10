const steps = [
  { num: "01", title: "Initial Consultation", desc: "We begin with a detailed brief — understanding your vision, budget, lifestyle, and timeline before anything else." },
  { num: "02", title: "Site Visit & Survey", desc: "Our team visits the site to assess topography, orientation, existing structures, and contextual constraints." },
  { num: "03", title: "Architectural Design", desc: "Concept drawings evolve into complete architectural plans, elevations, and 3D renders for your review and approval." },
  { num: "04", title: "Cost Estimation", desc: "A transparent, itemized cost estimate is prepared — no hidden charges, no last-minute surprises." },
  { num: "05", title: "Construction Execution", desc: "Our site engineers manage vendors, materials, and structural quality with weekly progress updates to the client." },
  { num: "06", title: "Handover & Support", desc: "Final inspections, walkthrough, documentation, and post-handover support for 12 months." },
];

export function Process() {
  return (
    <section className="bg-white py-28 lg:py-36 border-t border-black/6">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4"><div className="w-8 h-px bg-[#163A70]" /><span className="text-[#163A70]" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", fontFamily: "DM Sans, sans-serif", fontWeight: 500 }}>HOW WE WORK</span></div>
            <h2 className="text-black" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900, fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1.0, letterSpacing: "-0.02em" }}>Our process.</h2>
          </div>
          <span className="text-black/20 hidden lg:block" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", letterSpacing: "0.1em" }}>6 STEPS · CONSULTATION TO HANDOVER</span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-black/8">
          {steps.map((s) => (
            <div key={s.num} className="border-b border-r border-black/8 p-8 group hover:bg-[#f8f8f8] transition-colors duration-200">
              <div className="flex items-start justify-between mb-5">
                <span className="text-[#163A70]" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "2rem", lineHeight: 1 }}>{s.num}</span>
                <div className="w-4 h-px bg-black/10 mt-4" />
              </div>
              <h3 className="text-black mb-3" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: "1rem", lineHeight: 1.3 }}>{s.title}</h3>
              <p className="text-black/40" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.83rem", lineHeight: 1.85 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
