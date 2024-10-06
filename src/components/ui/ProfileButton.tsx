"use client";
import { useGetMeQuery } from "@/redux/api/me";
import { useHeaderStore } from "@/store/useHeaderStore";
import React from "react";

const ProfileButton = () => {
  const { data: session } = useGetMeQuery();
  const { isOpen, login, logout, setIsOpen } = useHeaderStore();
  return (
    <div className="flex items-center gap-x-4">
      <div
        className="min-w-[60px] min-h-[60px] rounded-full p-1 flex items-center justify-center overflow-hidden hover:scale-110 bg-neutral-800"
        title={session?.display_name}
      >
        <button
          className="w-[40px] h-[40px]  rounded-full overflow-hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={session?.images[0].url}
            alt="my Image"
            className="w-full h-full"
          />
        </button>
      </div>
      <button
        className="flex items-center justify-center px-4 py-2"
        onClick={ logout}
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileButton;
