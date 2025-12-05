"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // disable scroll
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  // Active link styling
  const isActive = (path) =>
    pathname === path ? "text-red-600 font-semibold" : "hover:text-red-600";

  return (
    <header className="w-full fixed top-0 left-0 z-50 flex justify-center py-4 px-4 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="w-full max-w-7xl bg-[#f4efff] rounded-full px-4 py-3 flex items-center justify-between shadow-sm">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.jpeg"
            alt="Logo"
            width={36}
            height={36}
            className="object-contain rounded-full"
          />
          <span className="font-semibold text-lg sm:text-xl">
            Infinity Engineering
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
          <Link href="/" className={isActive("/")}>
            Home
          </Link>
          <Link href="/employee" className={isActive("/employee")}>
            Employee
          </Link>
          <Link href="/services" className={isActive("/services")}>
            Services
          </Link>
          <Link href="/products" className={isActive("/products")}>
            Products
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-red-500 focus:outline-none"
        >
          {mobileMenuOpen ? "☰" : "☰"}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl z-40 animate-slideDown"
          >
            <nav className="flex flex-col gap-3 px-4 py-6 text-gray-700 font-medium">
              <Link href="/" onClick={toggleMenu} className={isActive("/")}>
                Home
              </Link>

              <Link
                href="/employee"
                onClick={toggleMenu}
                className={isActive("/employee")}
              >
                Employee
              </Link>

              <Link
                href="/portfolio"
                onClick={toggleMenu}
                className={isActive("/portfolio")}
              >
                Portfolio
              </Link>

              <Link
                href="/products"
                onClick={toggleMenu}
                className={isActive("/products")}
              >
                Products
              </Link>

              <button className="bg-black text-white px-6 py-2 rounded-full mt-3">
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>

      {/* Mobile Menu Animation */}
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.25s ease-out;
        }
      `}</style>
    </header>
  );
}
