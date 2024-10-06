"use client";

import PlaylistIdHeader from "@/components/ui/PlaylistIdHeader";
import PlaylistIdTools from "@/components/ui/PlaylistIdTools";
import { useGetPlaylistByIdQuery } from "@/redux/api/playlist";
import { useParams } from "next/navigation";
import React from "react";

const PlaylistId = () => {
  const { playlistId } = useParams();

  const { data } = useGetPlaylistByIdQuery(String(playlistId));
  return (
    <section className="">
      <div className="conteiner">
        <div className="flex flex-col p-6 bg-gradient-to-b from-purple-950 ">
          <PlaylistIdHeader data={data} />
          <PlaylistIdTools />
        </div>
      </div>
    </section>
  );
};

export default PlaylistId;
