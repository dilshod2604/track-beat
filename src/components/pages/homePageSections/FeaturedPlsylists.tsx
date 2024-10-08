"use client";
import React from "react";
import Button from "@/components/custom/Button";
import { useGetFeaturedPlaylistQuery } from "@/redux/api/featured";
import { FaPlay } from "react-icons/fa";

const FeaturedPlsylists = () => {
  const { data: featured } = useGetFeaturedPlaylistQuery();
  console.log("🚀 ~ FeaturedPlsylists ~ featured:", featured);
  return (
    <section>
      <div className="container">
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-2xl mb-5">
            {featured?.message}
          </h1>
          <div className=" flex items-center overflow-x-auto gap-x-4  ">
            {featured?.playlists.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col  h-[250px] rounded-xl hover:bg-neutral-800 px-2 py-2 gap-y-4"
              >
                {item.images.map((image, index) => (
                  <div className=" flex items-center justify-center overflow-hidden w-[200px] h-[200px] rounded-xl group relative">
                    <img
                      key={index}
                      src={image.url}
                      alt="cover"
                      className="w-full h-full"
                    />
                    <Button className="w-[50px] h-[50px] rounded-full flex items-center justify-center absolute bottom-4 right-4 opacity-0 group-hover:opacity-100  transition  ">
                      <FaPlay />
                    </Button>
                  </div>
                ))}
                <div className="flex flex-col">
                  <p className="text-neutral-300 font text-xl ">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlsylists;
