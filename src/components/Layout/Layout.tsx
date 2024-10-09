"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Playlists from "../shared/Playlists";
import { useHeaderStore } from "@/store/useHeaderStore";
import Modal from "../shared/Modal";
import ProfileMenu from "../ui/ProfileMenu";
import Preloader from "../preloaders/Preloader";
interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isOpen } = useHeaderStore();
  const [preloader, setPreloader] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 4000);
  }, []);

  if (preloader) {
    return <Preloader />;
  } else {
    return (
      <div>
        <Header />
        <div className="flex w-full h-[630px] px-4 gap-x-2 mt-24 overflow-hidden ">
          <Playlists />
          <main className="w-full bg-neutral-900 rounded-lg  overflow-y-auto">
            {children}
          </main>
          <Modal open={isOpen} className="right-0 top-[100px] ">
            <ProfileMenu />
          </Modal>
        </div>
        {/* <Footer />     */}
      </div>
    );
  }
};

export default Layout;
