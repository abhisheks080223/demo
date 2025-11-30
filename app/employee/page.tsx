"use client";
import React, { useEffect } from "react";

export default function FounderAndTeam() {
  useEffect(() => {
    const sections = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1 }
    );
    sections.forEach((sec) => observer.observe(sec));
  }, []);

  return (
    <div className="min-h-screen bg-white flex justify-center py-6 px-3 sm:px-4 print:px-10">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg overflow-hidden relative print:shadow-none">
        {/* LEFT STRIPE */}
        <div className="absolute left-0 top-0 h-full w-2 sm:w-2.5 bg-[#B30000]" />

        {/* CONTENT */}
        <div className="p-6 sm:p-10">
          {/* ===============================
              FOUNDER SECTION
          =============================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 reveal fade-slide">
            {/* LOGO + TITLE */}
            <div>
              <img
                src="/logo.jpeg"
                alt="Infinity Logo"
                className="h-20 sm:h-24 mb-4 sm:mb-6"
              />

              <h1 className="text-[#B30000] text-4xl sm:text-5xl font-bold leading-tight">
                From
                <br />
                Founders
                <br />
                Desks...
              </h1>

              <div className="mt-4 sm:mt-6">
                <h2 className="text-[#B30000] text-xl sm:text-2xl font-semibold">
                  Vikas K Mathur
                </h2>
                <p className="italic text-gray-600 text-sm sm:text-base">
                  Founder & Managing Director
                </p>
              </div>
            </div>

            {/* FOUNDER IMAGE */}
            <div className="flex justify-center">
              <img
                src="/founders.png"
                alt="Founder"
                className="rounded-xl shadow-lg w-52 sm:w-72 h-auto object-cover"
              />
            </div>
          </div>

          {/* ===============================
              MESSAGE
          =============================== */}
          <div className="text-gray-800 text-base sm:text-lg leading-relaxed space-y-5 sm:space-y-6 mb-20 reveal fade">
            <p>
              When we started this business, it wasn't just about products; it
              was about protecting the people we care about. As a company, we
              carefully choose which safety solutions to bring to you.
            </p>

            <p>
              Every fire curtain and fire door we distribute represents our
              promise to help keep your loved ones safe. We don't just sell
              products; we partner with manufacturers who share our commitment
              to quality and reliability.
            </p>

            <p>
              When you call us about protecting your office, school, or home, we
              see the real people behind that request. That's why we work
              tirelessly to connect you with solutions that truly make a
              difference.
            </p>
          </div>

          {/* ===============================
              TEAM SECTION
          =============================== */}
          <div className="mb-10 reveal fade-slide text-center sm:text-left">
            <h2 className="text-[#B30000] text-3xl sm:text-4xl font-bold mb-2">
              Meet Our Expert.
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl">
              Professional Team
            </p>
          </div>

          {/* ===============================
              TEAM CARDS
          =============================== */}
          <div className="space-y-14 sm:space-y-16">
            {/* CARD TEMPLATE */}
            {[
              {
                img: "/founders.png",
                name: "Vikas K Mathur",
                role: "Founder & Managing Director",
                desc: "23+ years of experience in Sales & Marketing with expertise in door hardware, glass and fire & safety products.",
              },
              {
                img: "/expert1.png",
                name: "Bharti Manchanda",
                role: "Chief Operating Officer",
                desc: "12 years of experience in Office Management & Finance ensuring smooth operations and financial excellence.",
              },
              {
                img: "/expert2.png",
                name: "Manisha Dasgupta",
                role: "National Head - Business Development",
                desc: "24+ years in Marketing & Sales, leading national business development strategies and client relations.",
              },
              {
                img: "/expert3.png",
                name: "Rakesh Sharma",
                role: "Senior Project Manager",
                desc: "15+ years of experience in large-scale fire safety project execution and leadership.",
              },
              {
                img: "/expert4.png",
                name: "Priya Verma",
                role: "Finance & Admin Head",
                desc: "Expert in financial planning, budgeting, and administrative operations for structured growth.",
              },
              {
                img: "/expert5.png",
                name: "Suresh Khanna",
                role: "Technical Head – Safety Solutions",
                desc: "Specialist in fire safety technologies with 18+ years of implementation expertise.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 items-center gap-6 sm:gap-8 reveal fade text-center sm:text-left"
              >
                <div className="flex justify-center sm:block">
                  <img
                    src={member.img}
                    className="w-36 h-36 sm:w-48 sm:h-48 rounded-full object-cover shadow-md"
                  />
                </div>
                <div className="sm:col-span-2">
                  <h3 className="text-[#B30000] text-xl sm:text-2xl font-semibold">
                    {member.name}
                  </h3>
                  <p className="font-medium text-gray-700 mb-2 text-sm sm:text-base">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* FOOTER MESSAGE */}
          <p className="text-center mt-20 text-gray-500 text-xs sm:text-sm italic reveal fade">
            “Our greatest achievements come from the strength of our team —
            united by purpose, driven by excellence.”
          </p>
        </div>

        {/* ANIMATION STYLES */}
        <style>{`
          .reveal { opacity: 0; transform: translateY(30px); transition: 0.8s ease; }
          .reveal.active { opacity: 1; transform: translateY(0); }

          .fade-slide { opacity: 0; transform: translateY(40px); transition: 1s ease; }
          .fade-slide.active { opacity: 1; transform: translateY(0); }

          @media print {
            .no-print { display: none !important; }
            body { background: white !important; }
          }
        `}</style>
      </div>
    </div>
  );
}
