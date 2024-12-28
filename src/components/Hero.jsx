import React from "react";

const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto w-full relative mt-4 max-sm:px-4">
      {/* Desktop Layout */}
      <div className="block max-sm:hidden">
        <h1 className="text-[3.5vw] leading-[4vw] tracking-tighter font-bold text-center text-zinc-800 mb-12">
          Voted #1 Healthiest <br />
          Cat Food
        </h1>

        <div className="flex justify-between items-start w-full h-[60vh]">
          {/* Left Section */}
          <div className="w-[20%] flex flex-col justify-between h-full items-center">
            <div className="w-full flex flex-col space-y-2">
              {[
                "Why Smalls",
                "Behind Our Food",
                "Smalls Reviews",
                "FAQs",
                "Stores",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center cursor-pointer group"
                >
                  <span className="text-xs font-medium tracking-tighter">
                    {item}
                  </span>
                  <i className="ri-arrow-right-up-long-line transform group-hover:translate-x-1 transition-transform"></i>
                </div>
              ))}
            </div>
            <div className="relative w-28 h-28 rounded-full bg-white cursor-pointer flex items-center justify-center">
              <div className="absolute top-8 w-6 h-6 bg-black rounded-full flex items-center justify-center">
                <i className="ri-play-fill text-white text-xs"></i>
              </div>
              <span className="text-black mt-8 text-[0.7rem] font-medium tracking-tighter">
                Watch Video
              </span>
            </div>
          </div>

          {/* Center Section */}
          <div className="w-1/2 h-full">
            <div className="flex justify-center">
              <div className="w-56 h-80 border border-white -mt-12">
                <img
                  src="/food1.webp"
                  alt="Cat Food 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-56 h-80 border border-white ml-6 mt-10">
                <img
                  src="/food2.jpeg"
                  alt="Cat Food 2"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="w-fit ml-36 -mt-8 flex justify-between gap-4 items-center cursor-pointer">
              <span className="text-xs font-medium tracking-tighter">
                View All
              </span>
              <i className="ri-arrow-right-up-long-line text-3xl"></i>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-1/4 space-y-10 pt-8 h-full flex flex-col justify-between">
            <p className="text-sm leading-tight text-zinc-800">
              <span className="font-bold">100%</span> healthy and quality food for
              your furry friend
            </p>
            <div className="flex flex-col items-start gap-3">
              <i className="ri-shield-check-line text-xl"></i>
              <p className="text-sm text-zinc-700">
                Experience peace of mind with our premium customer protection
                service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="hidden max-sm:block">
        <div className="grid grid-cols-2 gap-4 mb-8 ">
          <div className="space-y-2">
            {["Why Smalls", "Behind Our Food", "FAQs"].map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center cursor-pointer gap-2"
              >
                <span className="text-xs font-medium tracking-tighter whitespace-nowrap">
                  {item}
                </span>
                <i className="ri-arrow-right-up-long-line text-xs"></i>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {["Smalls Reviews", "Stores"].map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center cursor-pointer gap-2"
              >
                <span className="text-xs font-medium tracking-tighter whitespace-nowrap">
                  {item}
                </span>
                <i className="ri-arrow-right-up-long-line text-xs"></i>
              </div>
            ))}
        
          </div>
        </div>

        <h1 className="text-[6vw] leading-[7vw] tracking-tighter font-bold text-center text-zinc-800 mb-8">
          Voted #1 Healthiest <br />
          Cat Food
        </h1>

        <div className="relative mb-6">
          <div className="flex justify-between gap-4">
            <div className="w-[48%] h-56 border border-white">
              <img
                src="/food1.webp"
                alt="Cat Food 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[48%] h-56 border border-white mt-10">
              <img
                src="/food2.jpeg"
                alt="Cat Food 2"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="relative w-20 h-20 rounded-full bg-white cursor-pointer flex items-center justify-center">
              <div className="absolute top-6 w-5 h-5 bg-black rounded-full flex items-center justify-center">
                <i className="ri-play-fill text-white text-xs"></i>
              </div>
              <span className="text-black mt-6 text-[0.5rem] font-medium tracking-tighter">
                Watch Video
              </span>
            </div>
          <div className=" flex items-center gap-4 cursor-pointer mt-5">
            <span className="text-xs font-medium tracking-tighter">
              View All
            </span>
            <i className="ri-arrow-right-up-long-line text-lg"></i>
          </div>
        </div>
       
       
       
        <div className="w-full py-8 px-5 flex flex-col gap-6">
            <div className="w-full">
              <div className="rounded-2xl p-4 border bg-transparent shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform rotate-2">
                <p className="text-base leading-relaxed text-zinc-800">
                  <span className="font-bold text-xs bg-yellow-100 px-2 py-0.5 rounded-md">100%</span>
                  <span className="block mt-3 text-sm">healthy and quality food for your furry friend</span>
                </p>
              </div>
            </div>
            
            <div className="w-full">
              <div className="rounded-2xl p-6 relative bg-transparent shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform -rotate-2">
                
                <p className="text-base leading-relaxed text-zinc-800">
                  <span className="font-bold text-xs bg-yellow-100 px-2 py-0.5 rounded-md">100%</span>
                  <span className="block mt-3 text-sm"> Experience peace of mind with our premium customer protection
                  service</span>
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Hero;
