import { useState } from "react";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM",  "1:30 PM",  "2:00 PM",  "2:30 PM",
  "3:00 PM",  "3:30 PM",  "4:00 PM",  "4:30 PM",
  "5:00 PM",  "5:30 PM",  "6:00 PM",  "6:30 PM",
  "7:00 PM",  "7:30 PM",  "8:00 PM",  "8:30 PM",
  "9:00 PM",  "9:30 PM",
];

const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8];
const STEPS = ["Details", "Time", "Confirm"];

// ── Owner's WhatsApp number ──
const OWNER_WHATSAPP = "919903085026"; // 91 = India country code

export default function TableBooking() {
  const [step, setStep]   = useState(0);
  const [booked, setBooked] = useState(false);
  const [form, setForm]   = useState({ name: "", phone: "", date: "", time: "", guests: "", note: "" });
  const [errors, setErrors] = useState({});

  const today = new Date().toISOString().split("T")[0];

  const validate = () => {
    const e = {};
    if (step === 0) {
      if (!form.name.trim())  e.name  = "Name is required";
      if (!form.phone.trim()) e.phone = "Phone is required";
      else if (!/^[6-9]\d{9}$/.test(form.phone)) e.phone = "Enter valid 10-digit number";
      if (!form.guests) e.guests = "Select number of guests";
    }
    if (step === 1) {
      if (!form.date) e.date = "Please pick a date";
      if (!form.time) e.time = "Please pick a time slot";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next    = () => { if (validate()) setStep((s) => s + 1); };
  const back    = () => setStep((s) => s - 1);
  const set     = (key, val) => { setForm((f) => ({ ...f, [key]: val })); setErrors((e) => ({ ...e, [key]: "" })); };

  const formatDate = (d) => {
    if (!d) return "";
    return new Date(d + "T00:00:00").toLocaleDateString("en-IN", {
      weekday: "long", day: "numeric", month: "long", year: "numeric",
    });
  };

  const sendToWhatsApp = () => {
    // Build the message that owner will receive
    const msg =
      `🪑 *New Table Booking — Bean Fact'ry*\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `📞 *Phone:* ${form.phone}\n` +
      `👥 *Guests:* ${form.guests} person${form.guests > 1 ? "s" : ""}\n` +
      `📅 *Date:* ${formatDate(form.date)}\n` +
      `🕐 *Time:* ${form.time}\n` +
      (form.note ? `📝 *Special Request:* ${form.note}\n` : "") +
      `\n_Sent from Bean Fact'ry website_`;

    const encoded = encodeURIComponent(msg);
    const url = `https://wa.me/${OWNER_WHATSAPP}?text=${encoded}`;

    // Open WhatsApp in new tab
    window.open(url, "_blank");
    setBooked(true);
  };

  const confirm = () => sendToWhatsApp();

  const reset = () => {
    setBooked(false);
    setStep(0);
    setForm({ name: "", phone: "", date: "", time: "", guests: "", note: "" });
    setErrors({});
  };

  return (
    <section id="book-table" className="py-24 px-[5%] bg-[#3E2723]">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs tracking-[4px] uppercase text-[#D7A86E] font-semibold">
            Reserve Your Spot
          </span>
          <h2
            className="font-playfair font-bold mt-3 mb-3 text-[#F4E1C1] leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Book a Table
          </h2>
          <p className="text-[#F4E1C1]/60 text-sm">
            Reserve your perfect seat at Bean Fact'ry — we'll be ready for you.
          </p>
        </div>

        {/* ── SUCCESS SCREEN ── */}
        {booked ? (
          <div className="bg-white/5 border border-[#D7A86E]/30 rounded-3xl p-10 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="font-playfair text-2xl font-bold text-[#D7A86E] mb-3">
              Booking Sent!
            </h3>
            <p className="text-[#F4E1C1]/70 text-sm mb-2 leading-relaxed">
              Your booking details have been sent to us via WhatsApp.
            </p>
            <p className="text-[#F4E1C1]/50 text-xs mb-8">
              If WhatsApp didn't open automatically, please message us directly at{" "}
              <a
                href={`https://wa.me/${OWNER_WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="text-[#D7A86E] underline"
              >
                +91 9903085026
              </a>
            </p>

            {/* Summary */}
            <div className="bg-[#2A1810] rounded-2xl p-5 text-left mb-8 space-y-3">
              {[
                { icon: "👤", label: "Name",   val: form.name },
                { icon: "📅", label: "Date",   val: formatDate(form.date) },
                { icon: "🕐", label: "Time",   val: form.time },
                { icon: "👥", label: "Guests", val: `${form.guests} person${form.guests > 1 ? "s" : ""}` },
              ].map((r) => (
                <div key={r.label} className="flex items-center gap-3">
                  <span className="text-lg">{r.icon}</span>
                  <span className="text-[#D7A86E] text-xs w-14">{r.label}</span>
                  <span className="text-[#F4E1C1] text-sm font-medium">{r.val}</span>
                </div>
              ))}
              {form.note && (
                <div className="flex items-start gap-3">
                  <span className="text-lg">📝</span>
                  <span className="text-[#D7A86E] text-xs w-14">Note</span>
                  <span className="text-[#F4E1C1] text-sm">{form.note}</span>
                </div>
              )}
            </div>

            {/* Resend button */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={sendToWhatsApp}
                className="bg-[#25D366] text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-[#1ebe57] transition-all flex items-center justify-center gap-2"
              >
                <span>💬</span> Resend on WhatsApp
              </button>
              <button
                onClick={reset}
                className="border border-[#D7A86E]/40 text-[#D7A86E] font-bold px-6 py-3 rounded-full text-sm hover:bg-[#D7A86E]/10 transition-all"
              >
                Book Another Table
              </button>
            </div>
          </div>

        ) : (

          <div className="bg-white/5 border border-[#D7A86E]/20 rounded-3xl p-8 backdrop-blur-sm">

            {/* Step indicator */}
            <div className="flex items-center justify-center gap-0 mb-10">
              {STEPS.map((label, i) => (
                <div key={label} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all
                        ${i < step   ? "bg-[#D7A86E] text-[#3E2723]" : ""}
                        ${i === step ? "bg-[#C68B59] text-white ring-4 ring-[#C68B59]/30" : ""}
                        ${i > step   ? "bg-white/10 text-[#F4E1C1]/40" : ""}
                      `}
                    >
                      {i < step ? "✓" : i + 1}
                    </div>
                    <span className={`text-[10px] mt-1 tracking-wide ${i === step ? "text-[#D7A86E]" : "text-[#F4E1C1]/40"}`}>
                      {label}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className={`w-16 h-0.5 mb-4 mx-1 transition-all ${i < step ? "bg-[#D7A86E]" : "bg-white/10"}`} />
                  )}
                </div>
              ))}
            </div>

            {/* ── STEP 0: Personal Details ── */}
            {step === 0 && (
              <div className="space-y-5">
                <h3 className="font-playfair text-xl text-[#F4E1C1] font-semibold mb-4">Your Details</h3>

                <div>
                  <label className="text-xs text-[#D7A86E] uppercase tracking-widest block mb-2">Full Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Debnath"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    className={`w-full border rounded-xl px-4 py-3 text-[#F4E1C1] placeholder-[#F4E1C1]/30 text-sm outline-none focus:border-[#D7A86E] transition-colors ${errors.name ? "border-red-400" : "border-white/15"}`}
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="text-xs text-[#D7A86E] uppercase tracking-widest block mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="e.g. 9876543210"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    maxLength={10}
                    className={`w-full border rounded-xl px-4 py-3 text-[#F4E1C1] placeholder-[#F4E1C1]/30 text-sm outline-none focus:border-[#D7A86E] transition-colors ${errors.phone ? "border-red-400" : "border-white/15"}`}
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="text-xs text-[#D7A86E] uppercase tracking-widest block mb-2">Number of Guests *</label>
                  <div className="grid grid-cols-4 gap-2">
                    {guestOptions.map((g) => (
                      <button
                        key={g}
                        onClick={() => set("guests", g)}
                        className={`py-2.5 rounded-xl text-sm font-semibold border transition-all
                          ${form.guests === g
                            ? "bg-[#D7A86E] text-[#3E2723] border-[#D7A86E]"
                            : "border-white/15 text-[#F4E1C1]/60 hover:border-[#D7A86E]/50"
                          }`}
                        style={{ background: form.guests === g ? undefined : "rgba(255,255,255,0.05)" }}
                      >
                        {g} {g === 1 ? "👤" : "👥"}
                      </button>
                    ))}
                  </div>
                  {errors.guests && <p className="text-red-400 text-xs mt-1">{errors.guests}</p>}
                </div>

                <div>
                  <label className="text-xs text-[#D7A86E] uppercase tracking-widest block mb-2">Special Request (optional)</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Window seat, birthday cake, high chair..."
                    value={form.note}
                    onChange={(e) => set("note", e.target.value)}
                    className="w-full border border-white/15 rounded-xl px-4 py-3 text-[#F4E1C1] placeholder-[#F4E1C1]/30 text-sm outline-none focus:border-[#D7A86E] transition-colors resize-none"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  />
                </div>
              </div>
            )}

            {/* ── STEP 1: Date & Time ── */}
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="font-playfair text-xl text-[#F4E1C1] font-semibold mb-4">Pick Date & Time</h3>

                <div>
                  <label className="text-xs text-[#D7A86E] uppercase tracking-widest block mb-2">Date *</label>
                  <input
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={(e) => set("date", e.target.value)}
                    className={`w-full border rounded-xl px-4 py-3 text-[#F4E1C1] text-sm outline-none focus:border-[#D7A86E] transition-colors ${errors.date ? "border-red-400" : "border-white/15"}`}
                    style={{ background: "rgba(255,255,255,0.06)", colorScheme: "dark" }}
                  />
                  {form.date && <p className="text-[#D7A86E] text-xs mt-1">{formatDate(form.date)}</p>}
                  {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label className="text-xs text-[#D7A86E] uppercase tracking-widest block mb-3">Time Slot *</label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-56 overflow-y-auto pr-1">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        onClick={() => set("time", t)}
                        className={`py-2 px-2 rounded-xl text-xs font-semibold border transition-all
                          ${form.time === t
                            ? "bg-[#D7A86E] text-[#3E2723] border-[#D7A86E]"
                            : "border-white/15 text-[#F4E1C1]/60 hover:border-[#D7A86E]/50"
                          }`}
                        style={{ background: form.time === t ? undefined : "rgba(255,255,255,0.05)" }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time}</p>}
                </div>
              </div>
            )}

            {/* ── STEP 2: Confirm ── */}
            {step === 2 && (
              <div>
                <h3 className="font-playfair text-xl text-[#F4E1C1] font-semibold mb-6">Confirm Booking</h3>
                <div className="bg-[#2A1810] rounded-2xl p-6 space-y-4 mb-6">
                  {[
                    { icon: "👤", label: "Name",   val: form.name },
                    { icon: "📞", label: "Phone",  val: form.phone },
                    { icon: "👥", label: "Guests", val: `${form.guests} person${form.guests > 1 ? "s" : ""}` },
                    { icon: "📅", label: "Date",   val: formatDate(form.date) },
                    { icon: "🕐", label: "Time",   val: form.time },
                  ].map((r) => (
                    <div key={r.label} className="flex items-center gap-4 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                      <span className="text-xl w-7">{r.icon}</span>
                      <span className="text-[#D7A86E] text-xs w-14 uppercase tracking-wide">{r.label}</span>
                      <span className="text-[#F4E1C1] text-sm font-medium">{r.val}</span>
                    </div>
                  ))}
                  {form.note && (
                    <div className="flex items-start gap-4 border-t border-white/5 pt-3">
                      <span className="text-xl w-7">📝</span>
                      <span className="text-[#D7A86E] text-xs w-14 uppercase tracking-wide">Note</span>
                      <span className="text-[#F4E1C1] text-sm">{form.note}</span>
                    </div>
                  )}
                </div>

                {/* WhatsApp note */}
                <div className="flex items-center gap-3 bg-[#25D366]/10 border border-[#25D366]/25 rounded-xl px-4 py-3 mb-4">
                  <span className="text-2xl">💬</span>
                  <p className="text-[#F4E1C1]/70 text-xs leading-relaxed">
                    Clicking <strong className="text-[#F4E1C1]">Confirm</strong> will open WhatsApp and send your booking details directly to Bean Fact'ry.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className={`flex gap-3 mt-8 ${step > 0 ? "justify-between" : "justify-end"}`}>
              {step > 0 && (
                <button
                  onClick={back}
                  className="border border-white/20 text-[#F4E1C1]/70 px-6 py-3 rounded-full text-sm font-semibold hover:border-[#D7A86E]/50 hover:text-[#D7A86E] transition-all"
                >
                  ← Back
                </button>
              )}
              {step < 2 ? (
                <button
                  onClick={next}
                  className="bg-[#D7A86E] text-[#3E2723] font-bold px-8 py-3 rounded-full text-sm hover:bg-[#e8bb84] transition-all shadow-lg"
                >
                  Next →
                </button>
              ) : (
                <button
                  onClick={confirm}
                  className="bg-[#25D366] text-white font-bold px-8 py-3 rounded-full text-sm hover:bg-[#1ebe57] transition-all shadow-lg flex items-center gap-2"
                >
                  <span>💬</span> Confirm via WhatsApp
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
