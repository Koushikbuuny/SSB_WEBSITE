import { ImageWithFallback } from "./source/Image";
import historyImg from "../../imports/tv_unit_interior.jpg";

export function History() {
  return (
    <section id="journey" className="bg-white">
      <div className="bg-white pt-28 pb-16 px-6 lg:px-14 max-w-[1440px] mx-auto">
        <div className="flex items-start justify-between">
          <h2 className="text-black"
            style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900, fontSize: "clamp(4rem, 10vw, 9rem)", lineHeight: 0.9, letterSpacing: "-0.03em" }}>
            THE<br />JOURNEY
          </h2>
          <div className="border border-black/30 px-3 py-1.5 text-black mt-2"
            style={{ fontSize: "0.75rem", letterSpacing: "0.15em", fontFamily: "DM Sans, sans-serif", fontWeight: 500 }}>
            1 9 8 9
          </div>
        </div>
        <div className="border-t border-black/10 mt-12" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-14 pb-28 grid lg:grid-cols-2 gap-16 items-start">
        <div className="relative overflow-hidden bg-[#163A70] aspect-[4/3]" style={{ borderRadius: "2px" }}>
          <img src={historyImg} alt="Architecture and Interiors" className="w-full h-full object-cover object-[center_35%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#163A70]/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <div className="text-white/90" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: "0.7rem", letterSpacing: "0.25em" }}>
              ARCHITECTURE & INTERIORS
            </div>
          </div>
          <div className="absolute top-5 right-5 w-8 h-8 bg-white/20 backdrop-blur-xs border border-white/30" />
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-black mb-4" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900, fontSize: "1.6rem", letterSpacing: "-0.01em" }}>
              The Foundation
            </h3>
            <p className="text-black/50" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem", lineHeight: 1.9 }}>
              In 1989, Sri Bharath Reddy laid the cornerstone of Sri Bharath Builders in Nellore with a clear vision: to shape the region's future with structures built on integrity, strength, and unwavering quality. For over three decades, the firm has been a pillar of the community, creating projects that stand as benchmarks of excellence and reliability. From our roots in Nellore, we have grown with purpose, driven by a commitment to precision, trust, and lasting impact. As we look back on our journey, we are proud of the legacy we have built—one that continues to inspire and shape the skylines of tomorrow.
            </p>
          </div>
          <div className="border-t border-black/8 pt-10">
            <h3 className="text-black mb-4" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900, fontSize: "1.6rem", letterSpacing: "-0.01em" }}>
              The New Vision Today
            </h3>
            <p className="text-black/50" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem", lineHeight: 1.9 }}>
              The firm enters a new era. As the second generation, we have returned to Nellore to merge our family's deep-rooted construction expertise with modern architectural innovation, transforming Sri Bharath Builders into a full-service architectural and design firm.
            </p>
          </div>
          <div className="border-t border-black/8 pt-10 space-y-6">
            {[
              { year: "1989", event: "Founded in Nellore, Andhra Pradesh" },
              { year: "2000", event: "Expanded to residential & commercial projects" },
              { year: "2010", event: "50+ projects milestone achieved" },
              { year: "2020", event: "Second generation joins new vision era begins" },
              { year: "2024", event: "100+ projects across 4 major cities" },
            ].map((m) => (
              <div key={m.year} className="flex items-start gap-5">
                <div className="flex-shrink-0 text-[#163A70] w-14" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.85rem", letterSpacing: "0.05em" }}>{m.year}</div>
                <div className="flex-1 flex items-start gap-4">
                  <div className="w-px bg-black/10 mt-1.5 flex-shrink-0" style={{ minHeight: "20px" }} />
                  <span className="text-black/50" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.88rem" }}>{m.event}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
