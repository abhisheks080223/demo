  "use client";

  import Image from "next/image";
  import { useState, useEffect, useRef } from "react";
  import AboutUs from "@/components/about-us";
  import Brands from "@/components/brands";
  import Portfolio from "@/components/portfolio";
  import { motion } from "framer-motion";
  import { gsap } from "gsap";
  import "./globals.css";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import Header from "./components/header";

  gsap.registerPlugin(ScrollTrigger);

  export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const text = "OUR SITC PROJECT SERVICES".split("");
    const rootRef = useRef(null);
    const imgWrapperRef = useRef(null);
    const btnRef = useRef(null);
    const cursorRef = useRef<HTMLDivElement | null>(null);

    const toggleMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
    };

    /* ================= GSAP EFFECTS ================= */
    useEffect(() => {
      const ctx = gsap.context(() => {
        gsap.from(".hero-main-img", { x: 80, opacity: 0, duration: 1 });

        gsap.to(".hero-main-img", {
          y: -10,
          duration: 3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

        gsap.from(".hero-floating-card", {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.18,
          ease: "power3.out",
          delay: 0.6,
        });

        ScrollTrigger.create({
          trigger: ".hero-wrapper",
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
          onUpdate: (self) => {
            const v = self.progress;
            gsap.to(".hero-main-img", { y: -40 * v, overwrite: true });
            gsap.to(".hero-bg-accent", {
              y: 20 * v,
              scale: 1 + 0.05 * v,
              overwrite: true,
            });
          },
        });

        gsap.utils.toArray(".hero-floating-card").forEach((el, i) => {
          gsap.to(el as HTMLElement, {
            y: 6,
            x: i % 2 === 0 ? -4 : 4,
            duration: 2 + (i % 3) * 0.6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 0.2 * i,
          });
        });

        /* ========== CUSTOM CURSOR ========== */
        const cursorEl = document.createElement("div");
        cursorEl.className = "custom-cursor";
        cursorEl.style.position = "fixed";
        cursorEl.style.pointerEvents = "none";
        cursorEl.style.width = "80px";
        cursorEl.style.height = "80px";
        cursorEl.style.borderRadius = "50%";
        cursorEl.style.background =
          "radial-gradient(circle, rgba(179,0,0,0.22), rgba(179,0,0,0.08) 40%, rgba(0,0,0,0))";
        cursorEl.style.mixBlendMode = "screen";
        cursorEl.style.opacity = "0.6";
        cursorEl.style.transform = "translate(-50%, -50%)";
        cursorEl.style.zIndex = "9999";
        document.body.appendChild(cursorEl);

        cursorRef.current = cursorEl;

        window.addEventListener("mousemove", (e) => {
          cursorEl.style.left = `${e.clientX}px`;
          cursorEl.style.top = `${e.clientY}px`;
        });
      }, rootRef);

      return () => ctx.revert();
    }, []);

    /* ================= RENDER ================= */
    return (
      <>
        <div className="w-full font-sans text-gray-900 pt-[100]  bg-white">
          {/* HERO SECTION */}
          <section
            ref={rootRef}
            className="hero-wrapper max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10 items-center relative"
          >
            {/* TEXT LEFT */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-500">
                Welcome To{" "}
                <span className="text-red-600">Infinity Engineerings</span>
              </h4>

              <h1 className="text-4xl font-bold mt-2 leading-tight">
                We Specialize in <br />
                <span className="text-red-600">
                  Engineering & Infrastructure
                </span>
              </h1>

              <p className="mt-4 text-gray-600 max-w-md">
                Providing innovative engineering solutions with quality &
                safety.
              </p>

              <div className="mt-6 flex items-center gap-4">
                <button ref={btnRef}>
                  <video
                    src="/demo.mp4"
                    autoPlay
                    loop
                    muted
                    className="w-130 h-70  object-cover"
                  />
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE FIXED */}
            <div className="relative w-full flex justify-center md:justify-end">
              {/* Smooth Background Gradient Box */}
              <div
                className="
    hero-bg-accent absolute 
    top-10 md:top-5 
    right-4 md:right-0 
    w-[260px] sm:w-[320px] md:w-[420px] 
    h-[320px] sm:h-[380px] md:h-[420px] 
    bg-gradient-to-b from-red-200/40 to-red-800/50 
    rounded-3xl
  "
              ></div>

              {/* Main Girl Image */}
              <div className="relative z-10 overflow-visible">
                <Image
                  src="/girl.png"
                  alt="Hero Woman"
                  width={380}
                  height={460}
                  className="
      hero-main-img 
      w-[180px] sm:w-[280px] md:w-[360px] 
      relative z-20 drop-shadow-xl 
      pt-40 sm:pt-10
      -left-10 sm:-left-20 md:-left-36
    "
                />
              </div>

              {/* Floating Cards */}
              <div
                className="
    absolute 
    right-0 top-5 
    flex flex-col gap-4 
    scale-90 sm:scale-95 md:scale-100 
    z-30
  "
              >
                {/* Rating card */}
                <div className="hero-floating-card bg-white p-4 rounded-2xl shadow-lg w-48">
                  <h2 className="text-xl font-bold">4.9/5</h2>
                  <p className="text-gray-500 text-sm">
                    Delivering precision & expertise.
                  </p>
                </div>

                {/* Profile Images */}
                <div className="hero-floating-card bg-white flex items-center gap-3 p-3 rounded-full shadow-md w-max">
                  <Image
                    src="/avg.avif"
                    width={32}
                    height={32}
                    className="rounded-full"
                    alt=""
                  />
                  <Image
                    src="/avg2.webp"
                    width={32}
                    height={32}
                    className="rounded-full"
                    alt=""
                  />
                  <Image
                    src="/avg3.webp"
                    width={32}
                    height={32}
                    className="rounded-full"
                    alt=""
                  />
                  <div className="w-7 h-7 rounded-full bg-purple-500 text-white flex items-center justify-center">
                    +
                  </div>
                </div>

                {/* Business Info */}
                <div className="hero-floating-card bg-white p-4 rounded-xl shadow-lg">
                  <h3 className="text-lg font-semibold leading-tight">
                    Get To Know
                    <br />
                    Our Business
                  </h3>
                  <p className="text-gray-500 text-sm">Let’s Get Started →</p>
                </div>
              </div>
            </div>
          </section>

          {/* MINI CSS */}
          <style>{`
          .magnetic-btn { will-change: transform; }
        `}</style>
          <div className="h-20 md:h-32"></div>

          {/* OTHER SECTIONS */}
          <AboutUs />
          <Portfolio />
          <Brands />

          {/* Header */}
          <section className="text-center py-10 mt-20 px-4">
            <motion.h1
              className="text-3xl sm:text-4xl font-bold flex justify-center flex-wrap"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.05 } },
              }}
            >
              {text.map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: "easeOut" },
                    },
                  }}
                  className={
                    ["S", "I", "T", "C"].includes(char) ? "text-red-600" : ""
                  }
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
          </section>

          {/* Services Grid */}
          <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 px-4 mb-30">
            {/* 01 Supply */}
            <div className="bg-[#0d1b2a] text-white p-6 rounded-xl relative">
              <div className="absolute -top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-md font-bold">
                01
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">Supply</h2>
              <p className="text-sm sm:text-base">
                We provide all equipment, materials, and components for your
                project, managing procurement, quality checks, logistics, and
                timely delivery to meet your specifications.
              </p>
            </div>

            {/* 02 Installation */}
            <div className="bg-red-600 text-white p-6 rounded-xl relative">
              <div className="absolute -top-3 left-3 bg-[#0d1b2a] text-white px-3 py-1 rounded-md font-bold">
                02
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                Installation
              </h2>
              <p className="text-sm sm:text-base">
                Our skilled technicians manage the setup and connection of all
                equipment at your location, taking care of mounting, wiring,
                piping, and assembly, so you can avoid the technical
                complexities.
              </p>
            </div>

            {/* 03 Testing */}
            <div className="bg-red-600 text-white p-6 rounded-xl relative">
              <div className="absolute -top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-md font-bold">
                03
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                Testing
              </h2>
              <p className="text-sm sm:text-base">
                Before handover, we perform thorough checks on all components,
                including performance and safety tests, to ensure they meet
                required standards, like inspecting new equipment before
                ownership.
              </p>
            </div>

            {/* 04 Commissioning */}
            <div className="bg-[#0d1b2a]  text-white p-6 rounded-xl  relative">
              <div className="absolute -top-3 left-3 bg-[#0d1b2a] text-white px-3 py-1 rounded-md font-bold">
                04
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                Commissioning
              </h2>
              <p className="text-sm sm:text-base">
                We refine systems and train your team for confident operation,
                ensuring smooth daily functions, optimal performance, and
                effective use of new equipment.
              </p>
            </div>
          </section>

          {/* Collaboration Section */}
          <section className="mt-10 bg-red-600 w-[1200px] max-w-full mx-auto flex flex-col items-center justify-center text-white p-6 sm:p-10 rounded-lg">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                visible: { transition: { staggerChildren: 0.25 } },
              }}
              className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
            >
              {/* LEFT IMAGE */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -40 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                }}
                className="w-full h-60 sm:h-72 md:h-80 relative rounded-xl overflow-hidden"
              >
                <Image
                  src="/collab.png"
                  alt="Team meeting"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* RIGHT TEXT */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 40 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                }}
              >
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                  Collaboration
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  SITC project services manage the entire process, providing and
                  installing equipment, testing functionality, and ensuring
                  smooth daily operation. It's akin to buying a car where the
                  dealer delivers, sets up, and hands over the keys ready to
                  drive.
                </p>
              </motion.div>
            </motion.div>
          </section>

          {/* ================= CLIENT LOGOS ================= */}
          <div className="w-full bg-white min-h-screen  text-black font-sans flex flex-col items-center py-10 mt-20 px-4">
            <h1 className="text-3xl sm:text-4xl font-bold">
              OUR <span className="text-red-600">CLIENTS</span>
            </h1>

            <div className="relative w-full bg-white text-black flex flex-col items-center py-12 px-4">
              <div className="relative w-full py-10">
                <div className="absolute inset-0 flex items-center justify-center opacity-50">
                  <Image
                    src="/logobg.png"
                    alt="Background Logo"
                    width={800}
                    height={800}
                    className="object-contain"
                  />
                </div>

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
          </div>

          {/* Thank You Section */}
          <div className="w-full bg-white text-black font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              {/* ================= THANK YOU SECTION ================= */}
              <motion.div
                className="w-full bg-white text-black font-sans mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, staggerChildren: 0.2 },
                  },
                }}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                  {/* MAP */}
                  <div className="flex justify-center items-center mb-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Image
                        src="/india.png"
                        alt="India Map"
                        width={700}
                        height={100}
                        className="w-[800px] h-auto"
                      />
                    </motion.div>
                  </div>

                  {/* HEADING */}
                  <motion.h1
                    className="text-3xl sm:text-4xl font-bold text-red-600 mb-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    THANK YOU
                  </motion.h1>

                  {/* PARAGRAPH */}
                  <motion.p
                    className="text-sm sm:text-base text-gray-700 leading-relaxed mb-10 max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    We appreciate your interest and look forward to the
                    opportunity to work together to achieve exceptional results.
                    If you have any questions or would like to discuss next
                    steps, please reach out through the contact information
                    below.
                  </motion.p>

                  {/* OFFICES */}
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <div>
                      <h3 className="font-bold text-red-600 mb-2">
                        Head Office
                      </h3>
                      <p className="text-sm sm:text-base">
                        <b>INFINITY ENGINEERINGS</b>
                        <br />
                        3rd Floor, JMD Regent Arcade Mall,
                        <br />
                        A – Block, DLF Phase – 1,
                        <br />
                        Sector – 28, Gurugram,
                        <br />
                        Haryana – 122002
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-red-600 mb-2">
                        Corporate Office
                      </h3>
                      <p className="text-sm sm:text-base">
                        <b>INFINITY ENGINEERINGS</b>
                        <br />
                        Building No. 72A, G & JU,
                        <br />
                        Maharaja Agrasen Marg,
                        <br />
                        Pitampura, New Delhi – 110034
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-red-600 mb-2">
                        Our Branches
                      </h3>
                      <ul className="list-disc ml-5 text-sm sm:text-base">
                        <li>Mumbai</li>
                        <li>Bengaluru</li>
                        <li>Hyderabad</li>
                        <li>Chennai</li>
                      </ul>
                    </div>
                  </motion.div>

                  {/* CONTACT */}
                  <motion.div
                    className="mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-4">
                      GET IN TOUCH:
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
                      <div>
                        <p className="font-bold text-sm sm:text-base">
                          📞 Phone Number
                        </p>
                        <p className="text-sm sm:text-base">+91-9718170004</p>
                      </div>

                      <div>
                        <p className="font-bold text-sm sm:text-base">
                          🌐 Website
                        </p>
                        <p className="text-sm sm:text-base">
                          www.infinityengineerings.com
                        </p>
                      </div>

                      <div>
                        <p className="font-bold text-sm sm:text-base">
                          📧 Email
                        </p>
                        <p className="text-sm sm:text-base">
                          sales@infinityengineerings.com
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* ADDRESS */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <p className="font-bold text-sm sm:text-base">📍 Address</p>
                    <p className="text-sm sm:text-base pb-10">
                      3rd FLOOR, JMD Regent Arcade Mall A-Block, DLF Phase-1,
                      Sector-28 Gurugram, Haryana 122002
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </>
    );
  }





