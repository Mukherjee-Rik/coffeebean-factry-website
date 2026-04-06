import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

const menuData = {
  coffee: [
    { name: "Espresso Shot", desc: "Bold, rich, pure — a double shot of our signature house blend.", price: "₹89", img: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&q=80" },
    { name: "Cappuccino", desc: "Velvety espresso with perfectly steamed micro-foam and cocoa dusting.", price: "₹149", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80" },
    { name: "Caramel Latte", desc: "Smooth espresso with steamed milk and house-made caramel drizzle.", price: "₹169", img: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400&q=80" },
    { name: "Cold Coffee", desc: "Chilled espresso blended with fresh milk and a hint of vanilla.", price: "₹159", img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&q=80" },
    { name: "Mocha", desc: "Rich espresso, dark chocolate, and steamed milk topped with cream.", price: "₹179", img: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&q=80" },
    { name: "Americano", desc: "Espresso diluted with hot water for a clean, bold cup.", price: "₹109", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80" },
  ],
  snacks: [
    { name: "Paneer Corn Wrap", desc: "Spiced cottage cheese and corn wrapped in crispy golden flatbread.", price: "₹179", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80" },
    { name: "Fried Chicken Momos", desc: "Juicy fried momos with our signature spicy red dipping sauce.", price: "₹189", img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=80" },
    { name: "Cheesy Pizza", desc: "Thin crust pizza with mozzarella, bell peppers, corn, tomato base.", price: "₹249", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80" },
    { name: "Grilled Sandwich", desc: "Double-decker grilled sandwich with veggies, cheese, and secret sauce.", price: "₹149", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80" },
    { name: "Loaded Fries", desc: "Crispy fries topped with cheese sauce, jalapeños, and herbs.", price: "₹129", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80" },
    { name: "Pasta Arrabiata", desc: "Penne in a spicy tomato basil sauce — comforting and satisfying.", price: "₹199", img: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&q=80" },
  ],
  desserts: [
    { name: "Chocolate Brownie", desc: "Warm fudgy brownie with vanilla ice cream and chocolate drizzle.", price: "₹149", img: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400&q=80" },
    { name: "New York Cheesecake", desc: "Baked cheesecake on a buttery graham crust with berry compote.", price: "₹179", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80" },
    { name: "Tiramisu", desc: "Espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa.", price: "₹199", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80" },
  ],
};

const tabs = [
  { key: "coffee",   label: "☕ Coffee"   },
  { key: "snacks",   label: "🍕 Snacks"   },
  { key: "desserts", label: "🍰 Desserts" },
];

export default function Menu() {
  const [active, setActive] = useState("coffee");
  const { ref, visible } = useReveal();

  return (
    <section id="menu" className="py-24 px-[5%] bg-[#FFF8F0] dark:bg-[#1E1E1E]">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs tracking-[4px] uppercase text-[#C68B59] font-semibold">
          What We Serve
        </span>
        <h2
          className="font-playfair font-bold mt-3 mb-4 text-[#3E2723] dark:text-[#F4E1C1] leading-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          Our Menu
        </h2>
        <div className="w-14 h-0.5 bg-gradient-to-r from-[#C68B59] to-[#D7A86E] rounded mb-10" />

        {/* Tabs */}
        <div className="flex gap-3 mb-10 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all
                ${active === t.key
                  ? "bg-[#3E2723] text-[#F4E1C1] shadow-lg dark:bg-[#C68B59] dark:text-white"
                  : "bg-[#F4E1C1] text-[#3E2723] hover:bg-[#3E2723] hover:text-[#F4E1C1] dark:bg-[#2A2218] dark:text-[#D7A86E]"
                }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* HORIZONTAL CARD LAYOUT — image left, text right */}
        <div
          ref={ref}
          className={`flex flex-col gap-4 reveal ${visible ? "visible" : ""}`}
        >
          {/* Two columns of horizontal cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {menuData[active].map((item) => (
              <div
                key={item.name}
                className="bg-white dark:bg-[#2A2218] rounded-2xl overflow-hidden border border-[#D7A86E]/15 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group flex flex-row items-stretch"
              >
                {/* Square image on the LEFT — fixed small size */}
                <div className="relative w-28 h-28 flex-shrink-0 overflow-hidden self-center m-3 rounded-xl">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentNode.style.background = "linear-gradient(135deg,#F4E1C1,#D7A86E)";
                    }}
                  />
                </div>

                {/* Text on the RIGHT */}
                <div className="flex flex-col justify-center px-4 py-3 flex-grow">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-playfair font-bold text-sm text-[#3E2723] dark:text-[#D7A86E] leading-snug">
                      {item.name}
                    </h3>
                    <span className="text-[#C68B59] font-bold text-sm font-playfair whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 dark:text-[#F4E1C1]/50 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}