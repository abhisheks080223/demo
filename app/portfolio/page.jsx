import Image from "next/image";

export default function ProductPortfolio() {
  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">
      {/* ================= HEADING ================= */}
      <div className="w-full py-10 px-4 sm:px-6 md:px-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-700 leading-tight">
          Our <br /> Product Portfolio
        </h1>
        <div className="w-16 sm:w-20 h-1 bg-red-700 mt-3"></div>
      </div>

      {/* ================= MOBILE GRID (STACKED) ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-6 md:hidden">
        {[
          "/port1.png",
          "/port2.png",
          "/port3.png",
          "/port5.png",
          "/port8.png",
          "/port9.png",
          "/port7.png",
          "/port6.png",
        ].map((src, i) => (
          <div key={i} className="w-full">
            <Image
              src={src}
              width={900}
              height={700}
              alt="Product"
              className="w-[300] rounded-lg object-cover"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* ================= DESKTOP COLLAGE ================= */}
      <div className="hidden md:block relative w-full h-[1200px] px-16">
        {/* 1 - Large left image */}
        <div className="absolute top-0 left-0 w-[45%]">
          <Image
            src="/port1.png"
            width={900}
            height={700}
            alt=""
            className="w-full object-cover"
          />
        </div>

        {/* 2 - Top right image 1 */}
        <div className="absolute top-0 right-0 w-[45%]">
          <Image
            src="/port2.png"
            width={900}
            height={700}
            alt=""
            className="w-full object-cover"
          />
        </div>

        {/* 3 - Top right image 2 */}
        <div className="absolute top-[200px] right-0 w-[45%]">
          <Image
            src="/port3.png"
            width={900}
            height={700}
            alt=""
            className="w-full object-cover"
          />
        </div>

        {/* 4 - Large middle-left door */}
        <div className="absolute top-[300px] left-0 w-[45%]">
          <Image
            src="/port5.png"
            width={900}
            height={700}
            alt=""
            className="w-full object-cover"
          />
        </div>

        {/* 5 - Small middle image 1 */}
        <div className="absolute top-[350px] right-[25%] w-[20%]">
          <Image
            src="/port8.png"
            width={500}
            height={500}
            alt=""
            className="w-full object-cover"
          />
        </div>

        {/* 6 - Small middle image 2 */}
        <div className="absolute top-[350px] right-0 w-[20%]">
          <Image
            src="/port9.png"
            width={500}
            height={500}
            alt=""
            className="w-full object-cover"
          />
        </div>

        {/* 7 - Fireproof glass */}
        <div className="absolute bottom-[120px] left-0 w-[45%]">
          <Image
            src="/port7.png"
            width={900}
            height={700}
            alt=""
            className="w-full object-cover"
          />
        </div>

        {/* 8 - Bottom door */}
        <div className="absolute bottom-0 right-0 w-[45%]">
          <Image
            src="/port6.png"
            width={900}
            height={700}
            alt=""
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
