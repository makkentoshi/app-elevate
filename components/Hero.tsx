import Link from "next/link";
import React from "react";
import ArrowIcon from "../public/arrow-w.svg";
import CursorImage from "../public/cursor.png";
import MessageImage from "../public/message.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px]  sm:h-[768px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 lg:w-[2400px] lg:h-[1200px] py-[72px] sm:py-24 border border-[#af72f1] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] bottom-[24px] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <Link
            href="#"
            className="inline-flex gap-2 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              Read More
              <ArrowIcon></ArrowIcon>
            </span>
          </Link>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center  inline-flex">
              One Task <br></br> at a Time
            </h1>
            <Image
              src={CursorImage}
              alt="cursorimage"
              height={"200"}
              width={"200"}
              className="absolute right-[476px] top-[108px] hidden sm:inline"
            ></Image>
            <Image
              src={MessageImage}
              alt="messageimage"
              height={"200"}
              width={"200"}
              className="absolute left-[498px] top-[56px] hidden sm:inline"
            ></Image>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
