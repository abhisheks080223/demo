import Image from "next/image";

export default function ProductPortfolio() {
  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">
      {/* ========== HEADING ========== */}
      <div className="pt-[60px]">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-red-700">
            Our <br /> Product Portfolio
          </h1>
          <div className="w-20 h-1 bg-red-700 mt-3"></div>
        </div>
      </div>

      {/* ========== GRID COLLAGE ========== */}
      <div className="max-w-2xl sm-h-12/12 mx-auto px-4 mt-12 pb-16">
        {/* Mobile/Tablet (Compact Grid) */}
        <div className="grid md:hidden grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            "/port1.png",
            "/port2.png",
            "/port3.png",
            "/port4.png",
            "/port5.png",
            "/port6.png",
            "/port7.png",
          ].map((img, i) => (
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

        {/* Desktop Large Collage */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {/* Wide Top Left */}
          <div className="col-span-2">
            <Image
              src="/port1.png"
              width={900}
              height={600}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Wide Top Right */}
          <div className="col-span-2">
            <Image
              src="/port2.png"
              width={900}
              height={600}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Tall Door Image */}
          <div className="col-span-2 row-span-2">
            <Image
              src="/port3.png"
              width={900}
              height={1200}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Small right top */}
          <div>
            <Image
              src="/port4.png"
              width={500}
              height={400}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Small right bottom */}
          <div>
            <Image
              src="/port5.png"
              width={500}
              height={400}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Port 6 – larger width */}
          <div className="col-span-2 row-span-2">
            <Image
              src="/port6.png"
              width={700}
              height={1000}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Port 7 wider */}
          <div className="col-span-2">
            <Image
              src="/port7.png"
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
