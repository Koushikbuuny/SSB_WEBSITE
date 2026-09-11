import { Award, Linkedin } from "lucide-react";

const founders = [
  {
    name: "Mr. Chalapathi Rao",
    title: "Co-Founder",
    experience: "Since 1989",
    bio: "Mr. Chalapathi Rao played a key role in establishing the foundation of Sri Bharat Builders. His leadership and commitment to quality helped shape SBB's approach to construction and client relationships.\n\nFrom its early years, his focus has been on building with integrity, maintaining strong client relationships, and creating projects that stand the test of time.",
    specialty: "Construction & Business Leadership",
  },
  {
    name: "Mr. Sridhar",
    title: "Co-Founder",
    experience: "Since 1989",
    bio: "Mr. Sridhar was instrumental in the founding and development of Sri Bharat Builders. Together with Mr. Chalapathi Rao, he helped build the company's early foundation and establish its values of reliability, quality, and professional execution.\n\nHis contribution has been an important part of SBB's journey since its establishment in 1989.",
    specialty: "Construction & Business Leadership",
  },
];

export function Founders() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block bg-[#EFF6FF] text-[#163A70] px-4 py-1.5 rounded-full mb-4"
            style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.1em" }}>
            FOUNDED IN 1989
          </span>
          <h2 className="text-[#163A70] mb-6" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.15 }}>
            Sri Bharat Builders — Founders
          </h2>
          <p className="text-[#6B7280]" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1rem", lineHeight: 1.8 }}>
            Sri Bharat Builders (SBB) was founded in 1989 by Mr. Chalapathi Rao and Mr. Sridhar, with a vision to establish a construction company built on trust, quality, and lasting relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {founders.map((f) => (
            <div key={f.name} className="bg-white border-2 border-[#163A70]/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#163A70]/30 flex flex-col">
              {/* Portrait placeholder */}
              <div className="bg-gradient-to-br from-[#163A70] to-[#1e4a8a] h-52 flex items-center justify-center relative overflow-hidden shrink-0">
                <div className="w-28 h-28 rounded-full bg-white/20 flex items-center justify-center border-4 border-white/30">
                  <span className="text-white" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 800, fontSize: "2rem" }}>
                    {f.name.split(" ").map(n => n !== "Mr." ? n[0] : "").join("").slice(0, 2)}
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

              <div className="p-7 flex flex-col grow">
                <h3 className="text-[#163A70]" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: "1.25rem" }}>{f.name}</h3>
                <div className="text-[#6B7280] mb-2" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: "0.85rem" }}>{f.title}</div>
                <div className="inline-block bg-[#EFF6FF] text-[#163A70] px-3 py-1 rounded-full mb-5 self-start"
                  style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: "0.75rem" }}>
                  {f.specialty}
                </div>
                <div className="text-[#6B7280] space-y-4 mb-6 grow" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem", lineHeight: 1.8 }}>
                  {f.bio.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The SBB Legacy Section */}
        <div className="max-w-4xl mx-auto bg-[#163A70] rounded-3xl p-10 md:p-14 text-white text-center relative overflow-hidden shadow-2xl">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0A66C2]/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 800 }}>The SBB Legacy</h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1rem", lineHeight: 1.8 }}>
              Since 1989, Sri Bharat Builders has grown from its founding vision into a family-led construction legacy.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-10 text-white/90" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 600, letterSpacing: "0.05em" }}>
              <span className="bg-white/10 px-5 py-2 rounded-full backdrop-blur-sm border border-white/10">Two founders.</span>
              <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/40"></span>
              <span className="bg-white/10 px-5 py-2 rounded-full backdrop-blur-sm border border-white/10">One vision.</span>
              <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/40"></span>
              <span className="bg-white/10 px-5 py-2 rounded-full backdrop-blur-sm border border-white/10">Decades of experience.</span>
            </div>
            
            <p className="text-white/80 mb-10 max-w-2xl mx-auto" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.95rem", lineHeight: 1.8 }}>
              Today, SBB continues to carry forward the principles established by Mr. Chalapathi Rao and Mr. Sridhar, while embracing modern architecture, technology, construction practices, and new-generation leadership.
            </p>
            
            <div className="inline-block bg-white text-[#163A70] px-6 py-3 rounded-full"
              style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.05em" }}>
              Built on trust. Strengthened by experience. Designed for generations.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
