import React, { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Playlists from "../shared/Playlists";
interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex w-full h-[630px] px-4 gap-x-2 mt-24 overflow-hidden ">
        <Playlists />
        <main className="w-full bg-neutral-900 rounded-lg  overflow-y-auto">
          {children}
        </main>
      </div>
      <Footer />    
    </div>
  );
};

export default Layout;
