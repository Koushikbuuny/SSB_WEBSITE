import { useState } from "react";

const projects = [
  { num: "5", title: "Modern Farm House", type: "Residential", location: "Nellore, AP", concept: "A 3BHK residential Farm house with indoor swimming pool", area: "45 ankanams", status: "Site Execution", image: "https://images.unsplash.com/photo-1626249893783-cc4a9f66880a?w=1000&h=700&fit=crop&auto=format" },
  { num: "4", title: "Personal Office Interiors", type: "Commercial Interiors", location: "Nellore, AP", concept: "Modern Interiors", area: "2,400 sq ft", status: "Site Execution", image: "https://images.unsplash.com/photo-1715593949273-09009558300a?w=900&h=600&fit=crop&auto=format" },
  { num: "3", title: "3BHK Interiors", type: "Residential Interiors", location: "Nellore, AP", concept: "Contemporary Minimal Interiors", area: "1,800 sq ft", status: "Site Execution", image: "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?w=900&h=600&fit=crop&auto=format" },
  { num: "2", title: "Luxury Villa", type: "Residential", location: "Vijayawada, AP", concept: "Contemporary architecture with open-plan living", area: "60 ankanams", status: "Completed", image: "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?w=900&h=600&fit=crop&auto=format" },
  { num: "1", title: "Heritage Residence", type: "Residential", location: "Nellore, AP", concept: "Indian contemporary style with traditional elements", area: "80 ankanams", status: "Completed", image: "https://images.unsplash.com/photo-1607567618395-62fc2d132c3e?w=900&h=600&fit=crop&auto=format" },
];

export function Projects() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="projects" className="bg-white py-28 lg:py-36">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4"><div className="w-8 h-px bg-[#c8a96e]" /><span className="text-[#c8a96e]" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", fontFamily: "DM Sans, sans-serif", fontWeight: 500 }}>PORTFOLIO</span></div>
            <h2 className="text-black" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900, fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 0.95, letterSpacing: "-0.02em" }}>Featured<br />Projects.</h2>
          </div>
          <div className="text-black/20 hidden lg:block" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", letterSpacing: "0.1em" }}>ALL PROJECTS · IN EXECUTION & COMPLETED</div>
        </div>

        <div className="space-y-0 border-t border-black/8">
          {projects.map((p, i) => (
            <div key={p.num} className="group border-b border-black/8 cursor-pointer" onClick={() => setActive(active === i ? null : i)}>
              <div className="flex items-center justify-between py-6 gap-6">
                <div className="flex items-center gap-6 min-w-0">
                  <span className="text-[#c8a96e]/40 flex-shrink-0" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1rem" }}>/{p.num}</span>
                  <span className="text-black group-hover:text-[#c8a96e] transition-colors duration-200 truncate"
                    style={{ fontFamily: "DM Sans, sans-serif", fontSize: "clamp(1.1rem, 2.5vw, 1.8rem)", letterSpacing: "-0.01em" }}>{p.title}</span>
                </div>
                <div className="hidden md:flex items-center gap-8 flex-shrink-0">
                  <span className="text-black/30" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", letterSpacing: "0.1em" }}>{p.type.toUpperCase()}</span>
                  <span className={`px-3 py-1 border text-[0.65rem] tracking-widest font-semibold ${p.status === "Completed" ? "border-[#c8a96e]/30 text-[#c8a96e]/60" : "border-black/15 text-black/40"}`}
                    style={{ fontFamily: "DM Sans, sans-serif", borderRadius: "2px" }}>{p.status.toUpperCase()}</span>
                  <span className="text-black/25" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.8rem" }}>{active === i ? "−" : "+"}</span>
                </div>
              </div>
              {active === i && (
                <div className="pb-10 grid lg:grid-cols-3 gap-8">
                  <div className="space-y-5">
                    {[{ label: "LOCATION", val: p.location }, { label: "CONCEPT", val: p.concept }, { label: "AREA", val: p.area }].map((item) => (
                      <div key={item.label}>
                        <div className="text-black/20 mb-1" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em" }}>{item.label}</div>
                        <div className="text-black/55" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem", lineHeight: 1.6 }}>{item.val}</div>
                      </div>
                    ))}
                    <div>
                      <div className="text-black/20 mb-1" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em" }}>STATUS</div>
                      <div className="text-[#c8a96e]" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem" }}>{p.status}</div>
                    </div>
                  </div>
                  <div className="lg:col-span-2 overflow-hidden rounded-sm bg-gray-100">
                    <img src={p.image} alt={p.title} className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
