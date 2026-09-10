import { Mail } from "lucide-react";

const architects = [
  {
    name: "Ar. Priya Sharma",
    title: "Principal Architect",
    experience: "12 Years",
    specialty: "Residential & Sustainable Design",
    desc: "Priya leads our architectural design division with a focus on contemporary residential villas and eco-friendly construction. Her work integrates natural light, ventilation, and functional luxury into every design.",
    initials: "PS",
  },
  {
    name: "Ar. Rahul Verma",
    title: "Senior Interior Architect",
    experience: "9 Years",
    specialty: "Interior Architecture & Landscape",
    desc: "Rahul specialises in transforming interiors into immersive living experiences. His portfolio spans contemporary minimal, modern luxury, and fusion-traditional styles across residential and commercial spaces.",
    initials: "RV",
  },
];

export function Architects() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#EFF6FF] text-[#163A70] px-4 py-1.5 rounded-full mb-4"
            style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.1em" }}>
            OUR TEAM
          </span>
          <h2 className="text-[#163A70]" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.15 }}>
            Meet Our Architects
          </h2>
          <p className="text-[#6B7280] mt-3 max-w-xl mx-auto" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.95rem", lineHeight: 1.7 }}>
            The creative minds bringing your architectural vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {architects.map((a) => (
            <div key={a.name} className="bg-white border-2 border-[#163A70]/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#163A70]/30 transition-all duration-300">
              {/* Portrait */}
              <div className="bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] h-44 flex items-center justify-center relative">
                <div className="w-24 h-24 rounded-full bg-[#163A70] flex items-center justify-center border-4 border-white shadow-lg">
                  <span className="text-white" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 800, fontSize: "1.6rem" }}>{a.initials}</span>
                </div>
                <div className="absolute top-4 right-4 bg-[#163A70] text-white px-3 py-1 rounded-full"
                  style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: "0.7rem" }}>
                  {a.experience}
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-[#163A70]" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: "1.1rem" }}>{a.name}</h3>
                <div className="text-[#6B7280] mb-2" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: "0.82rem" }}>{a.title}</div>
                <div className="inline-block bg-[#EFF6FF] text-[#163A70] px-3 py-1 rounded-full mb-4"
                  style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: "0.7rem" }}>
                  {a.specialty}
                </div>
                <p className="text-[#6B7280] mb-5" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.83rem", lineHeight: 1.8 }}>{a.desc}</p>
                <div className="flex gap-2">
                  <a href="#" className="w-8 h-8 bg-[#0A66C2] rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-[#163A70] rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
