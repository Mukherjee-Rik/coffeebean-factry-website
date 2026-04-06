const quickLinks = ["About", "Menu", "Gallery", "Why Us", "Contact"];
const menuLinks = ["Coffee", "Cold Brews", "Snacks", "Pizzas", "Desserts"];

export default function Footer() {
  return (
    <footer className="bg-[#1a0f0b] text-[#F4E1C1]/70 px-[5%] pt-14 pb-7">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#hero" className="font-playfair font-black text-2xl text-[#D7A86E] flex items-center gap-2 no-underline mb-4">
              <span>☕</span> Bean Fact'ry
            </a>
            <p className="text-sm leading-relaxed max-w-[260px] mb-5">
              A family coffee house in the heart of Agartala. Crafting warmth, one cup at a time since 2025.
            </p>
            <div className="flex gap-3">
              {["📘", "📸", "🐦", "▶️"].map((icon, i) => (
                <a
                  key={i}
                  href="#!"
                  className="w-10 h-10 rounded-full bg-[#D7A86E]/15 border border-[#D7A86E]/20 flex items-center justify-center text-[#D7A86E] hover:bg-[#C68B59] hover:border-[#C68B59] hover:text-white transition-all no-underline"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#D7A86E] font-semibold text-xs uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="list-none space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(" ", "-")}`}
                    className="text-[#F4E1C1]/60 hover:text-[#D7A86E] text-sm no-underline transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-[#D7A86E] font-semibold text-xs uppercase tracking-widest mb-5">Menu</h4>
            <ul className="list-none space-y-2.5">
              {menuLinks.map((l) => (
                <li key={l}>
                  <a href="#menu" className="text-[#F4E1C1]/60 hover:text-[#D7A86E] text-sm no-underline transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#D7A86E]/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs">© 2025 Bean Fact'ry. All rights reserved.</p>
          <p className="text-xs text-[#C68B59]">A Family Coffee House ☕ Agartala, Tripura</p>
        </div>
      </div>
    </footer>
  );
}
