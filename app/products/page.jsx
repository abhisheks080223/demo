"use client";

import Image from "next/image";

export default function FireProductsPage() {
  return (
    <div className="w-full bg-white text-gray-800 pb-20">
      {/* ------------------------------------------------------------- */}
      {/* 🔥 FIRE CURTAINS SECTION */}
      {/* ------------------------------------------------------------- */}

      {/* HEADER */}
      <div className="flex justify-center items-center px-6 md:px-20 pt-10">
        <Image src="/brands1.png" alt="Coopers Logo" width={140} height={70} />
      </div>

      {/* TITLES */}
      <div className="px-4 sm:px-6 md:px-20 mt-6 md:mt-8 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600">
          Our Products
        </h1>
        <div className="absolute right-0 top-0 h-125 w-15 bg-red-800" />

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 leading-tight">
          Fire Curtains / Smoke Curtain
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 text-gray-700 max-w-4xl mx-auto md:mx-0">
          When fire strikes, every second counts, and our advanced{" "}
          <b>fire curtains</b> activate instantly to create protective barriers
          that stop flames and heat from spreading, giving people precious time
          to evacuate safely.
          <br />
          <br />
          Built with cutting-edge fire-resistant materials, these curtains work
          automatically or on command to seal off dangerous areas — protecting
          both your property and the lives that matter most.
          <br />
          <br />
          This isn't just about meeting safety codes; it's about peace of mind.
        </p>
      </div>

      {/* IMAGE GRID */}
      <div className="px-4 sm:px-6 md:px-20 mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* LARGE IMAGE */}
        <div className="rounded-lg overflow-hidden shadow-md h-64 sm:h-80 md:h-auto">
          <Image
            src="/fc1.png"
            alt="Fire Curtain Large"
            width={900}
            height={700}
            className="w-full h-full object-cover"
          />
        </div>

        {/* SMALLER STACKED IMAGES */}
        <div className="grid grid-cols-1 gap-4">
          {["fc2.png", "fc3.png"].map((img, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden shadow-md h-40 sm:h-48 md:h-44"
            >
              <Image
                src={`/${img}`}
                alt="Fire Curtain"
                width={900}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <div className="px-4 sm:px-6 md:px-20 mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
        {[
          {
            title: "Certified Fire Resistance Standards",
            text: "Tested and certified under EN-1634, BS 8524:1-2013, and UL10-D.",
          },
          {
            title: "Flexible & Easy Installation",
            text: "Available in vertical and horizontal configurations.",
          },
        ].map((feature, i) => (
          <div key={i} className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-700">{feature.text}</p>
          </div>
        ))}
      </div>
      {/* 🔥 FIRE-RESISTANT GLASS SECTION */}

      <div className="relative bg-gray-300 py-12 mt-20 flex justify-center">
        {/* Red Side Bar */}
        <div className="absolute right-0 top-0 h-125 w-15 bg-red-800" />

        {/* Main Container */}
        <div className="max-w-[900px] w-full px-10 relative z-10">
          {/* Title */}
          <h1 className="text-[36px] font-bold text-gray-900 mb-2">
            Advanced Fire-Resistant Glass
          </h1>

          {/* Red Accent Line */}
          <div className="w-14 h-[5px] bg-red-800 mb-6" />

          {/* Description Text */}
          <p className="text-[18px] leading-[1.7] text-gray-800 max-w-[720px]">
            Cutting-edge fire glass technology creates an invisible lifeline
            during emergencies, transforming from clear panels into protective
            barriers that block deadly flames and toxic smoke. When fire
            strikes, these intelligent glass systems automatically activate,
            forming insulating foam that maintains visibility for safe
            evacuation and rescue efforts.
            <br />
            <br />
            Designed for moments when every second counts, fire-resistant glass
            keeps escape routes clear and accessible while providing superior
            protection. You get the transparency needed for daily operations and
            the fire resistance that could save lives during critical moments.
          </p>

          {/* Image Grid */}
          {/* Image Grid */}
          <div className="px-4 sm:px-6 md:px-20 mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* LARGE IMAGE */}
            <div className="rounded-lg overflow-hidden shadow-md h-64 sm:h-80 md:h-auto">
              <Image
                src="/fc1.png"
                alt="Fire Curtain Large"
                width={900}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              {["af2.png", "af3.png", "af4.png", "af5.png"].map((img, i) => (
                <div
                  key={i}
                  className="rounded-lg overflow-hidden shadow-md h-40 sm:h-48 md:h-44"
                >
                  <Image
                    src={`/${img}`}
                    alt={`fire glass ${i + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Features */}
          <div className="grid grid-cols-3 gap-10 mt-10">
            {/* Feature 1 */}
            <div>
              <h3 className="font-bold text-[18px] mb-2 flex items-center gap-2">
                <span className="text-red-600 text-xl">✔</span>
                Superior Insulation Performance
              </h3>
              <p className="text-gray-800 text-[16px] leading-[1.6]">
                Advanced glass technology provides exceptional thermal
                insulation, preventing heat transfer and protecting people on
                the safe side while maintaining clear visibility for emergency
                responders and evacuation teams.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <h3 className="font-bold text-[18px] mb-2 flex items-center gap-2">
                <span className="text-red-600 text-xl">✔</span>
                Multi-Purpose Safety Solution
              </h3>
              <p className="text-gray-800 text-[16px] leading-[1.6]">
                Combines everyday functionality with emergency protection,
                serving as regular windows or partitions that instantly become
                life-saving barriers when needed most.
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <h3 className="font-bold text-[18px] mb-2 flex items-center gap-2">
                <span className="text-red-600 text-xl">✔</span>
                Transparent Protection
              </h3>
              <p className="text-gray-800 text-[16px] leading-[1.6]">
                Unlike traditional fire barriers, fire glass maintains
                visibility during normal operations while transforming into
                protective foam barriers during emergencies, allowing for rescue
                operations and situational awareness.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------- */}
      {/* HEADER SECTION */}
      <div className="px-6 md:px-20 mt-20 pt-10 flex justify-center">
        <Image
          src="/brands3.png"
          alt="Bhawani Fire Logo"
          width={140}
          height={70}
        />
      </div>

      <div className="w-full px-6 md:px-20 pt-10">
        <h1 className="text-[32px] md:text-[48px] font-bold mt-2">
          Fire Rated Door
        </h1>
        <div className="w-16 md:w-20 h-[4px] bg-[#7a0000] mt-3"></div>
      </div>

      {/* CONTENT SECTION */}
      <div className="w-full px-6 md:px-20 py-10 flex flex-col md:flex-row gap-10">
        {/* LEFT CONTENT */}
        <div className="md:w-1/2">
          <h1 className="text-[40px] md:text-[56px] leading-tight font-bold text-[#a30000]">
            Designing <br /> Safety with <br /> Innovations
          </h1>

          <p className="italic text-[22px] md:text-[26px] text-gray-500 mt-4">
            Clean Lines, Clear Minds: <br /> The Minimalist Way
          </p>

          <p className="mt-6 text-[16px] md:text-[18px] leading-7 text-gray-700">
            We offer a comprehensive range of fire-rated doors, glazed
            partitions, and specialized hardware to protect your property.
          </p>

          <p className="mt-4 md:mt-6 text-[16px] md:text-[18px] leading-7 text-gray-700">
            From wooden & metal fire doors to acoustic solutions, clean room
            doors, and architectural systems, we deliver reliable safety
            products that meet all building requirements and regulations.
          </p>
        </div>

        {/* RIGHT IMAGES GRID */}
        <div className="md:w-50  flex flex-col gap-4 md:gap-6 relative">
          {/* Vertical Side Text - hide on small screens */}
          <p
            className="hidden md:block absolute right-[-250px] top-1/2 -translate-y-1   /2 rotate-90
      text-[22px] md:text-[26px] tracking-[1px] font-semibold text-[#7a0000]"
          >
            Glazed Metal Fire Rated Doors
          </p>

          {[1, 2, 3].map((i) => (
            <div key={i} className="border-[5px] border-[#a30000] p-1">
              <img
                src={`d${i}.png`}
                alt={`Fire Door ${i}`}
                className="w-100 h-70 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="flex justify-center items-center px-6 md:px-20 mt-20 pt-10">
        <Image
          src="/brands3.png"
          alt="Bhawani Fire Logo"
          width={140}
          height={70}
        />
      </div>

      <div className="w-full px-6 md:px-16  bg-gray-300 py-12 mt-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start ">
          {/* LEFT TEXT */}
          <div className="md:w-1/2 ">
            <h1 className="text-[32px] md:text-[50px] font-bold leading-tight text-[#a30000]">
              Crafting <br /> Safety with <br /> Security
            </h1>

            <div className="w-16 md:w-20 h-[3px] bg-[#7a0000] mt-4 mb-6"></div>

            <p className="text-[16px] md:text-[18px] leading-7 text-gray-700">
              Fire doors and safety solutions serve diverse needs: commercial
              offices, healthcare facilities, schools, industrial sites,
              residential buildings, and hospitality venues, all requiring
              reliable protection that meets specific safety regulations.
            </p>
          </div>

          {/* RIGHT LARGE IMAGE */}
          <div className="md:w-1/2 border-[5px] border-[#a30000] p-1 shadow-xl">
            <img
              src="/images/doorA.jpg"
              alt="Fire Safety Door"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* THREE PRODUCT IMAGES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 md:mt-16">
          {[
            { src: "d1.png", label: "Metal Fire Rated Door" },
            { src: "d2.png", label: "Wooden Fire Rated Doors" },
            { src: "d3.png", label: "HMPS Doors" },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="border-[4px] border-[#7a0000] p-1">
                <img
                  src={`/images/${item.src}`}
                  alt={item.label}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="mt-3 text-[18px] md:text-[20px] font-semibold text-gray-800">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* KEY FEATURES */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-[26px] md:text-[30px] font-bold text-gray-900">
            KEY FEATURES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
            {[
              "Dual Fire Rating Options (60/120 Minutes)",
              "Advanced Intumescent Sealing System",
              "Premium Hardwood Construction with Fire-Rated Insulation",
              "120-Minute Fire Rating with Multi-Layer Construction",
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-[#a30000] text-[24px] md:text-[26px] font-bold">
                  ✔
                </span>
                <p className="text-gray-800 text-[16px] md:text-[18px]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-white text-gray-800">
        {/* TOP BRANDS */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-10 px-6 md:px-20 mt-20 pt-10">
          <Image src="/brands5.png" alt="Brand 5" width={140} height={70} />
          <Image src="/brands6.png" alt="Brand 6" width={140} height={70} />
        </div>

        {/* PAGE TITLE */}
        <div className="w-full px-6 md:px-16 pt-12 justify-center mt-20">
          <h1 className="text-[32px] sm:text-[42px] md:text-[58px] text-center font-bold text-[#b40000]">
            LED Lightings
          </h1>
        </div>

        {/* GRID SECTION */}
        <div className="w-full px-6 md:px-16 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {/* Use array to simplify mapping */}
          {[
            {
              type: "img",
              src: "/images/led_industrial1.jpg",
              alt: "Industrial LED 1",
            },
            {
              type: "text",
              title: "Industrial LED Lightings",
              desc: "It’s not just about lighting production lines, machinery, and stocks; it is also about providing light for people to work effectively.",
            },
            {
              type: "text",
              title: "Industrial LED Lightings",
              desc: "Industrial lighting is not just about lighting production lines and stocks; it is about providing light for people who need it.",
            },
            {
              type: "img",
              src: "/images/led_industrial2.jpg",
              alt: "Industrial LED 2",
            },
            {
              type: "text",
              title: "Commercial LED Lightings",
              desc: "Designed for offices, retail, hospitality, and public spaces with efficiency.",
            },
            {
              type: "img",
              src: "/images/led_commercial1.jpg",
              alt: "Commercial LED 1",
            },
            {
              type: "img",
              src: "/images/led_commercial2.jpg",
              alt: "Commercial LED 2",
            },
            {
              type: "text",
              title: "Commercial LED Lightings",
              desc: "Includes baselights, downlights, panel lights, and decorative fixtures.",
            },
            {
              type: "img",
              src: "/images/led_street1.jpg",
              alt: "Street LED 1",
            },
            {
              type: "text",
              title: "Street LED Lightings",
              desc: "LED luminaires for roads, parking, and highways with smart control.",
            },
            {
              type: "text",
              title: "Street LED Lightings",
              desc: "Flood lights cover a wider area with a well-defined mount position.",
            },
            {
              type: "img",
              src: "/images/led_street2.jpg",
              alt: "Street LED 2",
            },
            {
              type: "text",
              title: "FACADE Lighting",
              desc: "Enhances architectural appeal with energy-efficient lighting.",
            },
            {
              type: "img",
              src: "/images/led_facade1.jpg",
              alt: "Facade LED 1",
            },
            {
              type: "img",
              src: "/images/led_facade2.jpg",
              alt: "Facade LED 2",
            },
            {
              type: "text",
              title: "RGB FACADE Lighting",
              desc: "Create dynamic RGB lighting effects including baselights and linear lights.",
            },
          ].map((item, idx) =>
            item.type === "img" ? (
              <img
                key={idx}
                src={item.src}
                alt={item.alt}
                className="w-full h-56 sm:h-64 object-cover rounded-lg shadow"
              />
            ) : (
              <div
                key={idx}
                className="bg-[#b40000] text-white p-4 sm:p-6 rounded-lg shadow text-center flex flex-col justify-center"
              >
                <h3 className="text-lg sm:text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base mt-2 sm:mt-3 leading-5 sm:leading-6">
                  {item.desc}
                </p>
              </div>
            )
          )}
        </div>

        {/* BOTTOM TITLE */}
        <div className="flex justify-center items-center px-6 md:px-20 mt-12 md:mt-20 pt-10">
          <Image
            src="/brands4.png"
            alt="Bhawani Fire Logo"
            width={160}
            height={80}
          />
        </div>

        <div className="w-full px-6 md:px-16 pt-8 md:pt-12">
          <h1 className="text-[28px] sm:text-[36px] md:text-[54px] font-bold text-[#b40000] leading-tight">
            DOOR HARDWARES / <br /> SECURITY FUNCTIONS
          </h1>
          <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-lg text-gray-700 max-w-4xl">
            We offer easy-to-use and reliable door hardware products to help
            keep buildings safe and secure. Our range includes panic bars,
            automatic sliding doors, door closers, and electronic door locks,
            all designed to make entry and exit simple and safe. These trusted
            solutions work well in many types of places, giving you peace of
            mind with modern security features and dependable service.
          </p>
        </div>

        {/* MAIN PANIC BAR SECTION */}
        <div className="w-full px-6 md:px-16 mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          {/* Left – Panic Bar Image + Label */}
          <div className="relative">
            <img
              src="/panic bars.png"
              alt="Panic Bars"
              className="w-full h-64 sm:h-72 md:h-80 rounded-lg shadow"
            />
          </div>

          {/* Right – Red Text Block */}
          <div className="bg-white p-4 sm:p-8 rounded-lg shadow relative border border-gray-200">
            <h3 className="text-[#b40000] text-lg sm:text-2xl font-bold mb-3 sm:mb-4">
              TRUSTED DOORS & SECURITY SOLUTIONS
            </h3>
            <ul className="text-[#b40000] text-base sm:text-lg space-y-1 sm:space-y-2">
              <li>• Panic Bars & Exit Devices</li>
              <li>• Door Closers & Hinges</li>
              <li>• Electronic Access Control</li>
              <li>• Commercial Security Systems</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM 3 IMAGE GRID */}
        <div className="w-full px-6 md:px-16 mt-8 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {[
            { src: "/sliding door.png", label: "Automatic Sliding Doors" },
            { src: "/closer.png", label: "Door Closers" },
            {
              src: "/edoor lock.png",
              label: "Electronic Door Locks",
            },
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <img
                src={item.src}
                alt={item.label}
                className="w-[400] h-56 sm:h-72 md:h-80 object-cover rounded-lg shadow"
              />
              <h3 className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-lg sm:text-xl font-semibold text-white drop-shadow-lg">
                {item.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
