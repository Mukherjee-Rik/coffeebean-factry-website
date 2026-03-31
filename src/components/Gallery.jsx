import { useReveal } from "../hooks/useReveal";

// Import your actual cafe photos
// Place all these images inside src/assets/gallery/ folder
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
  },
  {
    img: img2,
    label: "Cozy Interiors",
    span: "",
    minH: 160,
  },
  {
    img: img3,
    label: "Dining Area",
    span: "",
    minH: 160,
  },
  {
    img: img4,
    label: "Lounge Seating",
    span: "col-span-2",
    minH: 200,
  },
  {
    img: img5,
    label: "The Coffee Bar",
    span: "",
    minH: 160,
  },
  {
    img: img6,
    label: "Green Velvet Chairs",
    span: "",
    minH: 160,
  },
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
              className={`gallery-item relative rounded-2xl overflow-hidden cursor-pointer group ${item.span}`}
              style={{ minHeight: item.minH }}
            >
              {/* Real photo */}
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ minHeight: item.minH }}
              />

              {/* Warm color overlay — always slightly on, stronger on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/80 via-[#3E2723]/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[#F4E1C1] font-semibold text-sm drop-shadow-lg">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Extra row — remaining photos in equal columns */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          {[img7, img8, img9].map((img, i) => (
            <div
              key={i}
              className="gallery-item relative rounded-2xl overflow-hidden cursor-pointer group"
              style={{ minHeight: 180 }}
            >
              <img
                src={img}
                alt={`cafe-${i}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ minHeight: 180 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/80 via-transparent to-transparent opacity-50 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[#F4E1C1] font-semibold text-sm drop-shadow-lg">
                  {["Wooden Ceiling", "Warm Lighting", "The Lounge"][i]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
