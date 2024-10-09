"use client";
import { useGetUserPLaylistsQuery } from "@/redux/api/playlist";
import { useRouter } from "next/navigation";
import React from "react";
import { FaPlay } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { usePlaylistMenuStore } from "@/store/usePlaylistMenuStore";
import Modal from "../shared/Modal";
import PlaylistMenu from "./PlaylistMenu";

const PlaylistItems = () => {
  const { data: playlists } = useGetUserPLaylistsQuery();
  const router = useRouter();
  const { isOpen, setIsOpen, playlistId, setPlaylistId } =
    usePlaylistMenuStore();
  const handleOpenMenu = (playlist_id: string) => {
    setPlaylistId(playlist_id);
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col gap-y-3 px-4  overflow-y-scroll ">
      {playlists &&
        playlists?.items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between px-4 gap-x-3 py-2 hover:bg-neutral-700 rounded-md transition group cursor-pointer relative"
          >
            <div
              className=" w-[50px] h-[50px] overflow-hidden rounded-md  relative flex items-center justify-center"
              onClick={() => router.push(`/playlist/${item.id}`)}
            >
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
            <div className="flex flex-col max-md:hidden">
              <p
                className="text-white font-semibold cursor-pointer hover:underline "
                onClick={() => router.push(`/playlist/${item.id}`)}
              >
                {item.name}
              </p>
              <p className="text-sm text-neutral-400 font-medium truncate">
                Плейлист•{item.owner.display_name}
              </p>
            </div>
            <BsThreeDotsVertical
              className="text-neutral-300 absolute right-0 top-2 max-md:hidden "
              onClick={() => handleOpenMenu(item.id)}
            />
            {playlistId === item.id && (
              <Modal open={isOpen} className="right-0 top-[7px] z-20  ">
                <PlaylistMenu />
              </Modal>
            )}
          </div>
        ))}
    </div>
  );
};

export default PlaylistItems;
