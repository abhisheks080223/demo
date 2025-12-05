import Image from "next/image";

export default function ProductPortfolio() {
  const portfolioImages = [
    "/port1.png",
    "/port2.png",
    "/port3.png",
    "/port4.png",
    "/port5.png",
    "/port6.png",
    "/port7.png",
  ];

  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">
      {/* HEADING */}
      <div className="pt-[60px]">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-red-700">
            Our <br /> Product Portfolio
          </h1>
          <div className="w-20 h-1 bg-red-700 mt-3" />
        </div>
      </div>

      {/* PORTFOLIO WRAPPER */}
      <div className="max-w-2xl mx-auto px-4 mt-12 pb-16">
        {/* ===== MOBILE / TABLET DYNAMIC GRID ===== */}
        <div className="grid md:hidden grid-cols-2 sm:grid-cols-3 gap-4">
          {portfolioImages.map((img, i) => (
            <div key={i}>
              <Image
                src={img}
                width={500}
                height={500}
                alt=""
                className="w-full h-40 sm:h-48 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* ===== DESKTOP COLLAGE ===== */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {/* Large Desktop Custom Layout */}
          <div className="col-span-2">
            <Image
              src={portfolioImages[0]}
              width={900}
              height={600}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="col-span-2">
            <Image
              src={portfolioImages[1]}
              width={900}
              height={600}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="col-span-2 row-span-2">
            <Image
              src={portfolioImages[2]}
              width={900}
              height={1200}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <Image
            src={portfolioImages[3]}
            width={500}
            height={400}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />

          <Image
            src={portfolioImages[4]}
            width={500}
            height={400}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />

          <div className="col-span-2 row-span-2">
            <Image
              src={portfolioImages[5]}
              width={700}
              height={1000}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="col-span-2">
            <Image
              src={portfolioImages[6]}
              width={900}
              height={800}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
