import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo2.svg";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  // if (!(location.pathname === "/signup" || location.pathname === "/login")) {
  //   return;
  // }

  return (
    !(location.pathname === "/signup" || location.pathname === "/login") && (
      <footer className="bg-[#151515] text-white py-32">
        <div className="footer section justify-start">
          <aside className="pr-32">
            <img src={logo} />
            <p className="text-[#E8E8E8] leading-6 py-5">
              Edwin Diaz is a software and web technologies engineer, a life
              coach trainer who is also a serial .
            </p>
            <div className="flex text-4xl gap-2.5">
              <div className="rounded-full bg-gray-700">
                <FaGoogle className="p-2" />
              </div>
              <div className="rounded-full bg-gray-700">
                <FaTwitter className="p-2" />
              </div>
              <div className="rounded-full bg-gray-700">
                <FaInstagram className="p-2" />
              </div>
              <div className="rounded-full bg-gray-700">
                <FaLinkedin className="p-2" />
              </div>
            </div>
          </aside>
          <nav className="w-60 space-y-1">
            <header className="footer-title opacity-100 text-xl font-semibold">
              About
            </header>
            <a className="link link-hover text-[#F3F3F3]">Home</a>
            <a className="link link-hover text-[#F3F3F3]">Service</a>
            <a className="link link-hover text-[#F3F3F3]">Contact</a>
          </nav>
          <nav className="w-60 space-y-1">
            <header className="footer-title opacity-100 text-xl font-semibold">
              Company
            </header>
            <a className="link link-hover text-[#F3F3F3]">Why Car Doctor</a>
            <a className="link link-hover text-[#F3F3F3]">About</a>
          </nav>
          <nav className="w-60 space-y-1">
            <header className="footer-title opacity-100 text-xl font-semibold">
              Support
            </header>
            <a className="link link-hover text-[#F3F3F3]">Support Center</a>
            <a className="link link-hover text-[#F3F3F3]">Feedback</a>
            <a className="link link-hover text-[#F3F3F3]">Accessibility</a>
          </nav>
        </div>
      </footer>
    )
  );
};

export default Footer;
