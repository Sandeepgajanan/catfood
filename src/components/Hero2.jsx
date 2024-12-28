import React from "react";

const Hero2 = () => {
  return (
    <div className="max-w-screen-xl mx-auto w-full py-16 max-sm:py-8 max-sm:px-3 h-screen max-sm:h-auto">
      <div className="flex items-center gap-8 max-sm:flex-col max-sm:gap-6">

        <div className="w-1/2 max-sm:w-full">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform -rotate-6 ">
              <img 
                src="/food3.webp" 
                alt="Cat Food" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 max-sm:w-full">
    
          <p className="text-[2.3vw] leading-[3vw] max-sm:text-lg max-sm:leading-7 font-bold text-zinc-700 text-center tracking-tighter">
            88% of customers report significant health improvements
            <span className="inline-block w-10 h-10 max-sm:w-8 max-sm:h-8 rounded-full overflow-hidden mx-2">
              <img src="/2.webp" alt="Customer" className="w-full h-full object-cover" />
            </span>
            after switching to Smalls
            <span className="inline-block w-10 h-10 max-sm:w-8 max-sm:h-8 rounded-full overflow-hidden mx-2">
              <img src="/1.webp" alt="Customer" className="w-full h-full object-cover" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
