import {  CardContent } from "@/components/ui/card";
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
            <li><Link href="/" className="text-gray-800 hover:bg-gray-100 px-2 py-3 rounded-full">Home </Link></li>
            <li><Link href="/about" className="text-gray-800 hover:bg-gray-100 px-2 py-3 rounded-full">About Me</Link></li>
            <li><Link href="/myblog" className="text-gray-800 hover:bg-gray-100 px-2 py-3 rounded-full">My Blog</Link></li>
            <li><Link href="/contact" className="text-gray-800 hover:bg-gray-100 px-2 py-3 rounded-full">Contact Me</Link></li>
          </ul>
        </nav>

        {/* Social Icons positioned on the right */}
        <div className="absolute right-6 flex items-center gap-4">
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

      {/* banner */}
      <div className="w-full max-w-5xl h-52 md:h-[full] rounded-2xl mb-10 relative overflow-hidden">
        <img 
          src="/images/cover_aboutme.jpg"
          alt="cover 2025"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center md:justify-end md:pr-32 text-black font-bold text-2xl md:text-4xl tracking-widest z-10">
         <h1 className="decoration-clone bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500  "> ABOUT ME</h1>
        </div>
        
      </div>

      {/* Profile section */}
       <section className="w-full relative bg-[#2e2b6f] text-white px-4 py-16 md:py-24">
              <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

                 <div className="md:w-1/2 space-y-6 text-sm md:text-base leading-relaxed">
                  <h2 className="font-figtree font-boldtext-3xl md:text-4xl">Get to Know Me 🔎</h2>
                  <p>
                    I'm <span className="font-semibold text-pink-300">Nur Ezreena Shuhada Emran</span> — but you can call me Ezz. 🌸
                    Born on April 27, 2002, and proudly from Ipoh, Perak,
                    I’m a final-year student at Universiti Malaysia Terengganu (UMT) majoring in mobile development — and 
                    currently stepping into the real tech world as an Intern at <span className="font-semibold text-yellow-400">TIME dotCom</span> 
                    </p>
                </div>

                {/* Image + Circles */}
                <div className="md:w-1/2 relative flex items-center justify-center">
                <div className="group w-full h-full rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                      src="Images/Profile.png" 
                      alt="Profile" 
                      className="transition duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>

                  {/*  Circles pink and yellow */}
                  <span className="absolute top-4 left-6 w-6 h-6 bg-pink-500 rounded-full z-0"></span>
                  <span className="absolute bottom-8 right-10 w-10 h-10 bg-yellow-400 rounded-full z-0"></span>
                 </div>
              </div>

              
            </section>


      {/* Education section */}
       <section className="w-full max-w-5xl py-16 px-4 mb-16">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="p-6 md:p-8 md:w-1/2">
              <div className="text-center text-white">

                <h3 className="font-figtree text-black text-3xl md:text-4xl mb-2">MY</h3>

                <h3 className="font-figtree font-bold text-3xl md:text-4xl  mb-2">
                  <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-500">
                    <span className=" relative text-white">EDUCATIONAL</span>
                  </span>
                </h3>

                <h3 className="font-figtree text-black text-3xl md:text-4xl mb-6">JOURNEY</h3>
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

               {/* KMPK */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src="/images/kmpk.png"
                    alt="KOLEJ MATRIKULASI PERAK, GOPENG"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-black text-center mt-2 tracking-wide">
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
                <p className="text-sm text-black text-center mt-2 tracking-wide">
                  UNIVERSITI MALAYSIA TERENGGANU, TERENGGANU
                </p>
              </div>
            </div>
         </CardContent>
      </section> 

      {/* Footer */}
      <footer className="px-4 md:px-8 py-6 text-center text-lg text-black">
        © 2025 made by Nur Ezreena
      </footer>
    </main>
  );
}
