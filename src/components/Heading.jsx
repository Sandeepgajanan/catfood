import React from "react";

const Heading = () => {
  return (
    <div className="flex flex-col w-full items-center max-sm:mt-8">
      <h1 className="text-[3.5vw] leading-[4vw] max-sm:text-[6.6vw] max-sm:leading-[8vw] tracking-tighter font-bold text-zinc-800">
        Voted #1 Healthiest
      </h1>
      <div className="flex gap-4 max-sm:gap-1">
        <h1 className=" text-[3.5vw] leading-[4vw] max-sm:text-[6.6vw] max-sm:leading-[8vw] tracking-tighter font-bold text-center text-zinc-800 mb-12 max-sm:mb-8">
          {" "}
          Cat Food{" "}
        </h1>
        <img src="/cat.png" alt="Cat" className="h-14 max-sm:h-7" loading="lazy"/>
        <img src="/meat.png" alt="meat" className="h-16 max-sm:h-7" loading="lazy"/>
      </div>
    </div>
  );
};

export default Heading;
