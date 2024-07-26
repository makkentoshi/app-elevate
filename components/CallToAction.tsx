"use client";
import React, { useRef } from "react";
import helixImage from "../public/helix2.png";
import emojiStarImage from "../public/emojistar.png";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  return (
    <div
      className="bg-black text-white text-center py-[72px] sm:py-24"
      ref={containerRef}
    >
      <div className="container max-w-xl relative">
        <motion.div style={{ translateY }}>
          <Image
            src={helixImage}
            alt="helixImage"
            className="absolute -top-[120px] right-[calc(100%+24px)] translate-y-20"
          ></Image>
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            src={emojiStarImage}
            alt="emojiStarImage"
            className="absolute top-6 left-[calc(100%+36px)]"
          ></Image>
        </motion.div>
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl py-10">
          Get instant access
        </h2>
        <p className="text-xl text-white/70 mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 bg-white/20 rounded-xl px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
          ></input>
          <button className="bg-white text-black h-12 rounded-[10px] px-6 ">
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};

export default CallToAction;
