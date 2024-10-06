import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdFormatListBulleted } from "react-icons/md";
import PlayerButton from "../shared/PlayerButton";

const PlaylistIdTools = () => {
  return (
    <div className="flex items-center justify-between mt-10 ">
      <div className=" flex items-center gap-x-5">
        <PlayerButton />
        <BsThreeDots size={30} className="text-neutral-400 cursor-pointer hover:text-white"  />
      </div>
      <div className="flex items-center justify-end  gap-x-2 cursor-pointer text-neutral-400 hover:text-white transition ">
        <p className="text-sm"> Список</p>
        <MdFormatListBulleted size={20} />
      </div>
    </div>
  );
};

export default PlaylistIdTools;
