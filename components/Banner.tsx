import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="py-3 text-center bg-[linear-gradient(to_right,#FCD6ff,#29D8FF,#FFFD80,#F89ABF,#FCD6FF)]">
      <div className="container">
        <Link href="#" className="underline underline-offset-4 font-medium">
          Explore the demo
        </Link>
      </div>
    </div>
  );
};

export default Banner;
