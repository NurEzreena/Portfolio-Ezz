import { Button } from "@/components/ui/button";
// @ts-ignore
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
 import React from "react";


export default function HomePage(): React.ReactElement  {
  // Navigation menu items
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About  ", href: "/about" },
    { label: "My Blog", href: "/myblog" },
    { label: "Contact ", href: "#contact" },
  ];

  // Social media links
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
    
    {/*header*/}
    <header className="w-full flex justify-center items-center py-4 px-6 max-w-5xl mx-auto relative">
    <nav>
    <ul className="flex space-x-8">
      <li><Link href="/" className="text-gray-800 hover:bg-gray-100 px-2 py-3 rounded-full">Home</Link></li>
      <li><Link href="/about" className="text-gray-800 hover:bg-gray-100 px-2 py-3 rounded-full">About Me</Link></li>
      <li><Link href="/myblog" className="text-gray-800 hover:bg-gray-100 px-2 py-3 rounded-full">My Blog</Link></li>
      <li><Link href="/contact" className="text-gray-800 hover:bg-gray-100 px-2 py-3 rounded-full">Contact Me</Link></li>
    </ul>
  </nav>
  
        {/* Social Icons   */}
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

      {/* Main content */}
      <section className="flex flex-col items-center justify-center flex-grow text-center px-4">
        <Button variant="outline" className="rounded-full mb-4 px-6 animate-pulse">
          Hello !
        </Button>

        <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          I'm Ezreena
          <br />
          Internship Student
        </h1>
      </section>

      {/* Portfolio section with semi-circle */}
      <div className="w-full relative">
        <div className="bg-[#ff5842] h-[300px] rounded-t-full max-w-2xl mx-auto flex items-center justify-center ">
          <Button
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white/10 rounded-full px-6 py-2 flex items-center gap-2 mt-8"
          >
            FIND OUT MORE  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-4 w-4 " />
          </Button>
        </div>
      </div>
    </main>
  );
}
