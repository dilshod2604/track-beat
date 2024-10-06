"use client";
import { useSearchTracksQuery } from "@/redux/api/search";
import { usePlayerstore } from "@/store/usePlayerStaore";
import { useParams } from "next/navigation";
import React from "react";
const SeearchResults = () => {
  const { searchQuery } = useParams();
  const decodeText = decodeURIComponent(String(searchQuery));
  const { data } = useSearchTracksQuery(decodeText);

  const { setTrackIndex, setTrackUris, activeTrackUri, setActiveTrackUri } =
    usePlayerstore();

  const playMusic = (index: number, uri: string) => {
    const filterTrackUris = data?.tracks.items.map((item) => item.uri);
    setTrackUris(filterTrackUris!);
    setTrackIndex(index);
    setActiveTrackUri(uri);
  };
  const style = (uri: string) => {
    return activeTrackUri === uri
      ? `text-[#22c55e] font-semibold hover:underline hover:decoration-white cursor-pointer `
      : `text-white font-semibold hover:underline hover:decoration-white cursor-pointer`;
  };
  return (
    <section className="flex flex-col">
      <div className="flex flex-col p-4     ">
        {data?.tracks.items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between px-4 py-2 hover:bg-neutral-700 rounded-md"
            onClick={() => playMusic(index, item.uri)}
          >
            <div className="flex items-center gap-x-3">
              <div>{index + 1}</div>
              <div className="w-[50px] h-[50px] flex items-center justify-center overflow-hidden rounded-md">
                <img
                  src={item.album.images[0].url}
                  alt="image"
                  className="w-full h-full"
                />
              </div>
              <div>
                <p className={style(item.uri)}>{item.name}</p>
                <p className="text-neutral-300 text-sm hover:underline hover:decoration-white cursor-pointer font-medium">
                  {item.artists[0].name}
                </p>
              </div>
            </div>
            <div className="flex items-start ">
              <p className="text-neutral-300 font-semibold hover:underline hover:decoration-white hover:text-white cursor-pointer">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 w-full border border-r-red-900"></div>
    </section>
  );
};

export default SeearchResults;
