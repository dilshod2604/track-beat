import { usePlayerstore } from "@/store/usePlayerStaore";
import { IPlaylistById } from "@/types/schema";
import React from "react";

interface PlaylistIdItemsProps {
  data: IPlaylistById | undefined;
}

const PlaylistIdItems: React.FC<PlaylistIdItemsProps> = (props) => {
  const { data } = props; 
  const { setTrackIndex, setTrackUris, activeTrackUri, setActiveTrackUri } =
    usePlayerstore();

  const playMusic = (index: number, uri: string) => {
    if (data) {
      const filterTrackUris = data?.tracks.items.map((item) => item.track.uri);
      setTrackUris(filterTrackUris!);
      setTrackIndex(index);
      setActiveTrackUri(uri);
    }
  };

  const style = (uri: string) => {
    return activeTrackUri === uri
      ? `text-[#22c55e] font-semibold hover:underline hover:decoration-white cursor-pointer `
      : `text-white font-semibold hover:underline hover:decoration-white cursor-pointer`;
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-4">
        {data?.tracks.items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between px-4 py-2 hover:bg-neutral-700 rounded-md"
            onClick={() => playMusic(index, item.track.uri)}
          >
            <div className="flex items-center gap-x-3">
              <div>{index + 1}</div>
              <div className="w-[50px] h-[50px] flex items-center justify-center overflow-hidden rounded-md">
                {item.track.album.images.length > 0 ? (
                  <img
                    src={item.track.album.images[0].url}  
                    alt="image"
                    className="w-full h-full"
                  />
                ) : (
                  <div className="bg-gray-500 w-full h-full flex items-center justify-center text-white">
                    No Image
                  </div>
                )}
              </div>
              <div>
                <p className={style(item.track.uri)}>{item.track.name}</p>
                <p className="text-neutral-300 text-sm hover:underline hover:decoration-white cursor-pointer font-medium">
                  {item.track.artists[0].name}
                </p>
              </div>
            </div>
            <div className="flex items-start ">
              <p className="text-neutral-300 font-semibold hover:underline hover:decoration-white hover:text-white cursor-pointer">
                {item.track.name}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 w-full border border-r-red-900"></div>
    </div>
  );
};

export default PlaylistIdItems;
