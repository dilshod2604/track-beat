import React from "react";
import { FiEdit2 } from "react-icons/fi";
interface PlaylistIdHeaderProps {
  data: IPlaylistById | undefined;
}
const PlaylistIdHeader: React.FC<PlaylistIdHeaderProps> = (props) => {
  const { data } = props;
  return (
    <div className="flex items-center w-full justify-start gap-x-5 mt-5">
      <div className="relative flex group items-center justify-center w-[150px] h-[150px] overflow-hidden rounded-md">
        <img src={data?.images[0].url} alt="image" className="w-full h-full" />
        <button className="absolute flex flex-col items-center justify-center w-full h-full opacity-0 group-hover:opacity-100 group-hover:bg-neutral-950/75 transition focus:outline-none">
          <FiEdit2 size={50} className="text-white" />
          <p className="text-white">Выбрать фото</p>
        </button>
      </div>
      <div className="flex flex-col gap-y-5">
        <p className="text-white">Плейлист</p>
        <h1 className="tex-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
          {data?.name}
        </h1>
        <div className="flex items-center gap-x-1 ">
          <div className="flex items-center justify-center w-[20px] h-[20px] rounded-full overflow-hidden">
            <img src="#" alt="" />
          </div>
          <p className="text-white font-bold hover:underline hover:text-decoration-solid hover:decoration-white cursor-pointer">
            {data?.owner.display_name}
          </p>
        </div>
      </div>
    </div>  
  );
};

export default PlaylistIdHeader;
