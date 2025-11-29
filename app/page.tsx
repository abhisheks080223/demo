import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full font-sans text-gray-900">
      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h4 className="text-sm uppercase tracking-widest text-gray-500">
            Welcome To{" "}
            <span className="text-blue-600">Infinity Engineerings</span>
          </h4>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
            We Specialize in
            <br />
            <span className="text-blue-600">Engineering & Infrastructure</span>
          </h1>

          <p className="mt-4 text-gray-600 max-w-md">
            Providing innovative engineering solutions focused on quality,
            safety, and long-lasting infrastructure development.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <div>
              <h3 className="text-xl font-bold">4.9/5</h3>
              <p className="text-gray-500 text-sm">Client Rating</p>
            </div>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
              Get To Know Us
            </button>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/infinity-hero.jpg"
            alt="Infinity Engineerings"
            width={500}
            height={500}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </section>

      {/* ================= CLIENT LOGOS ================= */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto flex justify-center gap-10 flex-wrap opacity-90">
          {[
            "/jll.jpg",
            "/zara.png",
            "/dlf.png",
            "/itc.jpg",
            "/max.avif",
            "/sptl.jpeg",
            "/holidayinn.jpg",
            "/shell.png",
          ].map((logo, i) => (
            <div
              key={i}
              className="w-28 grayscale hover:grayscale-0 transition"
            >
              <Image
                src={logo}
                alt="Client Logo"
                width={100}
                height={50}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT / SUCCESS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div className="relative">
          <Image
            src="/engineers.jpg"
            alt="Team Image"
            width={500}
            height={350}
            className="rounded-xl shadow-md"
          />
        </div>

        <div>
          <h3 className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
            We Are Infinity
          </h3>

          <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-tight">
            Your Engineering Partner
            <br />
            <span className="text-blue-600">For Success</span>
          </h2>

          <p className="mt-4 text-gray-600">
            Delivering world-class engineering, structural design, project
            execution, and infrastructure development with unmatched expertise.
          </p>

          <div className="grid grid-cols-3 mt-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">15+</h3>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600">250+</h3>
              <p className="text-sm text-gray-500">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600">120+</h3>
              <p className="text-sm text-gray-500">Trusted Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-blue-600 font-semibold uppercase tracking-widest text-sm text-center">
            We Provide
          </h3>

          <h2 className="text-3xl md:text-4xl font-bold text-center mt-2">
            Real Engineering Services For You
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
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
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="text-4xl">{s.icon}</div>
                <h3 className="text-xl font-semibold mt-2">{s.title}</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-blue-600 uppercase tracking-widest text-sm">
            How We Work
          </h3>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Check Out The Easy Way
            <br />
            To Get Our Services
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We follow a simple, effective, and transparent 3-step workflow to
            deliver the best engineering solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
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
