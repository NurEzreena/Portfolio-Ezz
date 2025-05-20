import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#FF855A] text-black">
      {/* Contact Section */}
      <div className="max-w-6xl mx-auto py-10 px-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">
          CONTACT ME
        </h2>

        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-gray-800">
          {/* Phone */}
          <div className="flex items-center gap-1">
            <span>+60 14-2424095</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-1">
            <span>nur.ezreena@time.com.my</span>
          </div>

          {/* Resume */}
          <div className="flex items-center gap-1">
            <a
              href="/Resume Ezreena.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Nur Ezreena’s Resume
            </a>
          </div>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-lg"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-lg"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-white py-2 border-t text-xs   items-center gap-2 font-semibold p-4">
        <FontAwesomeIcon icon={faCopyright} />
        <span className="p-3">2025 BY NUR EZREENA</span>
      </div>
    </footer>
  );
};

export default Footer;
