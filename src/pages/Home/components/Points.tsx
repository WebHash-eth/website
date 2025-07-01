import React from "react";
import { Lock } from "lucide-react";

interface ButtonInfo {
  name: string;
  link: string;
}

interface PointsProps {
  tag: string;
  num: [string, string];
  title: [string, string];
  desc: [string, string];
  btnInfo?: [ButtonInfo?, ButtonInfo?];
  imgLink: [string, string];
}

const Points: React.FC<PointsProps> = ({
  tag,
  num,
  title,
  desc,
  btnInfo,
  imgLink,
}) => {
  return (
    <div className="relative md:h-[100vh] overflow-hidden hidden lg:flex items-stretch justify-center border-y border-black bg-white">
      {/* Left Section */}
      <div className="w-1/2 flex items-stretch justify-between flex-col gap-4 px-5 sm:px-10 md:px-10 lg:px-12 pt-14 border-r border-black">
        <div className="h-[50%] md:h-[40%] flex item-start justify-between gap-6">
          <div
            className={`relative w-[40%] ${num[0]} before:absolute before:top-0 before:left-0 before:text-[130px] before:font-machina before:font-black before:uppercase before:leading-none before:tracking-[-1.52px] before:text-[rgba(0,0,0,0.06)]`}
          >
            <span className="text-[#0F0F19] font-normal text-[14px] leading-[14px] tracking-[2.24px] uppercase">
              {tag}
            </span>
            <h2 className="text-[#0F0F19] text-left font-machina uppercase tracking-[2.24px] text-[34px] leading-[34px] font-bold uppercase">
              {title[0]}
            </h2>
          </div>
          <div className="w-[60%]">
            <p className="w-full text-[14px] md:text-[16px] text-[#0F0F19] font-aeonik font-normal leading-[130%] text-left">
              {desc[0]}
            </p>
            {btnInfo?.[0] && (
              <a
                href={btnInfo[0].link}
                target="_blank"
                className={`mt-4 px-6 py-2 border border-black text-black text-sm tracking-widest font-medium uppercase transition-colors inline-flex items-center justify-center gap-2 ${
                  btnInfo[0].link == "#"
                    ? "pointer-events-none"
                    : " hover:bg-black hover:text-white"
                }`}
              >
                {btnInfo[0].link == "#" ? <Lock className="w-4 h-4" /> : ""}
                {btnInfo[0].name}
              </a>
            )}
          </div>
        </div>
        <div className="h-[50%] md:h-[60%] flex items-center justify-center">
          <img
            src={imgLink[0]}
            className="w-full h-full object-contain rounded-lg"
            alt={title[0]}
            loading="lazy"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex items-stretch justify-between flex-col gap-4 px-5 sm:px-10 md:px-10 lg:px-12 pt-14">
        <div className="h-[50%] md:h-[40%] flex item-start justify-between gap-6">
          <div
            className={`relative ${num[1]} before:absolute before:top-0 before:left-0 before:text-[130px] before:font-machina before:font-black before:uppercase before:leading-none before:tracking-[-1.52px] before:text-[rgba(0,0,0,0.06)]`}
          >
            <span className="text-[#0F0F19] font-normal text-[14px] leading-[14px] tracking-[2.24px] uppercase">
              {tag}
            </span>
            <h2 className="w-full text-[#0F0F19] text-left font-machina tracking-[2.24px] text-[34px] leading-[34px] font-bold uppercase">
              {title[1]}
            </h2>
          </div>
          <div className="w-[60%]">
            <p className="w-full text-[14px] md:text-[16px] text-[#0F0F19] font-aeonik font-normal leading-[130%] text-left">
              {desc[1]}
            </p>
            {btnInfo?.[1] && (
              <a
                href={btnInfo[1].link}
                target="_blank"
                className={`mt-4 px-6 py-2 border border-black text-black text-sm tracking-widest font-medium uppercase transition-colors inline-flex items-center justify-center gap-2 ${
                  btnInfo[1].link == "#"
                    ? "pointer-events-none"
                    : " hover:bg-black hover:text-white"
                }`}
              >
                {btnInfo[1].link == "#" ? <Lock className="w-4 h-4" /> : ""}
                {btnInfo[1].name}
              </a>
            )}
          </div>
        </div>
        <div className="h-[50%] md:h-[60%] flex items-center justify-center">
          <img
            src={imgLink[1]}
            className="w-full h-full object-contain"
            loading="lazy"
            alt={title[1]}
          />
        </div>
      </div>
    </div>
  );
};

export default Points;
