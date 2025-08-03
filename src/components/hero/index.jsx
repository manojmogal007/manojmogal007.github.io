import React from "react";
import TextSwapper from "./TextSwapper";
import "../../index.css";

function Hero() {
  const letters = "MANOJ MOGAL"?.split("");
  return (
    <div
      className="fixed flex flex-col items-center justify-center h-dvh w-dvw -z-1"
    >
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <h1 className="text-black font-bold text-[350px] tracking-widest ">
          HELLO
        </h1>
      </div>

      <div className="flex flex-col items-center text-center px-4 z-1">
        <div className="flex items-center gap-3">
          <span className="text-gray-400 tracking-widest text-base sm:text-lg md:text-xl lg:text-2xl">
            IM
          </span>
          <div className="h-[2px] w-50 sm:h-[3px] md:h-[4px] lg:h-[6px] sm:w-60 md:w-80 lg:w-130 bg-yellow-400"></div>
        </div>
        <h1
          className="mt-4 font-extrabold tracking-wider
                   text-3xl sm:text-4xl md:text-5xl lg:text-7xl"
        >
          MANOJ MOGAL
          {/* {letters?.map((letter, index) => (
            <span className="ml-3 cursor-pointer transition duration-300 transform hover:text-blue-400 hover:translate-y-1">
              {letter}
            </span>
          ))} */}
        </h1>
        <div className="w-full flex justify-end">
          <TextSwapper />
        </div>
      </div>
    </div>
  );
}

export default Hero;
