"use client";
import Modal from "@/components/shared/Modal";
import ChangePlaylistCover from "@/components/ui/ChangePlaylistCover";
import PlaylistIdHeader from "@/components/ui/PlaylistIdHeader";
import PlaylistIdItems from "@/components/ui/PlaylistIdItems";
import PlaylistIdTools from "@/components/ui/PlaylistIdTools";
import { useGetPlaylistByIdQuery } from "@/redux/api/playlist";
import { useAddCoverStore } from "@/store/useAddCoverStore";
import { useParams } from "next/navigation";
import React from "react";

const PlaylistId = () => {
  const { playlistId } = useParams();
  const { data } = useGetPlaylistByIdQuery(String(playlistId));
  const { isOpen } = useAddCoverStore();
  return (
    <section>
      <div className="conteiner relative">
        <div className="flex flex-col p-6 bg-gradient-to-b from-purple-950 ">
          <PlaylistIdHeader data={data} />
          <PlaylistIdTools />
          <PlaylistIdItems data={data} />
        </div>
        <Modal open={isOpen} className="top-[50%] left-[50%] fixed ">
          <ChangePlaylistCover data={data} />
        </Modal>
      </div>
    </section>
  );
};

export default PlaylistId;
