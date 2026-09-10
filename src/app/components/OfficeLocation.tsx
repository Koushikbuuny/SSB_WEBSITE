import { MapPin } from "lucide-react";

const cities = [
  { name: "Nellore", note: "Headquarters", detail: "Ramesh Reddy Nagar, Nellore, AP 524003" },
  { name: "Vijayawada", note: "Active Projects", detail: "Andhra Pradesh" },
  { name: "Hyderabad", note: "Active Projects", detail: "Telangana" },
  { name: "Bengaluru", note: "Active Projects", detail: "Karnataka" },
];

export function OfficeLocation() {
  return (
    <section className="bg-[#F9FAFB] py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#EFF6FF] text-[#163A70] px-4 py-1.5 rounded-full mb-4"
            style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.1em" }}>
            OFFICE LOCATION
          </span>
          <h2 className="text-[#163A70]" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.15 }}>
            Where We Operate
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-md" style={{ height: "380px" }}>
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=79.96%2C14.41%2C80.02%2C14.47&layer=mapnik&marker=14.44%2C79.99"
              className="w-full h-full"
              style={{ border: "none" }}
              title="Sri Bharath Builders office – Nellore, AP"
            />
          </div>

          {/* Service locations */}
          <div>
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-7 shadow-sm mb-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center text-[#163A70]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[#163A70]" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: "1rem" }}>Head Office</div>
                  <div className="text-[#6B7280]" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.82rem" }}>Ramesh Reddy Nagar, Nellore, AP 524003</div>
                </div>
              </div>
              <a href="https://maps.google.com/?q=Ramesh+Reddy+Nagar+Nellore+Andhra+Pradesh"
                target="_blank" rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#163A70] hover:bg-[#1e4a8a] text-white py-3 rounded-xl transition-colors font-semibold"
                style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.85rem" }}>
                <MapPin className="w-4 h-4" /> Open in Google Maps
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {cities.map((c) => (
                <div key={c.name} className="bg-white border border-[#E5E7EB] rounded-2xl p-5 hover:border-[#163A70]/30 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-[#163A70] rounded-full" />
                    <span className="text-[#163A70]" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: "0.95rem" }}>{c.name}</span>
                  </div>
                  <div className="text-[#163A70]/60 mb-1" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: "0.72rem", letterSpacing: "0.05em" }}>
                    {c.note.toUpperCase()}
                  </div>
                  <div className="text-[#6B7280]" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.78rem" }}>{c.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
