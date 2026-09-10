import expertiseImg from "../../imports/expertise_house.jpg";

const services = [
  { num: "1", title: "Architectural Design & Planning", desc: "We specialise in creating bespoke residential and commercial designs. From modern minimalist villas to our signature Indian contemporary-style farmhouses, we design with a focus on natural light, ventilation, and functional luxury.", focus: "Residential Design · Commercial Complexes · Heritage Revivals" },
  { num: "2", title: "Interior Architecture", desc: "Our expertise extends beyond the walls. We provide comprehensive interior design solutions that maximise space and reflect your personality, ensuring the inside of your home is as impressive as the outside.", focus: "Contemporary Minimal · Modern Luxury · Traditional Accents" },
  { num: "3", title: "Landscape Design", desc: "Our landscape design is rooted in functionality. In the climate, greenery is more than an ornament—it's a cooling mechanism. We specialise in creating outdoor spaces that integrate seamlessly with the built environment.", focus: "Residential Gardens · Commercial Landscapes · Rooftop Green Spaces" },
  { num: "4", title: "Turnkey Construction & Site Management", desc: "With a legacy in construction since 1989, our site engineering team ensures that the architectural vision is executed with technical precision. We manage vendors, site measurements, and structural integrity so you don't have to.", focus: "End-to-End Delivery · Project Management · Quality Control" },
];

export function Expertise() {
  return (
    <section id="expertise" className="bg-white py-28 lg:py-36">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="flex items-start justify-between mb-16">
          <h2 className="text-black" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900, fontSize: "clamp(2.8rem, 6vw, 5.5rem)", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
            Our expertise
          </h2>
          <div className="border border-black/20 px-3 py-1.5 text-black/40 mt-2 hidden lg:block"
            style={{ fontSize: "0.7rem", letterSpacing: "0.15em", fontFamily: "DM Sans, sans-serif", fontWeight: 500 }}>2 0 2 6</div>
        </div>

        <div className="w-full aspect-[16/6] md:aspect-[16/5] overflow-hidden mb-16 bg-gray-100 rounded-sm">
          <img src={expertiseImg}
            alt="Sri Bharath Builders architecture showcase" className="w-full h-full object-cover object-[center_40%]" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <div key={s.num} className="group">
              <div className="text-[#163A70] mb-4" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1.8rem", lineHeight: 1 }}>{s.num}.</div>
              <h3 className="text-black mb-4" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: "1.05rem", lineHeight: 1.3 }}>{s.title}</h3>
              <p className="text-black/45 mb-4" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.82rem", lineHeight: 1.8 }}>{s.desc}</p>
              <div className="border-t border-black/8 pt-4">
                <p className="text-[#163A70]/70" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.68rem", letterSpacing: "0.08em", lineHeight: 1.7 }}>
                  {s.focus.split("·").map((f, i) => (<span key={i}>{i > 0 && <span className="text-black/20"> · </span>}{f.trim()}</span>))}
                </p>
              </div>
              <div className="mt-5 w-6 h-px bg-[#163A70]/30 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
