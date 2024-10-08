"use client";
import { useHeaderStore } from "@/store/useHeaderStore";
import { useRouter } from "next/navigation";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
const ProfileMenu = () => {
  const { logout } = useHeaderStore();
  const router = useRouter();
  return (
    <div className="w-full flex flex-col z-10">
      <button className="flex items-center px-3 py-2 hover:bg-neutral-700 transition justify-between gap-x-4  rounded-md">
        Акаунт
        <BiLinkExternal size={20} className="text-white" />
      </button>
      <button
        className="flex items-center px-3 py-2 hover:bg-neutral-700 transition justify-between rounded-md"
        onClick={() => router.push("/profile")}
      >
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
