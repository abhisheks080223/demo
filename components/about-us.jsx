export default function AboutUsPage() {
  return (
    <>
      {/* ================= HEADER BANNER ================= */}
      <div className="w-full bg-white font-sans">
        {/* ============= MAIN ABOUT SECTION ============= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 text-center">
          <h3 className="text-red-600 text-2xl md:text-3xl font-bold mb-4">
            ABOUT US
          </h3>

          <p className="text-gray-800 leading-relaxed text-base md:text-lg mb-10 max-w-4xl mx-auto">
            <span className="font-bold">INFINITY ENGINEERINGS</span>, a leading
            distributor of innovative building solutions since 2021, ensures
            safety, sustainability, and functionality in construction. We are a
            trusted partner for architects and builders in India, serving as the
            authorized distributor for
            <span className="font-semibold"> Coopers Fire Ltd.</span> for Fire
            and Smoke Curtains across India. We also partner with
            <span className="font-semibold">
              {" "}
              Panasonic & Havells LED Lighting
            </span>{" "}
            for pan-India operations and distribute
            <span className="font-semibold">
              {" "}
              Dormakaba's premium hardware solutions
            </span>
            in North India.
          </p>

          <h3 className="text-red-600 text-2xl md:text-3xl font-bold mb-4">
            OUR VISION
          </h3>
          <p className="text-gray-800 leading-relaxed text-base md:text-lg mb-10 max-w-4xl mx-auto">
            We put safety first by creating quality products that protect people
            and buildings. Our eco-friendly solutions are designed to meet
            specific needs while caring for the environment.
          </p>

          <h3 className="text-red-600 text-2xl md:text-3xl font-bold mb-4">
            OUR MISSION
          </h3>
          <p className="text-gray-800 leading-relaxed text-base md:text-lg max-w-4xl mx-auto">
            At Infinity Engineerings, our mission is to provide cutting-edge
            building solutions that prioritize safety, energy efficiency, and
            aesthetic appeal. We strive to build long-term relationships with
            our clients, delivering exceptional service and support.
          </p>
        </div>
      </div>

      {/* ================= INTRODUCTION SECTION ================= */}
      <div className="w-full bg-white font-sans mt-10 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
          <h1 className="text-red-600 text-3xl md:text-5xl font-extrabold leading-tight text-center">
            INTRODUCTION
          </h1>
          <h2 className="text-blue-900 text-2xl md:text-4xl font-extrabold mt-2 text-center">
            ABOUT OUR COMPANY
          </h2>

          {/* Center Line */}
          <div className="w-[120px] h-0.5 bg-blue-900 mt-4 mx-auto"></div>

          {/* Intro Section Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div>
              <p className="text-red-600 italic font-semibold text-lg md:text-xl leading-relaxed">
                “WE ENGINEER ADVANCED SOLUTIONS TO PROTECT LIVES, PROPERTY, AND
                INFRASTRUCTURE THROUGH CERTIFIED TECHNOLOGY AND EXCELLENCE.”
              </p>
            </div>

            <div className="text-gray-800 leading-relaxed text-base md:text-lg">
              <p>
                At <span className="font-semibold">Infinity Engineerings</span>,
                our mission is to set new benchmarks in fire and smoke
                protection. We engineer solutions that safeguard lives,
                property, and critical infrastructure using certified products
                and cutting-edge technology.
              </p>
            </div>
          </div>
        </div>

        {/* Full Width Image */}
        <div className="mt-10 flex justify-center">
          <img
            src="/intro.jpeg"
            alt="Intro Image"
            className="w-[800px] h-80 object-cover rounded-lg"
          />
        </div>

        {/* Bottom Two Columns */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Red Box */}
          <div className="bg-red-700 text-white px-6 md:px-8 py-10 shadow-lg rounded-lg">
            <h3 className="text-2xl md:text-3xl font-bold">WHAT WE OFFER?</h3>

            <div className="mt-6">
              <h4 className="text-xl md:text-2xl font-semibold">
                FIRE & SMOKE PROTECTION
              </h4>
              <p className="mt-3 text-sm md:text-base leading-relaxed">
                Expertly engineered curtains and barriers for escape routes,
                property boundaries, and compartmentation across commercial and
                residential buildings.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-xl md:text-2xl font-semibold">
                FIRE RATED DOOR
              </h4>
              <p className="mt-3 text-sm md:text-base leading-relaxed">
                We provide fire doors, acoustic partitions, and architectural
                systems—fully compliant with building codes.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            <div>
              <h4 className="text-red-700 text-xl md:text-2xl font-bold">
                ADVANCED FIRE-RESISTANT GLASS
              </h4>
              <p className="mt-3 text-gray-800 leading-relaxed text-sm md:text-base">
                Fire glass stays clear during normal use but transforms into a
                heat-shielding barrier during fire emergencies.
              </p>
            </div>

            <div>
              <h4 className="text-red-700 text-xl md:text-2xl font-bold">
                LED LIGHTINGS
              </h4>
              <p className="mt-3 text-gray-800 leading-relaxed text-sm md:text-base">
                Energy-efficient LED solutions for commercial, industrial,
                street, and architectural lighting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
