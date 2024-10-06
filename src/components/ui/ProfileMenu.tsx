"use client";
import { useHeaderStore } from "@/store/useHeaderStore";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
const ProfileMenu = () => {
  const { logout } = useHeaderStore();
  return (
    <div className="w-full flex flex-col">
      <button className="flex items-center px-3 py-2 hover:bg-neutral-700 transition justify-between gap-x-4  rounded-md">
        Акаунт
        <BiLinkExternal size={20} className="text-white" />
      </button>
      <button className="flex items-center px-3 py-2 hover:bg-neutral-700 transition justify-between rounded-md">
        Профиль
      </button>
      <button className="flex items-center px-3 py-2 hover:bg-neutral-700 transition justify-between gap-x-4 rounded-md">
        Переход на Premium
        <BiLinkExternal size={20} className="text-white" />
      </button>
      <button className="flex items-center px-3 py-2 hover:bg-neutral-700 transition justify-between rounded-md">
        Настройки
      </button>
      <button
        className="flex items-center px-3 py-2 hover:bg-neutral-700 transition justify-between border-t border-t-neutral-500 "
        onClick={logout}
      >
        Выйти
      </button>
    </div>
  );
};

export default ProfileMenu;
