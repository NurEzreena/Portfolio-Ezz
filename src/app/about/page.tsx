import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';
import React from "react";
import Image from 'next/image';

export default function AboutMe(): React.ReactElement {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About  ", href: "/about" },
    { label: "My Blog", href: "/myblog" },
    { label: "Contact ", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <FontAwesomeIcon icon={faInstagram} className="h-6 w-6 text-[#E1306C]" />,
      href: "https://instagram.com/",
      label: "Instagram",
    },
    {
      icon: <FontAwesomeIcon icon={faHeart} className="h-6 w-6 text-pink-500" />,
      href: "#favorites",
      label: "Favorites",
    },
    {
      icon: <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 text-[#0077B5]" />,
      href: "https://linkedin.com/",
      label: "LinkedIn",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center relative bg-[#ffffff]">

      {/* Header */}
      <header className="w-full flex flex-col md:flex-row justify-center items-center py-4 px-6 max-w-5xl mx-auto relative gap-4 md:gap-0">
        <nav>
          <ul className="flex flex-wrap justify-center gap-4 md:space-x-8">
            <li><Link href="/" className="text-gray-800 hover:bg-gray-100 px-2 py-3 rounded-full">Home 123</Link></li>
            <li><Link href="/about" className="text-gray-800 hover:bg-gray-100 px-2 py-3 rounded-full">About Me</Link></li>
            <li><Link href="/blog" className="text-gray-800 hover:bg-gray-100 px-2 py-3 rounded-full">My Blog</Link></li>
            <li><Link href="/contact" className="text-gray-800 hover:bg-gray-100 px-2 py-3 rounded-full">Contact Me</Link></li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mt-4 md:mt-0 md:absolute md:right-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              aria-label={link.label}
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </header>

      {/* Hero banner */}
      <div className="w-full max-w-5xl h-52 md:h-[200px] rounded-2xl mb-10 relative overflow-hidden">
        <img 
          src="/images/cover_aboutme.jpg"
          alt="cover 2025"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center md:justify-end md:pr-32 text-black font-bold text-2xl md:text-4xl tracking-widest z-10">
          ABOUT ME
        </div>
        <div className="absolute bottom-4 md:bottom-10 right-4 md:right-10 text-xl md:text-3xl text-blue-800 z-10">
          <span>✧</span>
        </div>
      </div>

      {/* Profile section */}
      <section className="w-full max-w-5xl px-4 md:px-8 mb-16 flex flex-col md:flex-row items-start gap-8">
        <div className="w-full md:w-1/2 h-64 rounded-md overflow-hidden flex items-center justify-center bg-gray-200">
          <img
            src="/images/Profile.jpg"
            alt="Nur Ezreena profile"
            className="float-left w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl text-black font-bold [font-family:'Secular_One-Regular',Helvetica] tracking-normal leading-tight">
            Who is <span className="italic text-red-500">Nur Ezreena</span>?
          </h2>
          <div className="text-black space-y-4 md:space-y-6 text-sm md:text-base">
            <p>
              Hi there! I’m Nur Ezreena Shuhada Emran — but you can call me Ezreena. 🌸
              Born on April 27, 2002, and proudly from Ipoh, Perak,
              I’m a final-year student at Universiti Malaysia Terengganu (UMT) majoring in mobile development — and 
              currently stepping into the real tech world as an Intern at TIME dotCom.
            </p>
            <p>
              Right now, I’m part of the internship program at TIME, 
              where I’m gaining hands-on experience with real industry tools, working on team-driven projects, 
              and learning what it takes to deliver meaningful digital solutions. It’s exciting, challenging, and exactly the kind of environment where I thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Education section */}
      <section className="w-full max-w-5xl px-4 md:px-8 mb-16">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="p-6 md:p-8 md:w-1/2">
              <div className="text-center text-white">
                <h3 className="text-black text-3xl md:text-4xl font-bowlby mb-2">MY</h3>
                <h3 className="text-3xl md:text-4xl font-bowlby mb-2">
                  <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-500">
                    <span className="relative text-white">EDUCATIONAL</span>
                  </span>
                </h3>
                <h3 className="text-black text-3xl md:text-4xl font-bowlby mb-6">JOURNEY</h3>
              </div>
              <div className="text-black space-y-4 md:space-y-6 text-sm md:text-base">
                <p>
                  I pursued a two-year Physical Science programme from 2020 to 2022,
                  focusing on Physics, Chemistry, and Mathematics, which established my
                  foundation in analytical and scientific thinking.
                </p>
                <p>
                  Currently undertaking a 3½-year Bachelor's Degree in Computer Science
                  (Mobile Computing) from 2022 to 2025, where I'm gaining in-depth
                  knowledge in mobile application development, web technologies, and
                  software engineering.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 px-6 md:px-8 py-8 md:py-12">
              {/* KMPK */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src="/images/kmpk.png"
                    alt="KOLEJ MATRIKULASI PERAK, GOPENG"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-white text-center mt-4 tracking-wide">
                  KOLEJ MATRIKULASI PERAK, GOPENG
                </p>
              </div>

              {/* UMT */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src="/images/umt.png"
                    alt="UNIVERSITI MALAYSIA TERENGGANU, TERENGGANU"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-white text-center mt-4 tracking-wide">
                  UNIVERSITI MALAYSIA TERENGGANU, TERENGGANU
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-6 text-center text-sm text-black">
        © 2025 by Nur Ezreena
      </footer>
    </main>
  );
}
