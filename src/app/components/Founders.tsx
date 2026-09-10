import { Award, Linkedin } from "lucide-react";

const founders = [
  {
    name: "Sri Bharath Reddy",
    title: "Founder & Managing Director",
    experience: "35+ Years",
    bio: "With over three decades in construction, Sri Bharath Reddy founded the company in 1989 with a vision to build Nellore with integrity. His deep expertise in civil engineering and site management laid the foundation for the firm's reputation for structural excellence.",
    quote: "Every structure we build is a promise kept.",
    specialty: "Civil Engineering & Project Management",
  },
  {
    name: "Sri Kumar Reddy",
    title: "Co-Founder & Director",
    experience: "30+ Years",
    bio: "A second-generation visionary, Sri Kumar brings modern architectural thinking to the firm's deep construction roots. He has expanded the company into full-service design, interiors, and landscape — transforming it into a contemporary architecture studio.",
    quote: "Design is not just what it looks like — it's how it works.",
    specialty: "Architecture & Interior Design",
  },
];

export function Founders() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#EFF6FF] text-[#163A70] px-4 py-1.5 rounded-full mb-4"
            style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.1em" }}>
            OUR FOUNDERS
          </span>
          <h2 className="text-[#163A70]" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.15 }}>
            The Minds Behind the Legacy
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((f) => (
            <div key={f.name} className="bg-white border-2 border-[#163A70]/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#163A70]/30">
              {/* Portrait placeholder */}
              <div className="bg-gradient-to-br from-[#163A70] to-[#1e4a8a] h-52 flex items-center justify-center relative overflow-hidden">
                <div className="w-28 h-28 rounded-full bg-white/20 flex items-center justify-center border-4 border-white/30">
                  <span className="text-white" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 800, fontSize: "2rem" }}>
                    {f.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </span>
                </div>
                {/* Experience badge */}
                <div className="absolute top-4 right-4 bg-white/15 backdrop-blur-sm border border-white/25 text-white px-3 py-1.5 rounded-full">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    <span style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: "0.7rem" }}>{f.experience}</span>
                  </div>
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-[#163A70]" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: "1.15rem" }}>{f.name}</h3>
                <div className="text-[#6B7280] mb-1" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: "0.82rem" }}>{f.title}</div>
                <div className="inline-block bg-[#EFF6FF] text-[#163A70] px-3 py-1 rounded-full mb-4"
                  style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: "0.7rem" }}>
                  {f.specialty}
                </div>
                <p className="text-[#6B7280] mb-5" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.85rem", lineHeight: 1.8 }}>{f.bio}</p>
                <blockquote className="border-l-2 border-[#163A70] pl-4 text-[#163A70]/70 italic mb-5"
                  style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.85rem", lineHeight: 1.6 }}>
                  "{f.quote}"
                </blockquote>
                <div className="flex gap-2">
                  <a href="#" className="w-8 h-8 bg-[#0A66C2] rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <Linkedin className="w-4 h-4" />
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
