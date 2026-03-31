import { useReveal } from "../hooks/useReveal";

const reviews = [
  {
    text: "Hands down the best café in Agartala! The latte art was gorgeous and the paneer wrap was absolutely delicious. The wooden interior gives such a warm, premium vibe. Will definitely be back!",
    name: "Priya Chakraborty",
    loc: "Agartala, Tripura",
    avatar: "👩",
  },
  {
    text: "Took my family here on the weekend and everyone loved it. Kids enjoyed the pizza, we adults had amazing cold coffee. Feels like a big city café right here in Agartala!",
    name: "Rahul Debnath",
    loc: "Battala, Agartala",
    avatar: "👨",
  },
  {
    text: "Perfect place to catch up with friends. The seating is so comfy and the staff is incredibly friendly. The caramel latte was chef's kiss. This is now my go-to spot!",
    name: "Nandita Singha",
    loc: "Chowmuhani Bazar",
    avatar: "👩",
  },
];

export default function Testimonials() {
  const { ref, visible } = useReveal();

  return (
    <section id="testimonials" className="py-24 px-[5%] bg-[#FFF8F0] dark:bg-[#1E1E1E]">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs tracking-[4px] uppercase text-[#C68B59] font-semibold">What Guests Say</span>
        <h2 className="font-playfair font-bold mt-3 mb-4 text-[#3E2723] dark:text-[#F4E1C1] leading-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          Stories From Our Table
        </h2>
        <div className="w-14 h-0.5 bg-gradient-to-r from-[#C68B59] to-[#D7A86E] rounded mb-10" />

        <div ref={ref} className={`grid grid-cols-1 md:grid-cols-3 gap-7 reveal ${visible ? "visible" : ""}`}>
          {reviews.map((r) => (
            <div
              key={r.name}
              className="relative bg-white dark:bg-[#2A2218] rounded-2xl p-8 shadow-sm border border-[#D7A86E]/12 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-5 left-6 font-playfair text-7xl leading-none text-[#D7A86E]/40">"</div>
              <p className="italic text-sm text-[#555] dark:text-[#F4E1C1]/65 leading-relaxed mb-6 pt-8">
                {r.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-xl"
                  style={{ background: "linear-gradient(135deg, #3E2723, #C68B59)" }}>
                  {r.avatar}
                </div>
                <div>
                  <div className="text-[#C68B59] text-sm mb-0.5">★★★★★</div>
                  <div className="font-semibold text-sm text-[#3E2723] dark:text-[#D7A86E]">{r.name}</div>
                  <div className="text-xs text-gray-400">{r.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
