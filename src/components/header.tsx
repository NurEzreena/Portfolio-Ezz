"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 md:px-8 py-2 shadow-sm bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between min-h-[80px] relative">
        {/* Logo on the left */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Ezz Logo"
            className="h-[80] w-[full]"
          />
        </Link>

        {/* desktop navigation links */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 text-sm font-bold tracking-wide">
          <Link href="/" className="text-black hover:text-purple-700 text-lg">
            HOME
          </Link>
          <Link
            href="/about"
            className="text-black hover:text-purple-700 text-lg"
          >
            ABOUT ME
          </Link>
          <Link
            href="/project"
            className="text-black hover:text-purple-700 text-lg"
          >
            PROJECT
          </Link>
        </nav>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 text-2xl"
          aria-label="Toggle menu"
        >
          {menuOpen ? "×" : <FontAwesomeIcon icon={faBars} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white border-t mt-2 px-6 py-4 space-y-4 transition-all duration-300 ease-in-out">
          <Link
            href="/"
            className="text-gray-800 hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-800 hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            About Me
          </Link>
          <Link
            href="/project"
            className="text-gray-800 hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Project
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
