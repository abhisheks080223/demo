"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// SCROLL ANIMATION VARIANTS
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function AssociatedBrands() {
  const brands = [
    {
      img: "/brands1.png",
      title: "Coopers Fire LTD.",
      subtitle: "Advanced fire and smoke curtains",
    },
    {
      img: "/brands2.png",
      title: "FireView Glasses",
      subtitle: "Fire resistant glasses",
    },
    {
      img: "/brands3.png",
      title: "Bhawani Fire Protection",
      subtitle: "Complete fire exit solutions",
    },
    {
      img: "/brands4.png",
      title: "Dormakaba India",
      subtitle: "Door & Security hardwares",
    },
    {
      img: "/brands5.png",
      title: "Panasonic Life Solutions",
      subtitle: "Complete LED lightings",
    },
    {
      img: "/brands6.png",
      title: "Havells India Ltd.",
      subtitle: "Complete LED lightings",
    },
  ];

  const Card = ({ img, title, subtitle }) => (
    <motion.div
      variants={cardAnim}
      whileHover={{
        scale: 1.04,
        boxShadow: "0 10px 30px rgba(220, 38, 38, 0.25)",
      }}
      className="bg-white/60 backdrop-blur-lg border border-red-100 
                 rounded-2xl p-4 sm:p-6 shadow-lg transition-all 
                 hover:-translate-y-1 cursor-pointer"
    >
      {/* RESPONSIVE IMAGE WRAPPER */}
      <div className="w-full h-32 sm:h-40 md:h-44 flex items-center justify-center">
        <Image
          src={img}
          alt={title}
          width={600}
          height={400}
          className="w-auto h-full object-contain"
        />
      </div>

      <div className="mt-4 bg-red-600 text-white rounded-xl py-2 text-center shadow-md">
        <p className="text-base sm:text-lg font-semibold">{title}</p>
        <p className="text-xs sm:text-sm">{subtitle}</p>
      </div>
    </motion.div>
  );

  return (
    <section className="w-full bg-white relative py-14 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
      {/* HEADING */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-10 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-700 tracking-wide leading-tight">
          OUR ASSOCIATED BRANDS
        </h2>

        <p className="mt-3 sm:mt-4 text-gray-700 max-w-2xl sm:max-w-3xl mx-auto text-sm sm:text-base">
          We associate with top-tier brands committed to innovation, precision,
          and unmatched quality.
        </p>
      </motion.div>

      {/* GRID */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
      >
        {brands.map((brand, i) => (
          <Card key={i} {...brand} />
        ))}
      </motion.div>
    </section>
  );
}
