import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
 import Link from "next/link";
 import React from "react";
const Header=() => {

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

    return(
    <header className="w-full flex justify-center items-center py-4 px-6 max-w-5xl mx-auto relative">
    <nav>
    <ul className="flex space-x-8">
      <li><Link href="/" className="text-gray-800 hover:bg-gray-100 px-2 py-3 rounded-full">Home</Link></li>
      <li><Link href="/about" className="text-gray-800 hover:bg-gray-100 px-2 py-3 rounded-full">About Me</Link></li>
      <li><Link href="/project" className="text-gray-800 hover:bg-gray-100 px-2 py-3 rounded-full">Project </Link></li>
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
    )
}

export default Header;