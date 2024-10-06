"use client";
import {
  useGetDevicesQuery,
  useGetPlayBackStateQuery,
  usePlayPlayerMutation,
} from "@/redux/api/player";
import React from "react";
import { FaPlay } from "react-icons/fa6";
import { GiNextButton } from "react-icons/gi";
import { GiPreviousButton } from "react-icons/gi";

const SpotifyPlayer: React.FC = () => {
  const { data } = useGetPlayBackStateQuery();
  const { data: device } = useGetDevicesQuery();
  const [playPLayer] = usePlayPlayerMutation();

  const play = async () => {
    try {
      playPLayer(device?.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex items-center gap-x-4">
        <GiPreviousButton size={25} className="text-white" />
        <FaPlay size={25} className="text-white" onClick={play} />
        <GiNextButton size={25} className="text-white" />
      </div>
    </div>
  );
};

export default SpotifyPlayer;
