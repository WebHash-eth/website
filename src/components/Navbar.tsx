import { useState, useEffect } from "react";
import { ArrowRight, X, Lock } from "lucide-react";
import arrowRightUp from "../assets/images/arrowUpIcon.png";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  // const logoSrc =
  //   location.pathname === "/master-plan"
  //     ? "/logoWhiteBG.svg"
  //     : "/logo-black.svg";

  const logoSrc = "/logo-black.svg";
  ``;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  // Handle Navbar show/hide and background color
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(lastScrollY > currentScrollY || currentScrollY < 10);
      setIsAtTop(currentScrollY === 0);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full lg:px-16 lg:py-3 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isAtTop && !isMenuOpen
          ? "bg-transparent shadow-none"
          : "bg-white shadow-md"
      }
      
      ${location.pathname === "/master-plan" ? "bg-white" : ""}`}
    >
      <div className="flex items-center justify-between border-b lg:border-none z-50">
        <div className="flex-1 lg:flex-[unset] border-r lg:border-none py-3 md:py-0 px-4 md:px-0 flex items-center justify-center gap-2 md:block">
          <a href="/" className="text-2xl font-normal">
            <img
              src={logoSrc}
              alt="Web Hash Logo"
              width={32}
              height={32}
              className="hidden lg:block"
            />
            <img
              src={"/logo-text-black.png"}
              alt="Web Hash Logo"
              className="block lg:hidden p-4"
            />
          </a>
          {/* <div className="text-2xl font-bold z-50 block md:hidden">WebHash</div> */}
        </div>

        <div className="ml-8 hidden lg:flex">
          <a
            href="/"
            className="px-4 py-3 bg-black text-white text-sm font-medium mr-4 inline-flex items-center justify-between gap-4"
          >
            Home
            {/* <img src={arrowRightUp} alt="Arrow Icon" className="w-5 h-5" /> */}
          </a>
          <a
            href="https://nodes.webhash.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 bg-black text-white text-sm font-medium mr-4 inline-flex items-center justify-between gap-4"
          >
            Node Dashboard
            {/* <img src={arrowRightUp} alt="Arrow Icon" className="w-5 h-5" /> */}
          </a>
          <a
            href="/master-plan"
            className="px-4 py-3 bg-black text-white text-sm font-medium mr-4 inline-flex items-center justify-between gap-4"
          >
            Master Plan
            {/* <Lock className="w-5 h-5" /> */}
            {/* <img src={arrowRightUp} alt="Arrow Icon" className="w-5 h-5" /> */}
          </a>
          <a
            href=""
            className="px-4 py-3 bg-black text-white text-sm font-medium mr-4 inline-flex items-center justify-between gap-4 pointer-events-none"
          >
            Ecosystem
            <Lock className="w-5 h-5" />
            {/* <img src={arrowRightUp} alt="Arrow Icon" className="w-5 h-5" /> */}
          </a>
        </div>

        <div className="flex-1">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-black text-xl z-50 w-full flex items-center justify-center"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : "MENU"}
          </button>
        </div>
        <div className="hidden lg:flex">
          <a
            href="http://app.webhash.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 bg-black text-white text-sm font-medium mr-4 inline-flex items-center justify-between gap-4"
          >
            Create Website
            <img src={arrowRightUp} alt="Arrow Icon" className="w-5 h-5" />
          </a>
          <a
            href="http://pro.webhash.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 bg-black text-white text-sm font-medium inline-flex items-center justify-between gap-4"
          >
            Deploy Website
            <img src={arrowRightUp} alt="Arrow Icon" className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Full-Screen Mobile Navigation */}
      {isMenuOpen && (
        <div className=" w-full h-screen bg-white z-40 flex flex-col items-start justify-start space-y-6 pt-6 px-4">
          <a
            href="/"
            className="px-4 py-3 bg-white text-black border text-sm font-medium w-full inline-flex items-center justify-between gap-4"
          >
            Home
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="https://nodes.webhash.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 bg-white text-black border text-sm font-medium w-full inline-flex items-center justify-between gap-4"
          >
            Node Dashboard
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="/master-plan"
            className="px-4 py-3 bg-white text-black border text-sm font-medium w-full inline-flex items-center justify-between gap-4"
          >
            Master Plan
            {/* <Lock className="w-5 h-5" /> */}
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="/"
            className="px-4 py-3 bg-white text-black border text-sm font-medium w-full inline-flex items-center justify-between gap-4 pointer-events-none"
          >
            Ecosystem
            <Lock className="w-5 h-5" />
          </a>
          <a
            href="http://app.webhash.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 bg-white text-black border text-sm font-medium w-full inline-flex items-center justify-between gap-4"
          >
            Create Website
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="http://pro.webhash.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 bg-white text-black border text-sm font-medium w-full inline-flex items-center justify-between gap-4"
          >
            Deploy Website
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      )}
    </nav>
  );
}
