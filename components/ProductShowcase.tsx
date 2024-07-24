import Image from "next/image";
import React from "react";
import appScreen from "../public/app-screen.png";

const ProductShowcase = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] py-24 ">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-center text-5xl font-bold tracking-tighter">
          Intuitive interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            Celebrate the joy of accomplishment with an app deisgned to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time
          </p>
        </div>
        <Image
          src={appScreen}
          alt="The product scrheenshot"
          className="mt-14"
        ></Image>
      </div>
    </div>
  );
};

export default ProductShowcase;
