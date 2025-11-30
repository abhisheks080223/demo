"use client";

import Image from "next/image";
import { useState } from "react";
import AboutUs from "@/components/about-us";
import Brands from "@/components/brands";
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <div className="w-full font-sans text-gray-900 bg-white">
      {/* ================= FIXED HEADER ================= */}
      <header className="w-full fixed top-0 left-0 z-50 flex justify-center py-4 px-4 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="w-full max-w-7xl bg-[#f4efff] rounded-full px-4 py-3 flex items-center justify-between shadow-sm">
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
            <a href="/employee" className="hover:text-black">
              Employee
            </a>
            <a href="/portfolio" className="hover:text-black">
              Portfolio
            </a>
            <a href="/products" className="hover:text-red-600">
              Products
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-2xl"
            >
              {mobileMenuOpen ? "✖" : "☰"}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-40">
              <nav className="flex flex-col gap-2 px-4 py-4 text-gray-700 font-medium">
                <a href="#" onClick={toggleMenu} className="hover:text-red-600">
                  Home
                </a>
                <a
                  href="/employee"
                  onClick={toggleMenu}
                  className="hover:text-red-600"
                >
                  Employee
                </a>
                <a
                  href="/portfolio"
                  onClick={toggleMenu}
                  className="hover:text-red-600"
                >
                  Portfolio
                </a>
                <a
                  href="/products"
                  onClick={toggleMenu}
                  className="hover:text-red-600"
                >
                  Products
                </a>
                <button
                  onClick={toggleMenu}
                  className="bg-black text-white px-5 py-2 rounded-full mt-2"
                >
                  Contact Us
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
      {/* Add padding so content doesn't hide behind fixed header */}
      <div className="pt-[110px]">
        {/* ================= HERO SECTION ================= */}
        <section className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT TEXT */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gray-500">
              Welcome To{" "}
              <span className="text-red-600">Infinity Engineerings</span>
            </h4>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-2">
              We Specialize in <br />
              <span className="text-red-600">Engineering & Infrastructure</span>
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

              <button className="px-5 py-2 bg-red-600 text-white rounded-full shadow text-sm hover:bg-red-700">
                Get To Know Us
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE + CARDS */}
          <div className="relative w-full flex justify-center md:pr-60">
            <div className="absolute top-5 right-1/2 translate-x-1/2 md:right-0 md:translate-x-0 w-[260px] h-[340px] sm:w-[400px] sm:h-[430px] bg-linear-to-b from-red-300/50 to-red-900 rounded-3xl"></div>

            <Image
              src="/girl.png"
              alt="Hero Woman"
              width={380}
              height={460}
              className="relative z-10 rounded-xl object-cover w-[260px] sm:w-[300px] md:w-[380px]"
            />

            {/* Floating Cards */}
            <div className="absolute right-0 md:-right-10 top-4 sm:top-10 z-20 space-y-4 pr-20 sm:space-y-6">
              <div className="bg-white w-40 sm:w-48 p-3 sm:p-4 rounded-2xl shadow-lg">
                <h2 className="text-lg sm:text-xl font-bold">4.9/5</h2>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  Delivering precision, innovation & expertise.
                </p>
                <div className="text-yellow-500 mt-1 sm:mt-2 text-sm sm:text-base">
                  ★★★★★
                </div>
              </div>

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
        {/* ===== ABOUT GRID ===== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/collab.png"
            alt="Team Image"
            width={500}
            height={350}
            className="rounded-xl shadow-md object-cover w-full h-auto"
          />

          <div>
            <h3 className="text-red-600 font-semibold uppercase tracking-widest text-xs sm:text-sm">
              We Are Infinity
            </h3>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 leading-tight">
              Your Engineering Partner
              <br />
              <span className="text-red-600">For Success</span>
            </h2>

            <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base">
              Delivering world-class engineering, structural design, project
              execution, and infrastructure development with unmatched
              expertise.
            </p>

            <div className="grid grid-cols-3 mt-6 sm:mt-8 text-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-red-600">
                  15+
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Years Experience
                </p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-red-600">
                  250+
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Projects Completed
                </p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-red-600">
                  120+
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Trusted Clients
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION COMPONENT */}
        <AboutUs />
        <Brands />

        {/* Header */}
        <section className="text-center py-10 mt-20 px-4">
          <h1 className="text-3xl sm:text-4xl font-bold">
            OUR <span className="text-red-600">SITC PROJECT</span> SERVICES
          </h1>
        </section>

        {/* Services Grid */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 px-4">
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
              piping, and assembly, so you can avoid the technical complexities.
            </p>
          </div>

          {/* 03 Testing */}
          <div className="bg-red-600 text-white p-6 rounded-xl relative">
            <div className="absolute -top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-md font-bold">
              03
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Testing</h2>
            <p className="text-sm sm:text-base">
              Before handover, we perform thorough checks on all components,
              including performance and safety tests, to ensure they meet
              required standards, like inspecting new equipment before
              ownership.
            </p>
          </div>

          {/* 04 Commissioning */}
          <div className="bg-[#0d1b2a]  text-white p-6 rounded-xl relative">
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
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="w-full h-60 sm:h-72 md:h-80 relative rounded-xl overflow-hidden">
              <Image
                src="/collab.png"
                alt="Team meeting"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Collaboration
              </h2>
              <p className="text-sm sm:text-base leading-relaxed">
                SITC project services manage the entire process, providing and
                installing equipment, testing functionality, and ensuring smooth
                daily operation. It's akin to buying a car where the dealer
                delivers, sets up, and hands over the keys ready to drive.
              </p>
            </div>
          </div>
        </section>
        {/* ================= CLIENT LOGOS ================= */}
        <div className="w-full bg-white min-h-screen mt-10 text-black font-sans flex flex-col items-center py-10 mt-20 px-4">
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
          <div className="flex justify-center items-center px-6 md:px-20 ">
            <Image
              src="/india.png"
              alt="India Map"
              width={700}
              height={100}
              className="w-[800] h-auto"
            />
          </div>

          <section className="px-4 sm:px-8 py-10 max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">
              THANK YOU
            </h1>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-10">
              We appreciate your interest and look forward to the opportunity to
              work together to achieve exceptional results. If you have any
              questions or would like to discuss next steps, please reach out
              through the contact information below.
            </p>

            {/* Offices */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 mb-10">
              <div>
                <h3 className="font-bold text-red-600 mb-2">Head Office</h3>
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
                  Centre of Health, Pitampura,
                  <br />
                  North West Delhi,
                  <br />
                  New Delhi – 110034
                </p>
              </div>
              <div>
                <h3 className="font-bold text-red-600 mb-2">Our Branches</h3>
                <ul className="list-disc ml-5 text-sm sm:text-base">
                  <li>Mumbai</li>
                  <li>Bengaluru</li>
                  <li>Hyderabad</li>
                  <li>Chennai</li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-4">
              GET IN TOUCH:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 mb-10">
              <div>
                <p className="font-bold text-sm sm:text-base">
                  📞 Phone Number
                </p>
                <p className="text-sm sm:text-base">+91-9718170004</p>
              </div>
              <div>
                <p className="font-bold text-sm sm:text-base">🌐 Website</p>
                <p className="text-sm sm:text-base">
                  www.infinityengineerings.com
                </p>
              </div>
              <div>
                <p className="font-bold text-sm sm:text-base">📧 Email</p>
                <p className="text-sm sm:text-base">
                  sales@infinityengineerings.com
                </p>
              </div>
            </div>

            {/* Address */}
            <div>
              <p className="font-bold text-sm sm:text-base">📍 Address</p>
              <p className="text-sm sm:text-base">
                3rd FLOOR, Jmd Regent Arcade Mall A- Block, Dlf Phase-1,
                Sector-28 Gurugram, Haryana 122002
              </p>
            </div>
          </section>
        </div>
      </div>{" "}
      {/* END padding wrapper */}
    </div>
  );
}
