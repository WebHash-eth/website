import React from "react";
import { Lock } from "lucide-react";
// import Button from "../../../components/Button";

interface ButtonInfo {
  name: string;
  link: string;
}

interface PointsMobProps {
  tag: string;
  title: string;
  desc: string;
  num: string;
  btnInfo?: ButtonInfo;
  imgLink: string;
}

const PointsMob: React.FC<PointsMobProps> = ({
  tag,
  title,
  desc,
  num,
  btnInfo,
  imgLink,
}) => {
  return (
    <>
      <div className="relative h-[100vh] lg:hidden overflow-hidden bg-labsTitle-gradient flex flex-col md:flex-row items-stretch justify-center border-y border-black bg-white">
        {/* Image Section */}
        <div className="relative h-[50vh] md:h-full w-full md:w-1/2 bg-[#fff] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('/src/assets/images/grid.svg')] before:bg-cover before:bg-center before:content-[''] before:z-[0] border-r border-black flex items-end justify-center px-4 pt-4">
          <img
            src={imgLink}
            className="relative z-[1] w-full h-full object-contain object-bottom"
            alt={title}
            loading="lazy"
          />
        </div>

        {/* Text Section */}
        <div className="h-[50vh] md:h-full w-full md:w-1/2 flex items-start justify-start md:justify-center py-10 md:py-0 flex-col gap-4 md:gap-20 px-5 sm:px-10 md:px-10 lg:px-12 border-t border-black">
          <div
            className={`relative ${num} before:absolute before:top-0 before:left-0 before:text-[100px] before:font-machina before:font-black before:uppercase before:leading-none before:tracking-[-1.52px] before:text-[rgba(0,0,0,0.06)]`}
          >
            <span className="text-[#0F0F19] font-normal text-[14px] leading-[14px] tracking-[2.24px] uppercase">
              {tag}
            </span>
            <h2 className="uppercase text-[#0F0F19] text-left font-machina uppercase tracking-[2.24px] text-[34px] leading-[34px] sm:text-[35px] sm:leading-[35px] md:text-[36px] md:leading-[36px] font-bold">
              {title}
            </h2>
          </div>
          <p className="w-full md:w-[75%] text-[14px] md:text-[16px] text-[#0F0F19] font-aeonik font-normal leading-[130%] text-left">
            {desc}
          </p>
          {btnInfo && (
            <a
              href={btnInfo.link}
              target="_blank"
              className={`mt-4 px-6 py-2 border border-black text-black text-sm tracking-widest font-medium uppercase transition-colors inline-flex items-center justify-center gap-2 ${
                btnInfo.link == "#"
                  ? "pointer-events-none"
                  : " hover:bg-black hover:text-white"
              }`}
            >
              {btnInfo.link == "#" ? <Lock className="w-5 h-5" /> : ""}
              {btnInfo.name}
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default PointsMob;
