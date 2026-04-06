import { useState, useEffect } from "react";

const links = ["About", "Menu", "Gallery", "Why Us", "Contact", "Book Table"]; // ✅ ADDED HERE

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 px-[5%]
          ${dark
            ? "bg-[#1E1E1E]/90 border-b border-[#D7A86E]/10"
            : "bg-[#FFF8F0]/90 border-b border-[#3E2723]/10"}
          backdrop-blur-md
          ${scrolled ? "shadow-lg" : ""}
        `}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between h-[70px]">
          {/* Logo */}
          <a
            href="#hero"
            className={`font-playfair font-black text-2xl flex items-center gap-2 no-underline transition-colors
              ${dark ? "text-[#D7A86E]" : "text-[#3E2723]"}`}
          >
            <span>☕</span> Bean Fact'ry
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 list-none items-center">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase().replace(" ", "-")}`}
                  className={`no-underline text-sm font-medium tracking-wide relative group transition-colors
                    ${dark ? "text-[#F4E1C1]" : "text-[#3E2723]"}`}
                >
                  {l}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C68B59] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Dark toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="hidden md:block border-2 border-[#C68B59] text-[#C68B59] rounded-full px-4 py-1.5 text-xs font-semibold transition-all hover:bg-[#C68B59] hover:text-white"
            >
              {dark ? "☀️ Light" : "🌙 Dark"}
            </button>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1.5"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`block w-6 h-0.5 rounded transition-all ${dark ? "bg-[#D7A86E]" : "bg-[#3E2723]"}`}
                />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className={`fixed top-[70px] left-0 right-0 z-40 flex flex-col gap-4 px-[5%] py-5 shadow-lg
            ${dark ? "bg-[#1E1E1E]/98" : "bg-[#FFF8F0]/98"}`}
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(" ", "-")}`}
              onClick={() => setMobileOpen(false)}
              className={`text-base font-medium pb-3 border-b transition-colors no-underline
                ${dark ? "text-[#F4E1C1] border-[#D7A86E]/10" : "text-[#3E2723] border-[#3E2723]/08"}`}
            >
              {l}
            </a>
          ))}
          <button
            onClick={() => { setDark(!dark); setMobileOpen(false); }}
            className="border-2 border-[#C68B59] text-[#C68B59] rounded-full px-4 py-2 text-sm font-semibold w-fit"
          >
            {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}
    </>
  );
}