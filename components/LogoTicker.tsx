import Image from "next/image";
import React from "react";
import acmeLogo from "../public/acme.png";
import echoLogo from "../public/echo.png";
import celestialLogo from "../public/celestial.png";
import apexLogo from "../public/apex.png";
import pulseLogo from "../public/pulse.png";
import quantumLogo from "../public/quantum.png";

const images = [
  { src: apexLogo, alt: "apexLogo" },
  { src: celestialLogo, alt: "celestialLogo" },
  { src: acmeLogo, alt: "acmeLogo" },
  { src: echoLogo, alt: "echoLogo" },
  { src: pulseLogo, alt: "pulseLogo" },
  { src: quantumLogo, alt: "quantumLogo" },
];

const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-xl text-center  text-white/70">
          Trusted by the world's most innovative teams
        </h2>
        <div className="overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-20 after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))]  after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
          <div className="flex gap-16 container justify-center ">
            {images.map(({ src, alt }) => (
              <Image
                src={src}
                alt={alt}
                key={alt}
                className="flex-none h-8 w-auto"
              ></Image>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
