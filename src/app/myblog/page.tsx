
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import React from "react";
 
export default function MyBlog(): React.ReactElement {
    const navItems = [
        { label: "Home", href: "/" },
        { label: "About  ", href: "/about" },
        { label: "My Blog", href: "/myblog" },
        { label: "Contact ", href: "#contact" },
      ];

      const socialLinks = [
        {
            icon:<FontAwesomeIcon icon={faInstagram} className="h-6 w-6 text-[#E1306C]" />,
            href: "https://instagram.com/",
            label: "Instagram",
        },
        {
            icon:<FontAwesomeIcon icon={faHeart} className="h-6 w-6 text-pink-500" />,
            href: "#favorites",
            label: "Favorites",
        },
        {
            icon:<FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 text-[#0077B5]" />,
            href: "https://linkedin.com/",
            label: "LinkedIn",
        },

      ];

    return(
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

        {/* /classname untuk link jadikan satu class dlm global css and  fix header */}
        {/* Social Icons  */}
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



        <div className="w-full py-10 relative ">
          <div className="bg-[#2e2b6f] h-[300px] w-full rounded-b-full overflow-hidden ">

          <div className="absolute text-5xl inset-0 flex flex-col items-center justify-center text-white font-figtree">
          <h1 className="box-decoration-clone bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500 text-center font-bold tex-5xl mb-4">
              MY BLOG</h1> 
             <h2 className="text-2xl md:text-4xl  text-center mb-2">
             Feel free to explore my projects below</h2>
              <FontAwesomeIcon icon={faAngleDown} className="h-12 w-6  inset-x-0 bottom-0 h-20  animate-bounce " />
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-5xl text-white font-figtree">
              </div>
            </div>
        </div> 

        {/* project box */}
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          
          <div className="cont-grid ">
            <div className="emoji-grid">🚗</div>
            <h3 className="project-title">Smart Parking App (EzPark)</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              A mobile app  to make it easier for drivers to pay for parking fees.
            </p>
          </div>

          
          <div className="cont-grid  ">
            <div className="emoji-grid">💰</div>
            <h3 className="project-title">Expense Tracking App (MoneyMap)</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            A  mobile app for simplifying personal expense and
            income management and planning.
            </p>
          </div>

           
          <div className="cont-grid  ">
            <div className="emoji-grid">📞</div>
            <h3 className="project-title">CRM App (Oceanica)</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            A centralized communication hub, feedback and 
            issue tracking tool  and analytics dashboard.
            </p>
          </div>

           
          <div className="cont-grid ">
            <div className="emoji-grid">📊</div>
            <h3 className="project-title">Budgeting App (Spendwise)</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
             Tracking expenses and planning future budgets
            </p>
          </div>

           
          <div className="cont-grid  ">
            <div className="emoji-grid">🛍️</div>
            <h3 className="project-title">Online Shopping App (DaisyDrift Hijab)</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Shop beautiful hijabs and accessories easily online.
            </p>
          </div>

           
          <div className="cont-grid  ">
            <div className="emoji-grid">🏦</div>
            <h3 className="project-title">Savings Goal App (MoneyLoom)</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Set, track, and achieve your savings goals efficiently.
            </p>
          </div>

        </div>
      </div>

      {/* Description project  */}
      <blockquote className="text-center text-2xl font-semibold text-gray-900 italic">
         Here’s a glimpse of projects I’ve built — 
          
          each crafted with passion and creativity!
      </blockquote>
       

        {/* Footer */}
      <footer className="px-4 md:px-8 py-6 text-center text-lg text-black">
        © 2025 made by Nur Ezreena
      </footer>    
            
       </main>
    );
    }