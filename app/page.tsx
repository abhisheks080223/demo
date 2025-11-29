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
    </div>
  );
}
