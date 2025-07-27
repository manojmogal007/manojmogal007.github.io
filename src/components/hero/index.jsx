import React from "react";
import TextSwapper from "./TextSwapper";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-dvh">
      <div className="flex flex-col items-center text-center px-4">
        <div className="flex items-center gap-3">
          <span className="text-gray-400 tracking-widest text-base sm:text-lg md:text-xl lg:text-2xl">
            HI IM
          </span>
          <div className="h-[2px] w-50 sm:h-[3px] md:h-[4px] lg:h-[6px] sm:w-60 md:w-80 lg:w-130 bg-yellow-400"></div>
        </div>
        <h1
          className="mt-4 font-extrabold tracking-wider 
                   text-3xl sm:text-4xl md:text-5xl lg:text-7xl"
        >
          MANOJ MOGAL
        </h1>
        <div className="w-full flex justify-end">
          <TextSwapper />
        </div>
      </div>
    </div>
  );
}

export default Hero;
