"use client";
import { useGetUserPLaylistsQuery } from "@/redux/api/playlist";
import React from "react";
import { VscLibrary } from "react-icons/vsc";
import { LuPlus } from "react-icons/lu";
import { GoArrowRight } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { IoIosList } from "react-icons/io";
import PlaylistItems from "../ui/PlaylistItems";

const Playlists = () => {
  return (
    <div className=" h-screen bg-neutral-900 rounded-xl flex flex-col  ">
      <div className="flex items-center justify-between px-4 py-4  ">
        <div
          className="flex items-center gap-x-4 hover:opacity-75
        cursor-pointer"
        >
          <VscLibrary size={40} className="text-white" />
          <p className="text-white font-bold w-full truncate">Моя медиатека</p>
        </div>
        <div className="flex items-center gap-x-2 ml-2">
          <LuPlus
            size={30}
            className="text-neutral-300 p-1 rounded-full hover:bg-neutral-800 hover:text-white trasition  "
          />
          <GoArrowRight
            size={30}
            className="text-neutral-300 p-1 rounded-full hover:bg-neutral-800 hover:text-white transition "
          />
        </div>
      </div>
      <div className="flex  items-center justify-between px-4 mb-5  ">
        <div className="inline-flex items-center justify-start p-1   rounded-full hover:bg-neutral-800 ">
          <IoIosSearch
            size={25}
            className="text-neutral-300 hover:text-white transition cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-x-2 hover:opacity-75 hover:scale-110 cursor-pointer ">
          <span className="text-white text-sm flex items-center">
            Недавно прослушано
          </span>
          <IoIosList size={20} className="text-white" />
        </div>
      </div>
      <PlaylistItems />
    </div>
  );
};

export default Playlists;
