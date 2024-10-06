"use client";
import Button from "@/components/custom/Button";
import SearchTracks from "@/components/shared/SearchTracks";
import ProfileButton from "@/components/ui/ProfileButton";
import { useGetMeQuery } from "@/redux/api/me";
import { useHeaderStore } from "@/store/useHeaderStore";
import React from "react";
import { FaSpotify } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";

const Header = () => {
  const { data: session } = useGetMeQuery();
  const { isOpen, logout, login, setIsOpen } = useHeaderStore();
  return (
    <header className="w-full flex items-center fixed bg-black top-0">
      <div className="container">
        <div className="flex items-center justify-between py-3 w-full ">
          <div className="flex items-center justify-start px-5 py-3  w-full">
            <FaSpotify size={40} className="text-white" />
          </div>
          <div className="flex items-center gap-x-3 w-full  ">
            <div
              className="flex items-center justify-center p-3 rounded-full bg-neutral-800 hover:scale-110 trasition"
              title="Главная"
            >
              <GoHomeFill size={30} className="text-white" />
            </div>
            <SearchTracks />
          </div>
          {session ? (
            <div className="w-full flex items-center justify-end">
              <ProfileButton />
            </div>
          ) : (
            <div className="flex gap-x-4 items-center  w-full justify-end ">
              <Button className=" flex items-center justify-center bg-transparent rounded-full text-white hover:scale-110 transition w-auto trasition ">
                Зарегистрироватся
              </Button>
              <Button
                onClick={login}
                className=" bg-white text-black flex items-center justify-center rounded-full hover:scale-110 w-auto px-6 trasition "
              >
                Войти
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
