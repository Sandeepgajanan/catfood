import React from "react";
import Heading from "./Heading";

const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto w-full relative mt-4 max-sm:px-4">
      <div>
        <Heading />

        <div className="flex justify-between items-start w-full h-[60vh] max-sm:h-auto max-sm:flex-col ">
          {/* Left Section */}
          <div className="w-44 max-sm:w-full flex flex-col justify-between h-full items-center p-2">
            <div className="w-full flex flex-col space-y-2 max-sm:grid max-sm:grid-cols-2 max-sm:gap-4 max-sm:space-y-0">
              {[
                "Why Smalls",
                "Behind Our Food",
                "Smalls Reviews",
                "FAQs",
                "Stores",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center cursor-pointer group gap-2 max-sm:flex-nowrap"
                >
                  <span className="text-[0.70rem] font-medium tracking-tighter whitespace-nowrap">
                    {item}
                  </span>
                  <i className="ri-arrow-right-up-long-line transform group-hover:translate-x-1 transition-transform  text-xs"></i>
                </div>
              ))}
            </div>
            <div className="relative w-28 h-28 max-sm:w-20 max-sm:h-20 rounded-full bg-white cursor-pointer flex items-center justify-center max-sm:mt-4">
              <div className="absolute top-8 max-sm:top-6 w-6 h-6 max-sm:w-5 max-sm:h-5 bg-black rounded-full flex items-center justify-center">
                <i className="ri-play-fill text-white text-xs"></i>
              </div>
              <span className="text-black mt-8 max-sm:mt-6 text-[0.7rem] max-sm:text-[0.5rem] font-medium tracking-tighter">
                Watch Video
              </span>
            </div>
          </div>

          {/* Center Section */}
          <div className="w-1/2 max-sm:w-full h-full">
            <div className="flex justify-center max-sm:justify-between max-sm:gap-4">
              <div className="w-56 max-sm:w-36 h-72 max-sm:h-56 border transform -rotate-3 -mt-8 max-sm:mt-0 shadow-[4px_8px_20px_rgb(0,0,0,0.2)]">
                <img
                  src="/food1.webp"
                  alt="Cat Food 1"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-56 max-sm:w-36 h-72 max-sm:h-56 border transform rotate-3 ml-6 max-sm:ml-0 mt-10 shadow-[4px_8px_20px_rgb(0,0,0,0.2)]">
                <img
                  src="/fresh.jpg"
                  alt="Cat Food 2"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-fit ml-36 max-sm:m-auto -mt-8 max-sm:mt-5 flex justify-between gap-4 items-center cursor-pointer group  transition-all">
              <span className="text-xs font-medium tracking-tighter ">
                View All
              </span>
              <i className="ri-arrow-right-up-long-line text-3xl max-sm:text-lg transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-1/4 max-sm:w-full h-full flex flex-col max-sm:flex-row justify-between gap-6 pt-8">
            {[
              {
                icon: "ri-heart-fill",
                text: "Premium quality food for your beloved pet",
                width: "max-sm:w-1/2",
              },
              {
                icon: "ri-shield-star-fill",
                text: "100% satisfaction guaranteed",
                width: "max-sm:w-1/2",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-[#E2E8D4] rounded-2xl p-6 shadow-lg ${item.width} max-sm:h-32 max-sm:p-2 transform rotate-2`}
              >
                <div className="flex items-center gap-3 max-sm:flex-col">
                  <i className={`${item.icon} text-2xl text-[#8B9B6A]`}></i>
                  <p className="text-xs font-medium text-zinc-800 text-center">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
