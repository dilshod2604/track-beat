import SpotifyPlayer from "@/components/shared/SpotifyPlayer";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center fixed  w-full  bottom-0 ">
      <div className="w-full bg-blue-800/55  h-[100px]">
        <SpotifyPlayer />
        footer
      </div>
    </footer>
  );
};  

export default Footer;
