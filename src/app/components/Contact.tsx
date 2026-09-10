export function Contact() {
  return (
    <section id="contact" className="bg-white py-28 lg:py-36 border-t border-black/6">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#163A70]" />
          <span className="text-[#163A70]" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", fontFamily: "DM Sans, sans-serif", fontWeight: 500 }}>
            CONTACT US
          </span>
        </div>
        <h2 className="text-black mb-16" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900, fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1.0, letterSpacing: "-0.02em" }}>
          Let's build<br />something great
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div>
              <div className="text-black/25 mb-3" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.65rem", letterSpacing: "0.25em" }}>PHONE</div>
              <div className="space-y-1.5">
                {["+91 9110328998", "+91 7337375664", "+91 8500166495"].map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, "")}`}
                    className="block text-black hover:text-[#163A70] transition-colors duration-200"
                    style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: "1.05rem", letterSpacing: "0.02em" }}>
                    {p}
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-black/8 pt-8">
              <div className="text-black/25 mb-3" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.65rem", letterSpacing: "0.25em" }}>EMAIL</div>
              <a href="mailto:sribharathbuilders1989@gmail.com"
                className="text-black hover:text-[#163A70] transition-colors duration-200"
                style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem" }}>
                sribharathbuilders1989@gmail.com
              </a>
            </div>

            <div className="border-t border-black/8 pt-8">
              <div className="text-black/25 mb-3" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.65rem", letterSpacing: "0.25em" }}>ADDRESS</div>
              <p className="text-black/55 mb-5" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem", lineHeight: 1.8 }}>
                Ramesh Reddy Nagar<br />Nellore, Andhra Pradesh 524003
              </p>
              <a
                href="https://maps.google.com/?q=Ramesh+Reddy+Nagar+Nellore+Andhra+Pradesh"
                target="_blank" rel="noopener noreferrer"
                className="text-[#163A70] hover:text-[#1e4a8a] transition-colors duration-200 border-b border-[#163A70]/25 pb-0.5"
                style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", letterSpacing: "0.1em", fontWeight: 600 }}>
                OPEN IN GOOGLE MAPS →
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div className="overflow-hidden border border-black/8" style={{ borderRadius: "2px" }}>
            <iframe
              src="https://maps.google.com/maps?q=Ramesh+Reddy+Nagar+Nellore+Andhra+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" height="460" loading="lazy"
              style={{ border: "none", display: "block" }}
              title="Sri Bharath Builders — Nellore, AP"
              allowFullScreen
            />
          </div>

        </div>
      </div>
    </section>
  );
}
