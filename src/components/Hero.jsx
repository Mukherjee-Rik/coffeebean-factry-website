export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-[5%] pt-20 pb-16"
      style={{
        background: "linear-gradient(135deg, #2c1810 0%, #3E2723 40%, #5D3A28 70%, #8B5E3C 100%)",
      }}
    >
      {/* Background radial glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(215,168,110,0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(244,225,193,0.06) 0%, transparent 40%),
            radial-gradient(circle at 60% 80%, rgba(198,139,89,0.1) 0%, transparent 50%)
          `,
        }}
      />

      {/* Steam */}
      <div className="absolute bottom-[32%] left-1/2 -translate-x-1/2 flex gap-5 opacity-20 pointer-events-none">
        {[60, 90, 70, 80].map((h, i) => (
          <div
            key={i}
            className={`w-1.5 rounded-full steam steam-${i + 1}`}
            style={{
              height: h,
              background: "linear-gradient(to top, transparent, rgba(244,225,193,0.9))",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="text-center relative z-10 max-w-3xl mx-auto">
        <div className="fade-1 inline-block bg-[#D7A86E]/20 border border-[#D7A86E]/40 text-[#D7A86E] px-5 py-1.5 rounded-full text-xs tracking-[3px] uppercase mb-6">
          ☕ Est. 2025 · Agartala, Tripura
        </div>

        <h1 className="fade-2 font-playfair font-black text-white leading-[1.1] mb-5"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}>
          Welcome to<br />
          <em className="text-[#D7A86E] not-italic">Bean Fact'ry</em>
        </h1>

        <p className="fade-3 text-[#F4E1C1]/85 font-light mb-10"
          style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
          Where every sip feels like home — handcrafted coffee<br />
          in the heart of Agartala.
        </p>

        <div className="fade-4 flex gap-4 justify-center flex-wrap">
          <a
            href="#menu"
            className="bg-[#D7A86E] text-[#3E2723] px-8 py-3.5 rounded-full font-bold text-sm tracking-wide no-underline transition-all hover:-translate-y-1 hover:bg-[#e8bb84] shadow-lg"
            style={{ boxShadow: "0 8px 24px rgba(215,168,110,0.35)" }}
          >
            View Menu
          </a>
          <a
            href="#contact"
            className="border-2 border-[#F4E1C1]/50 text-[#F4E1C1] px-8 py-3.5 rounded-full font-semibold text-sm no-underline transition-all hover:-translate-y-1 hover:border-[#F4E1C1] hover:bg-[#F4E1C1]/10"
          >
            Visit Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#F4E1C1]/50 text-[10px] tracking-[2px] uppercase hero-scroll">
        scroll
        <div className="w-px h-12 bg-gradient-to-b from-[#F4E1C1]/50 to-transparent" />
      </div>
    </section>
  );
}
