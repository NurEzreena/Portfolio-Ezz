"use client";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 md:px-18 py-1 shadow bg-white sticky top-0 z-50 scroll-smooth">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Ezz Logo"
            className="h-[80px] w-auto"
          />
        </Link>

        {/* Centered Desktop Navigation */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-10 font-semi">
          <Link
            href="/about"
            className="text-black hover:text-[#744FC6] tracking-wide"
          >
            ABOUT
          </Link>
          <Link
            href="/"
            className="text-black hover:text-[#744FC6] tracking-wide"
          >
            PROJECTS
          </Link>
        </nav>

        {/* Social Media Icons */}
        <div className="hidden md:flex space-x-4 text-lg text-black">
          <Link
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-[#744FC6]"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#744FC6]"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-black"
          aria-label="Toggle menu"
        >
          {menuOpen ? "×" : <FontAwesomeIcon icon={faBars} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white px-4 pt-4 pb-6 space-y-4 border-t">
          <Link
            href="/about"
            className="text-black hover:text-[#744FC6] tracking-wide"
          >
            ABOUT
          </Link>
          <Link
            href="/"
            className="text-black hover:text-[#744FC6] tracking-wide"
          >
            PROJECTS
          </Link>
          <div className="flex space-x-6 pt-2">
            <a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-black hover:text-[#744FC6]"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-black hover:text-[#744FC6]"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
