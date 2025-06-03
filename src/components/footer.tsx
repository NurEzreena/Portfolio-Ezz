import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#161042] text-white w-full">
      {/* Top Section: Message + Contact Info */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-20 py-16 gap-10 md:gap-12">
        {/* Left: CTA */}
        <div className="flex flex-col w-full md:w-1/2">
          <button className="border border-white px-4 py-1 mb-4 rounded-full text-xs font-semibold w-fit">
            LET’S CONNECT
          </button>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug font-libre-baskerville">
            Feel Free To{" "}
            <span className="text-[#4DD0E1] font-semibold font-libre-baskerville">
              Send A Message!
            </span>
          </h2>
        </div>

        {/* Right: Contact Info */}
        <div className="w-full md:w-1/2 text-left md:text-right">
          <div className="mb-4">
            <p className="text-sm text-gray-400">EMAIL</p>
            <p className="text-lg break-words">nur.ezreena@time.com.my</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">PHONE NUMBER</p>
            <p className="text-lg">+60 123456789</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
