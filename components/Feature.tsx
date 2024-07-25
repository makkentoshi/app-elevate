"use client";
import { useEffect, useRef } from "react";
import EcosystemIcon from "../public/ecosystem.svg";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}, black, transparent)`;
  const border = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const updateMousePos = (e: MouseEvent) => {
      if (!border.current) return;
      const borderRect = border.current?.getBoundingClientRect();
      offsetX.set(e.x- borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };
    window.addEventListener("mousemove", updateMousePos);
    return () => {
      window.removeEventListener("mousemove", updateMousePos);
    };
  }, []);

  return (
    <div className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 sm:py-12 lg:py-24 relative ">
      <motion.div
        className="absolute inset-0 border-2 border-purple-400 rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        ref={border}
      ></motion.div>
      <div className="inline-flex mx-auto h-14 w-14 bg-white text-black justify-center items-center rounded-xl">
        <EcosystemIcon></EcosystemIcon>
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  );
};

export default Feature;
