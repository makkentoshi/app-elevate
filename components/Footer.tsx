import React from "react";
import XSocial from "../public/x-social.svg";
import TiktokIcon from "../public/tiktok.svg";
import YoutubeIcon from "../public/youtube.svg";
import InstaIcon from "../public/insta.svg";

const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-center">2024 Your Company, Inc. All rights reserved</div>
          <div className="">
            <ul className="flex justify-center gap-2.5">
              <li>
                <XSocial></XSocial>
              </li>
              <li>
                <TiktokIcon></TiktokIcon>
              </li>
              <li>
                <YoutubeIcon></YoutubeIcon>
              </li>
              <li>
                <InstaIcon></InstaIcon>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
