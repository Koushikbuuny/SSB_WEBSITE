import { useEffect, useRef, useState } from "react";

const stats = [
  { end: 35, suffix: "+", label: "Years of Experience", sub: "Trusted since 1989" },
  { end: 100, suffix: "+", label: "Projects Delivered", sub: "Residential, commercial & interiors" },
  { end: 4, suffix: "", label: "Cities Served", sub: "Nellore · Vijayawada · Hyderabad · Bengaluru" },
  { end: 98, suffix: "%", label: "Client Satisfaction", sub: "End-to-end delivery excellence" },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const steps = 50; const inc = end / steps; let cur = 0;
        const t = setInterval(() => { cur += inc; if (cur >= end) { setCount(end); clearInterval(t); } else setCount(Math.floor(cur)); }, 1400 / steps);
      }
    }, { threshold: 0.4 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);
  return <div ref={ref} style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900, fontSize: "clamp(3rem, 5vw, 5rem)", lineHeight: 1, color: "#163A70" }}>{count}{suffix}</div>;
}

export function Stats() {
  return (
    <section className="bg-[#f0f0f0] py-24 border-t border-b border-black/6">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-black/8">
          {stats.map((s) => (
            <div key={s.label} className="px-8 py-6 first:pl-0">
              <Counter end={s.end} suffix={s.suffix} />
              <div className="text-black mt-3 mb-1.5" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: "0.88rem", letterSpacing: "0.05em" }}>{s.label}</div>
              <div className="text-black/30" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", lineHeight: 1.5 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
