const testimonials = [
  { name: "Rajesh K.", role: "Homeowner, Nellore", quote: "Sri Bharath Builders brought our dream farmhouse to life with exceptional attention to detail. The team was honest about timelines and costs from day one — something rare in this industry.", rating: 5 },
  { name: "Priya & Anil M.", role: "Villa Owners, Vijayawada", quote: "We were nervous handing over a large project, but the site visits and weekly updates gave us complete confidence. The finish quality exceeded our expectations at every stage.", rating: 5 },
  { name: "Suresh D.", role: "Office Interior Client, Nellore", quote: "They transformed a plain commercial space into a modern, functional office that impresses every visitor. The design sensibility and execution were both world-class.", rating: 5 },
];

export function Testimonials() {
  return (
    <section className="bg-[#f0f0f0] py-28 lg:py-36 border-t border-black/6">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="flex items-center gap-3 mb-4"><div className="w-8 h-px bg-[#163A70]" /><span className="text-[#163A70]" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", fontFamily: "DM Sans, sans-serif", fontWeight: 500 }}>CLIENT TESTIMONIALS</span></div>
        <h2 className="text-black mb-16" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900, fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1.0, letterSpacing: "-0.02em" }}>
          What clients say.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white p-8" style={{ borderRadius: "2px" }}>
              <div className="flex gap-0.5 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-[#163A70]" style={{ borderRadius: "1px" }} />
                ))}
              </div>
              <p className="text-black/60 mb-8" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.88rem", lineHeight: 1.9, fontStyle: "italic" }}>
                "{t.quote}"
              </p>
              <div className="border-t border-black/8 pt-6">
                <div className="text-black" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: "0.88rem" }}>{t.name}</div>
                <div className="text-black/35 mt-1" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", letterSpacing: "0.05em" }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
