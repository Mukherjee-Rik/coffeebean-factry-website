import { useReveal } from "../hooks/useReveal";

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="py-24 px-[5%] bg-[#F4E1C1] dark:bg-[#2A2218]">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center reveal ${visible ? "visible" : ""}`}>

          {/* Image / Visual */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4/5" }}>
            <div
              className="w-full h-full flex items-center justify-center text-[8rem]"
              style={{ background: "linear-gradient(135deg, #3E2723 0%, #8B5E3C 50%, #D7A86E 100%)" }}
            >
              ☕
            </div>
            <div className="absolute bottom-6 right-6 bg-white/95 dark:bg-[#1E1E1E]/95 rounded-2xl px-5 py-4 text-center shadow-xl">
              <strong className="block font-playfair text-3xl text-[#C68B59]">100%</strong>
              <span className="text-xs text-gray-400">Family Owned</span>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-xs tracking-[4px] uppercase text-[#C68B59] font-semibold">Our Story</span>
            <h2 className="font-playfair font-bold mt-3 mb-4 text-[#3E2723] dark:text-[#F4E1C1] leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              More than coffee —<br />it's family.
            </h2>
            <div className="w-14 h-0.5 bg-gradient-to-r from-[#C68B59] to-[#D7A86E] rounded mb-8" />

            <p className="text-[#555] dark:text-[#F4E1C1]/70 text-base leading-relaxed mb-5">
              Born from a love of great coffee and warm conversations, Bean Fact'ry opened its doors in Agartala with one simple dream — to create a place where every cup feels like it was made just for you.
            </p>
            <p className="text-[#555] dark:text-[#F4E1C1]/70 text-base leading-relaxed mb-5">
              Our space is thoughtfully designed with warm wooden interiors, soft yellow lighting, and cozy corners that invite you to slow down, connect, and stay a little longer.
            </p>
            <p className="text-[#555] dark:text-[#F4E1C1]/70 text-base leading-relaxed mb-8">
              Whether you're here for your morning espresso, a family brunch, or a quiet afternoon with a good book — Bean Fact'ry is your home away from home.
            </p>

            <div className="flex flex-wrap gap-3">
              {["🫘 Specialty Coffee", "🍕 Fresh Food", "🛋️ Cozy Ambiance"].map((f) => (
                <span key={f} className="bg-[#3E2723] text-[#F4E1C1] px-4 py-2 rounded-full text-sm font-medium">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
