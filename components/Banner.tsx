import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="py-3 text-center bg-gradient-to-r from-[#29D8FF] via-[#29D8FF] via-[#FFFD80] via-[#F89ABF] to-[#FCD6FF]">
      <div className="container">
        <p className="font-medium">
          <span className="hidden sm:inline">
            Introducing a completely redesigned interface -{" "}  
          </span>
          <Link href="#" className="underline underline-offset-4 font-medium">
             Explore the demo
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Banner;
