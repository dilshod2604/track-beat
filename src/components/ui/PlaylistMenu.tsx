"use clinet";
import { usePlaylistMenuStore } from "@/store/usePlaylistMenuStore";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const PlaylistMenu = () => {
  const { setIsOpen, isOpen, playlistId } = usePlaylistMenuStore();
  return (
    <div className="flex flex-col ">
      <div className="w-full border-b py-2 px-4 ">
        <IoMdClose
          className="text-white  hover:opacity-75"
          onClick={() => setIsOpen(!isOpen)}
          size={20}
        />
      </div>

      <div className="flex flex-col gap-x-4 py-4 items-center">
        <MdDelete
          className="text-neutral-300 hover:text-red-600 transition"
          size={20}
        />
      </div>
    </div>
  );
};

export default PlaylistMenu;
