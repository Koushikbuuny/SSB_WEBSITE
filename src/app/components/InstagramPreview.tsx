const photos = [
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1560440021-33f9b867899d?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=400&fit=crop&auto=format",
];

export function InstagramPreview() {
  return (
    <section className="bg-white py-28 lg:py-36 border-t border-black/6">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4"><div className="w-8 h-px bg-[#163A70]" /><span className="text-[#163A70]" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", fontFamily: "DM Sans, sans-serif", fontWeight: 500 }}>INSTAGRAM</span></div>
            <h2 className="text-black" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.0, letterSpacing: "-0.02em" }}>
              @sribharathbuilders
            </h2>
          </div>
          <a href="https://instagram.com/sribharathbuilders" target="_blank" rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 text-black hover:text-[#163A70] transition-colors duration-200 border-b border-black/20 pb-0.5 hover:border-[#163A70]/40"
            style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: "0.75rem", letterSpacing: "0.1em" }}>
            FOLLOW US →
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {photos.map((src, i) => (
            <div key={i} className="group aspect-square overflow-hidden bg-gray-100 cursor-pointer">
              <img src={src} alt={`Sri Bharath Builders project ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
