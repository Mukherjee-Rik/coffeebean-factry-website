export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#3E2723] flex flex-col items-center justify-center">
      {/* Cup */}
      <div className="relative w-20 h-24">
        {/* Cup body */}
        <div className="absolute bottom-4 left-0 w-20 h-16 border-4 border-[#F4E1C1] border-t-0 rounded-b-[30px]">
          {/* Coffee fill */}
          <div
            className="absolute bottom-1 left-1 right-1 bg-[#D7A86E] rounded-b-[26px] coffee-fill"
            style={{ height: 0 }}
          />
        </div>
        {/* Handle */}
        <div className="absolute right-[-14px] bottom-8 w-4 h-7 border-4 border-[#F4E1C1] border-l-0 rounded-r-[20px]" />
        {/* Saucer */}
        <div className="absolute bottom-0 left-[-10px] w-24 h-3 bg-[#F4E1C1] rounded-full" />
      </div>

      <p className="mt-8 text-[#F4E1C1] font-playfair text-2xl tracking-widest loader-pulse">
        Bean Fact'ry ☕
      </p>
    </div>
  );
}
