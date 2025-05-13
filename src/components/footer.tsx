import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faEnvelope, faPhone, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 text-black">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">CONTACT ME</h2>

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-10 text-sm sm:text-base mb-6">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} className="text-purple-700" />
            <span>+60 14 2424095</span>
          </div>

          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-purple-700" />
            <span>nur.ezreena@time.com.my</span>
          </div>

          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faBriefcase} className="text-purple-700" />
            <a
              href="/Resume Ezreena.pdf"
              target="_blank"
              rel="resume"
              className="hover:underline"
            >
              Nur Ezreena’s Resume
            </a>
          </div>

          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faInstagram} className="text-purple-700" />
            <a
              href="https://www.instagram.com/yourusername"  
              target="_blank"
              rel="instagram"
              className="hover:underline"
            >
              Instagram
            </a>
          </div>

          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faLinkedin} className="text-purple-700" />
            <a
              href="https://www.linkedin.com/in/yourusername"  
              target="_blank"
              rel="linkedin"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="border-t pt-4 text-xs text-gray-500 flex justify-center items-center gap-2">
          <FontAwesomeIcon icon={faCopyright} />
          <span>2025 BY NUR EZREENA</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
