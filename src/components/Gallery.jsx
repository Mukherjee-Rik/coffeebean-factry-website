import { useReveal } from "../hooks/useReveal";

import img1 from "../assets/gallery/exterior.png";
import img2 from "../assets/gallery/interior1.png";
import img3 from "../assets/gallery/interior2.png";
import img4 from "../assets/gallery/interior3.png";
import img5 from "../assets/gallery/bar.png";
import img6 from "../assets/gallery/seating.png";
import img7 from "../assets/gallery/ceiling1.png";
import img8 from "../assets/gallery/ceiling2.png";
import img9 from "../assets/gallery/lounge.png";

const items = [
  {
    img: img1,
    label: "Bean Fact'ry — Agartala",
    span: "col-span-2 row-span-2",
    minH: 340,
    fit: "object-contain",   // ← show the FULL entrance, no cropping
    bg: "#1a0f0b",           // dark background behind image
  },
  { img: img2, label: "Cozy Interiors",      span: "",           minH: 160, fit: "object-cover", bg: "transparent" },
  { img: img3, label: "Dining Area",         span: "",           minH: 160, fit: "object-cover", bg: "transparent" },
  { img: img4, label: "Lounge Seating",      span: "col-span-2", minH: 200, fit: "object-cover", bg: "transparent" },
  { img: img5, label: "The Coffee Bar",      span: "",           minH: 160, fit: "object-cover", bg: "transparent" },
  { img: img6, label: "Green Velvet Chairs", span: "",           minH: 160, fit: "object-cover", bg: "transparent" },
];

const bottomItems = [
  { img: img7, label: "Wooden Ceiling" },
  { img: img8, label: "Warm Lighting"  },
  { img: img9, label: "The Lounge"     },
];

export default function Gallery() {
  const { ref, visible } = useReveal();

  return (
    <section id="gallery" className="py-24 px-[5%] bg-[#F4E1C1] dark:bg-[#2A2218]">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs tracking-[4px] uppercase text-[#C68B59] font-semibold">
          Inside Bean Fact'ry
        </span>
        <h2
          className="font-playfair font-bold mt-3 mb-4 text-[#3E2723] dark:text-[#F4E1C1] leading-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          A Glimpse of Our World
        </h2>
        <div className="w-14 h-0.5 bg-gradient-to-r from-[#C68B59] to-[#D7A86E] rounded mb-10" />

        <div
          ref={ref}
          className={`grid grid-cols-4 gap-4 reveal ${visible ? "visible" : ""}`}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${item.span}`}
              style={{ minHeight: item.minH, backgroundColor: item.bg }}
            >
              <img
                src={item.img}
                alt={item.label}
                className={`w-full h-full ${item.fit} object-center transition-transform duration-500 group-hover:scale-105`}
                style={{ minHeight: item.minH }}
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/75 via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[#F4E1C1] font-semibold text-sm drop-shadow-lg">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          {bottomItems.map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              style={{ minHeight: 180 }}
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                style={{ minHeight: 180 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/75 via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[#F4E1C1] font-semibold text-sm drop-shadow-lg">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}