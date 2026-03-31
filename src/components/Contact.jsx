import { useReveal } from "../hooks/useReveal";

const info = [
  { icon: "📍", label: "Address", text: "Chowmuhani Bazar, Near Jail Ashram Road\nAgartala, Tripura – 799001" },
  { icon: "📞", label: "Phone", text: "+91 XXXXX XXXXX" },
  { icon: "📧", label: "Email", text: "hello@beanfactry.in" },
];

export default function Contact() {
  const { ref, visible } = useReveal();

  return (
    <section id="contact" className="py-24 px-[5%] bg-[#F4E1C1] dark:bg-[#2A2218]">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs tracking-[4px] uppercase text-[#C68B59] font-semibold">Find Us</span>
        <h2 className="font-playfair font-bold mt-3 mb-4 text-[#3E2723] dark:text-[#F4E1C1] leading-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          Come Visit Us
        </h2>
        <div className="w-14 h-0.5 bg-gradient-to-r from-[#C68B59] to-[#D7A86E] rounded mb-10" />

        <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-start reveal ${visible ? "visible" : ""}`}>
          {/* Info */}
          <div>
            {info.map((item) => (
              <div key={item.label} className="flex gap-4 mb-7">
                <div className="w-11 h-11 rounded-xl bg-[#3E2723] text-[#F4E1C1] flex items-center justify-center text-lg shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">{item.label}</p>
                  <p className="text-sm font-medium text-[#1B1B1B] dark:text-[#F4E1C1] whitespace-pre-line">{item.text}</p>
                </div>
              </div>
            ))}

            {/* Hours */}
            <div className="flex gap-4 mb-7">
              <div className="w-11 h-11 rounded-xl bg-[#3E2723] text-[#F4E1C1] flex items-center justify-center text-lg shrink-0">
                🕐
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">Opening Hours</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-sm">
                    <div className="text-gray-400 text-xs mb-0.5">Mon – Fri</div>
                    <div className="font-semibold text-[#C68B59]">9:00 AM – 10:00 PM</div>
                  </div>
                  <div className="text-sm">
                    <div className="text-gray-400 text-xs mb-0.5">Sat – Sun</div>
                    <div className="font-semibold text-[#C68B59]">8:00 AM – 11:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl" style={{ height: 340 }}>
            <iframe
              title="Bean Fact'ry Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14577!2d91.282!3d23.831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375215b2a0a2b22d%3A0x0!2zQWdhcnRhbGE!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
