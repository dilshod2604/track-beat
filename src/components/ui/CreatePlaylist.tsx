"use client";
import { useGetMeQuery } from "@/redux/api/me";
import {
  useCreatePlaylistMutation,
  useGetUserPLaylistsQuery,
} from "@/redux/api/playlist";
import { useCreatePlaylistStore } from "@/store/useCreatePlaylistStore";
import React from "react";
import { MdOutlinePlaylistAdd } from "react-icons/md";
const CreatePlaylist = () => {
  const { data } = useGetMeQuery();
  const [createPlaylist] = useCreatePlaylistMutation();
  const { setIsOpen } = useCreatePlaylistStore();
  const { data: playlists } = useGetUserPLaylistsQuery();

  const handleCreatePlaylist = async () => {
    try {
      const user_id = data?.id;
      await createPlaylist({
        name: `Мой плейлист №${playlists?.items.length! + 1}`,
        description: "Мой плейлист",
        user_id: user_id!,
      });
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col ">
      <button
        className=" flex items-center gap-x-4 hover:bg-neutral-700 text-white transition rounded-md  py-2"
        onClick={handleCreatePlaylist}
      >
        <MdOutlinePlaylistAdd className="text-neutral-300" size={30} />
        <p className="text-neutral-300 font-semibold">Создать плейлисть</p>
      </button>
    </div>
  );
};

export default CreatePlaylist;
