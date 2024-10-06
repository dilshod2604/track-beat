import React, { FC } from "react";
import { FaPlay } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
interface PlayerButtonProps {
  className?: string;
}
const PlayerButton: FC<PlayerButtonProps> = ({ className }) => {
  return (
    <button
      className={twMerge(
        `bg-green-500 flex p-5 rounded-full items-center justify-center trasition  drop-shadow-md
 hover:scale-110
    `,
        className
      )}
    >
      <FaPlay className="text-black" />
    </button>
  );
};

export default PlayerButton;
