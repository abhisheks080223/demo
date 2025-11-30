"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
     
      whileHover={{
        scale: 1.04,
        boxShadow: "0 10px 30px rgba(220, 38, 38, 0.25)",
      }}
      className="bg-white/60 backdrop-blur-lg border border-red-100 
               rounded-2xl p-6 shadow-lg transition-all 
               hover:-translate-y-1 cursor-pointer"
    >
      {/* FIXED IMAGE HEIGHT FOR UNIFORM LOOK */}
      <div className="w-full h-40 flex items-center justify-center">
        <Image
          src={img}
          alt={title}
          width={600}
          height={400}
          className="w-auto h-full object-contain"
        />
      </div>

      <div className="mt-5 bg-red-600 text-white rounded-xl py-2 text-center font-semibold shadow-md">
        {title}
        <p className="text-sm font-normal">{subtitle}</p>
      </div>
    </motion.div>
  );

  return (
    <section className="w-full bg-white relative py-20 px-4 md:px-10 lg:px-20">
      <motion.div initial="hidden" animate="show" className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-red-700 tracking-wide"
        >
          OUR ASSOCIATED BRANDS
        </motion.h2>

        <motion.p
          
          className="mt-4 text-gray-700 max-w-3xl mx-auto text-sm md:text-base"
        >
          We associate with top-tier brands committed to innovation, precision,
          and unmatched quality.
        </motion.p>
      </motion.div>

      {/* ⭐ 2 ROWS × 3 COLUMNS GRID */}
      <motion.div
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
      >
        {brands.map((brand, i) => (
          <Card key={i} {...brand} />
        ))}
      </motion.div>
    </section>
  );
}
