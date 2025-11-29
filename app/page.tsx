import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full font-sans text-gray-900 bg-white">
      {/* ================= HEADER ================= */}
      <header className="w-full flex justify-center py-4 px-4">
        <div className="w-full mt-3 max-w-7xl bg-[#f4efff] rounded-full px-4 py-3 flex items-center justify-between shadow-sm">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.jpeg"
              alt="Logo"
              width={36}
              height={36}
              className="object-contain"
            />
            <span className="font-semibold text-lg sm:text-xl">
              Infinity Engineering
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
            <a href="#" className="hover:text-black">
              Home
            </a>
            <a href="#" className="hover:text-black">
              About Us
            </a>
            <a href="#" className="hover:text-black">
              Service
            </a>

            {/* Dropdown */}
            <div className="relative group cursor-pointer">
              <div className="flex items-center gap-1 hover:text-black">
                Pages <span>▾</span>
              </div>
              <div className="hidden group-hover:block absolute top-7 left-0 bg-white rounded-md shadow-md p-3 text-sm w-32">
                <a href="#" className="block py-1 hover:text-blue-600">
                  Page 1
                </a>
                <a href="#" className="block py-1 hover:text-blue-600">
                  Page 2
                </a>
                <a href="#" className="block py-1 hover:text-blue-600">
                  Page 3
                </a>
              </div>
            </div>
          </nav>

          {/* Contact Button */}
          <button className="hidden md:block bg-black text-white px-5 py-2 rounded-full">
            Contact Us
          </button>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT TEXT */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-gray-500">
            Welcome To{" "}
            <span className="text-blue-600">Infinity Engineerings</span>
          </h4>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-2">
            We Specialize in <br />
            <span className="text-blue-600">Engineering & Infrastructure</span>
          </h1>

          <p className="mt-4 text-gray-600 max-w-md text-sm sm:text-base">
            Providing innovative engineering solutions focused on quality,
            safety, and long-lasting infrastructure.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <div>
              <h3 className="text-xl font-bold">4.9/5</h3>
              <p className="text-gray-500 text-xs">Client Rating</p>
            </div>

            <button className="px-5 py-2 bg-blue-600 text-white rounded-full shadow text-sm hover:bg-blue-700">
              Get To Know Us
            </button>
          </div>
        </div>

        {/* RIGHT WITH IMAGE + CARDS */}
        <div className="relative w-full flex justify-center md:pr-20">
          {/* Background Shape */}
          <div className="absolute top-5 right-1/2 translate-x-1/2 md:right-0 md:translate-x-0 w-[260px] h-[340px] sm:w-[300px] sm:h-[380px] bg-gradient-to-b from-purple-300/50 to-purple-100 rounded-3xl"></div>

          {/* Main Image */}
          <Image
            src="/girl.png"
            alt="Hero Woman"
            width={380}
            height={460}
            className="relative z-10 rounded-xl object-cover w-[260px] sm:w-[300px] md:w-[380px]"
          />

          {/* Floating Cards */}
          <div className="absolute right-0 md:right-[-40px] top-4 sm:top-10 z-20 space-y-4 sm:space-y-6">
            {/* Rating Card */}
            <div className="bg-white w-40 sm:w-48 p-3 sm:p-4 rounded-2xl shadow-lg">
              <h2 className="text-lg sm:text-xl font-bold">4.9/5</h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Delivering precision, innovation & expertise.
              </p>
              <div className="text-yellow-500 mt-1 sm:mt-2 text-sm sm:text-base">
                ★★★★★
              </div>
            </div>

            {/* Avatar Row */}
            <div className="bg-white flex items-center gap-2 sm:gap-3 p-2 px-3 rounded-full shadow-md w-max">
              <div className="flex -space-x-2 sm:-space-x-3">
                <Image
                  src="/avg.avif"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                  alt="avatar"
                />
                <Image
                  src="/avg2.webp"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                  alt="avatar"
                />
                <Image
                  src="/avg3.webp"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                  alt="avatar"
                />
              </div>
              <div className="w-7 h-7 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm">
                +
              </div>
            </div>

            {/* Text */}
            <div className="ml-1">
              <h3 className="text-lg sm:text-xl font-semibold leading-tight">
                Get To Know <br /> Our Business
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
                Let's Get Started →
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* Rest of your sections stay the same — they are already responsive */}
      {/* ========================================================= */}
      {/* ================= CLIENT LOGOS ================= */}
      <div className="w-full bg-white min-h-screen mt-10   text-black font-sans flex flex-col items-center py-10 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold">
          OUR <span className="text-red-600">CLIENTS</span>
        </h1>
        <div className="relative w-full bg-white text-black flex flex-col items-center py-12 px-4">
          {/* Background Logo */}
          <div className="relative w-full py-10">
            {/* Background Logo */}
            <div className="absolute inset-0 flex items-center justify-center opacity-50">
              <Image
                src="/logobg.png"
                alt="Background Logo"
                width={800}
                height={800}
                className="object-contain"
              />
            </div>

            {/* Clients Grid */}
            <div className="relative max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 sm:gap-20">
              {[
                "/jll.jpg",
                "/zara.png",
                "/dlf.png",
                "/itc.jpg",
                "/max.avif",
                "/sptl.jpeg",
                "/holidayinn.jpg",
                "/shell.png",
                "/colonade.jpg",
                "/boa.jpg",
                "/deloitte.png",
                "/samsung.png",
              ].map((src, idx) => (
                <div
                  key={idx}
                  className="relative w-28 sm:w-32 h-16 sm:h-20 mx-auto"
                >
                  <Image
                    src={src}
                    alt={`Client ${idx + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= ABOUT SECTION ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative max-w-xs sm:max-w-sm md:max-w-full mx-auto">
            <Image
              src="/collab.png"
              alt="Team Image"
              width={500}
              height={350}
              className="rounded-xl shadow-md object-cover w-full h-auto"
            />
          </div>

          <div>
            <h3 className="text-blue-600 font-semibold uppercase tracking-widest text-xs sm:text-sm">
              We Are Infinity
            </h3>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 leading-tight">
              Your Engineering Partner
              <br />
              <span className="text-blue-600">For Success</span>
            </h2>

            <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base">
              Delivering world-class engineering, structural design, project
              execution, and infrastructure development with unmatched
              expertise.
            </p>

            <div className="grid grid-cols-3 mt-6 sm:mt-8 text-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-600">
                  15+
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Years Experience
                </p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-600">
                  250+
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Projects Completed
                </p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-600">
                  120+
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Trusted Clients
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= SERVICES ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-blue-600 font-semibold uppercase tracking-widest text-xs sm:text-sm text-center">
            We Provide
          </h3>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-2">
            Real Engineering Services For You
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12">
            {[
              { title: "Structural Design", icon: "🏗️" },
              { title: "Project Planning", icon: "📊" },
              { title: "Construction Execution", icon: "👷" },
              { title: "Quality Inspection", icon: "🧪" },
              { title: "MEP Services", icon: "⚙️" },
              { title: "Consulting", icon: "📘" },
            ].map((s, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center"
              >
                <div className="text-3xl sm:text-4xl">{s.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mt-2">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-blue-600 uppercase tracking-widest text-xs sm:text-sm">
            How We Work
          </h3>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
            Check Out The Easy Way
            <br />
            To Get Our Services
          </h2>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            We follow a simple, effective, and transparent 3-step workflow to
            deliver the best engineering solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12">
            <div className="p-6 bg-white rounded-xl shadow text-center">
              <h3 className="text-lg font-bold">Consultation</h3>
              <p className="text-gray-500 mt-2 text-sm">
                Share your project details with us.
              </p>
            </div>

            <div className="p-6 bg-blue-600 text-white rounded-xl shadow text-center">
              <h3 className="text-lg font-bold">Choose Your Plan</h3>
              <p className="mt-2 text-sm">
                Select the best engineering service package.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow text-center">
              <h3 className="text-lg font-bold">Execution & Delivery</h3>
              <p className="text-gray-500 mt-2 text-sm">
                We deliver the project with quality & safety.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
