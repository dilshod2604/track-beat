"use client";
import { useGetUserPLaylistsQuery } from "@/redux/api/playlist";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
const PlaylistItems = () => {
  const { data: playlists } = useGetUserPLaylistsQuery();
  const router = useRouter();

  return (
    <div className="flex flex-col gap-y-3 px-4  overflow-y-scroll ">
      {playlists &&
        playlists?.items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between px-4 gap-x-3 py-2 hover:bg-neutral-700 rounded-md transition group cursor-pointer "
            onClick={() => router.push(`/playlist/${item.id}`)}
          >
            <div className=" w-[50px] h-[50px] overflow-hidden rounded-md  relative flex items-center justify-center">
              <img
                src={item.images ? item.images[0].url : ""}
                alt={item.name}
                className="w-full h-full "
              />
              <button
                className="flex items-center justify-center  absolute opacity-0 group-hover:opacity-100 w-full
            h-full group-hover:bg-neutral-950/55"
              >
                <FaPlay className="text-white" />
              </button>
            </div>
            <div className="flex flex-col">
              <p className="text-white font-semibold">{item.name}</p>
              <p className="text-sm text-neutral-400 font-medium truncate">
                Плейлист•{item.owner.display_name}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PlaylistItems;
