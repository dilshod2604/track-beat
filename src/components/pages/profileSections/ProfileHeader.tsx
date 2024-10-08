"use client";
import { useGetMeQuery } from "@/redux/api/me";
import { useGetUserPLaylistsQuery } from "@/redux/api/playlist";
import React from "react";
import { FiEdit2 } from "react-icons/fi";
const ProfileHeader = () => {
  const { data: me } = useGetMeQuery();
  const { data: playlists } = useGetUserPLaylistsQuery();

  return (
    <section className="pt-[100px] bg-gradient-to-b from-teal-300">
      <div className="container">
        <div className="flex gap-x-5 items-center">
          <div className="relative flex group items-center justify-center w-[250px] h-[250px] overflow-hidden rounded-full">
            <img
              src={me?.images ? me.images[1].url : ""}
              alt="image"
              className="w-full h-full"
            />
            <button className="absolute flex flex-col items-center justify-center w-full h-full opacity-0 group-hover:opacity-100 group-hover:bg-neutral-950/75 transition focus:outline-none">
              <FiEdit2 size={50} className="text-white" />
              <p className="text-white">Выбрать фото</p>
            </button>
          </div>

          <div className="flex flex-col gap-x-5">
            <p className="text-white text-sm font-bold">Профиле</p>
            <h1 className="text-white font-black md:text-4xl lg:text-5xl ">
              {me?.display_name}
            </h1>
            <p className="text-white font-sm  font-bold">
              {playlists?.total} открытых плейлистов
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
