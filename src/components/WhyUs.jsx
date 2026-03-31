import { useReveal } from "../hooks/useReveal";

const reasons = [
  { icon: "🛋️", title: "Cozy Ambience", desc: "Hand-crafted wooden interiors and warm lighting make every visit feel like a retreat." },
  { icon: "🌿", title: "Fresh Ingredients", desc: "Locally sourced, fresh ingredients in every dish and every brew — quality you can taste." },
  { icon: "💰", title: "Affordable Pricing", desc: "Premium café experience at prices that won't break the bank. Quality for everyone." },
  { icon: "😊", title: "Friendly Service", desc: "Our team treats every guest like family — warm, welcoming, and always with a smile." },
  { icon: "☕", title: "Specialty Coffee", desc: "Expertly pulled espresso shots and crafted beverages for the true coffee lover." },
  { icon: "👨‍👩‍👧", title: "Family Friendly", desc: "A welcoming space for everyone — bring the whole family and make memories here." },
];

export default function WhyUs() {
  const { ref, visible } = useReveal();

  return (
    <section id="why-us" className="py-24 px-[5%]" style={{ background: "#3E2723" }}>
      <div className="max-w-6xl mx-auto">
        <span className="text-xs tracking-[4px] uppercase text-[#D7A86E] font-semibold">Why Choose Us</span>
        <h2 className="font-playfair font-bold mt-3 mb-4 text-[#F4E1C1] leading-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          The Bean Fact'ry Difference
        </h2>
        <div className="w-14 h-0.5 bg-gradient-to-r from-[#C68B59] to-[#D7A86E] rounded mb-10" />

        <div ref={ref} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 reveal ${visible ? "visible" : ""}`}>
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-white/5 border border-[#D7A86E]/20 rounded-2xl p-8 text-center backdrop-blur-sm hover:bg-[#D7A86E]/15 hover:-translate-y-1.5 hover:border-[#D7A86E]/50 transition-all duration-300"
            >
              <div className="text-5xl mb-5">{r.icon}</div>
              <h3 className="font-playfair text-[#D7A86E] text-lg font-semibold mb-3">{r.title}</h3>
              <p className="text-[#F4E1C1]/65 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
