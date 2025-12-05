"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsPage() {
  useEffect(() => {
    gsap.utils.toArray(".fade-up").forEach((el: any) => {
      gsap.from(el, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      });
    });

    gsap.utils.toArray(".slide-up").forEach((el: any) => {
      gsap.from(el, {
        opacity: 0,
        y: 150,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: { trigger: el, start: "top 90%" },
      });
    });

    gsap.from(".zoom-image", {
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: { trigger: ".zoom-image", start: "top 80%" },
    });
  }, []);

  return (
    <>
      {/* ================= HEADER BANNER ================= */}
      <div className="w-full bg-white font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 text-center slide-up">
          <h3 className="fade-up text-red-600 text-xl sm:text-2xl md:text-3xl font-bold mb-3">
            ABOUT US
          </h3>

          <p className="fade-up text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg mb-8 max-w-4xl mx-auto">
            <span className="font-bold">INFINITY ENGINEERINGS</span>, a leading
            distributor of innovative building solutions since 2021, ensures
            safety, sustainability, and functionality in construction...
          </p>

          <h3 className="fade-up text-red-600 text-xl sm:text-2xl md:text-3xl font-bold mb-3">
            OUR VISION
          </h3>

          <p className="fade-up text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg mb-8 max-w-4xl mx-auto">
            We put safety first by creating quality products that protect people
            and buildings...
          </p>

          <h3 className="fade-up text-red-600 text-xl sm:text-2xl md:text-3xl font-bold mb-3">
            OUR MISSION
          </h3>

          <p className="fade-up text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg max-w-4xl mx-auto">
            At Infinity Engineerings, our mission is to provide cutting-edge
            solutions...
          </p>
        </div>
      </div>

      {/* ================= INTRODUCTION SECTION ================= */}
      <div className="w-full bg-white font-sans mt-6 sm:mt-10 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 slide-up">
          <h1 className="fade-up text-red-600 text-2xl sm:text-4xl md:text-5xl font-extrabold text-center">
            INTRODUCTION
          </h1>

          <h2 className="fade-up text-blue-900 text-xl sm:text-3xl md:text-4xl font-extrabold mt-2 text-center">
            ABOUT OUR COMPANY
          </h2>

          <div className="fade-up w-24 h-1 bg-blue-900 mt-3 mx-auto"></div>

          {/* Two Columns Responsive */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 max-w-5xl mx-auto">
            <p className="slide-up text-red-600 italic font-semibold text-base sm:text-lg md:text-xl leading-relaxed">
              “WE ENGINEER ADVANCED SOLUTIONS TO PROTECT LIVES...”
            </p>

            <p className="slide-up text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg">
              At <span className="font-semibold">Infinity Engineerings</span>,
              our mission is to set new benchmarks...
            </p>
          </div>
        </div>

        {/* Full Width Image Responsive */}
        <div className="mt-8 sm:mt-10  flex justify-center">
          <img
            src="/intro.jpeg"
            alt="Intro Image"
            className="zoom-image w-full sm:w-[90%] md:w-[800px] h-48 sm:h-64 md:h-80 object-cover rounded-lg"
          />
        </div>

        {/* Bottom Two Columns */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          <div className="slide-up bg-red-700 text-white px-4 sm:px-6 md:px-8 py-8 sm:py-10 shadow-lg rounded-lg">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
              WHAT WE OFFER?
            </h3>

            <div className="mt-5">
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold">
                FIRE & SMOKE PROTECTION
              </h4>
              <p className="mt-2 text-xs sm:text-sm md:text-base">
                Engineered curtains and barriers...
              </p>
            </div>

            <div className="mt-6 sm:mt-8">
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold">
                FIRE RATED DOOR
              </h4>
              <p className="mt-2 text-xs sm:text-sm md:text-base">
                Fire doors, acoustic partitions...
              </p>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-10">
            <div className="slide-up">
              <h4 className="text-red-700 text-lg sm:text-xl md:text-2xl font-bold">
                ADVANCED FIRE-RESISTANT GLASS
              </h4>
              <p className="mt-2 text-sm sm:text-base">
                Fire glass stays clear but transforms...
              </p>
            </div>

            <div className="slide-up">
              <h4 className="text-red-700 text-lg sm:text-xl md:text-2xl font-bold">
                LED LIGHTINGS
              </h4>
              <p className="mt-2 text-sm sm:text-base">
                Energy-efficient LED solutions...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
