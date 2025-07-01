import { useEffect, useState } from "react";
// import { LockIcon } from "lucide-react";
import heroBgItem from "../../../assets/images/heroBgItem.png";
import "./ticker.css";
import TextRevealAnimation from "../../../components/TextRevealAnimation";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-end md:items-center md:pb-0 overflow-hidden border-b-2 border-gray-400">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <img
          src={heroBgItem}
          alt="Hero Bg Item"
          className="hidden md:block object-cover w-full h-full object-center"
        />
        <img
          src={heroBgItem}
          alt="Hero Bg Item"
          className="md:hidden object-cover w-full h-full object-top"
        />
      </div>

      <div className="relative h-full flex flex-col gap-10 md:gap-0 justify-center md:justify-center">
        {/* Hero Text */}
        <div className="w-screen px-4 md:px-8 lg:px-16 relative z-10">
          <h1 className="text-center text-3xl md:text-5xl lg:text-[48px] xl:text-[62px] font-normal tracking-tight leading-tight mb-8 font-machina uppercase">
            <TextRevealAnimation>
              BUILDING THE DECENTRALISED WEB
            </TextRevealAnimation>
            <br className="hidden lg:block" />
            <TextRevealAnimation>
              THAT LIVES FOREVER, ACCESSIBLE
            </TextRevealAnimation>
            <br className="hidden lg:block" />
            <TextRevealAnimation>VIA SUPERFAST GATEWAYS</TextRevealAnimation>
          </h1>

          <div className="flex justify-center flex-wrap gap-4">
            <a
              href="https://node-setup.webhash.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-black text-white font-medium uppercase tracking-wider hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
            >
              Node Setup Guide
            </a>
            <a
              href="https://builder.webhash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-black text-white font-medium uppercase tracking-wider hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
            >
              {/* <LockIcon className="w-4 h-4 text-white" /> */}
              Try WebHash Builder
            </a>
          </div>
        </div>

        {/* Ticker Section */}
        <div
          className={`absolute md:w-full bottom-2 flex px-4 md:px-8 gap-8 ${
            isMobile
              ? "overflow-x-hidden whitespace-nowrap animate-ticker"
              : "justify-between"
          }`}
        >
          {Array.from({ length: isMobile ? 3 : 1 }).map((_, index) => (
            <div key={index} className="w-full flex justify-between gap-8">
              <StatItem
                value="54"
                label="NODES RUNNING"
                gradient="from-orange-400 to-pink-500"
              />
              <StatItem
                value="383"
                label="TOTAL CPUs"
                gradient="from-orange-400 to-orange-500"
              />
              <StatItem
                value="26.88"
                suffix="TB"
                label="TOTAL STORAGE"
                gradient="from-orange-400 to-pink-500"
              />
              <StatItem
                value="8,200"
                label="Sites Hosted"
                gradient="from-orange-400 to-pink-500"
              />
              <StatItem
                value="1.53"
                suffix="TB"
                label="Total Memory"
                gradient="from-orange-400 to-pink-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface StatItemProps {
  value: string;
  label: string;
  gradient: string;
  suffix?: string;
}

function StatItem({ value, label, gradient, suffix }: StatItemProps) {
  return (
    <div className="flex flex-col items-start justify-center py-6 px-8 text-center shrink-0">
      <div className="text-4xl lg:text-6xl font-regular mb-2">
        <span
          className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
        >
          {value}
          {suffix && <span className="text-3xl">{suffix}</span>}
        </span>
      </div>
      <div className="text-gray-700 text-sm tracking-wide">{label}</div>
    </div>
  );
}
