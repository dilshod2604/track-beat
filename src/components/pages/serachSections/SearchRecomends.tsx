"use client";
import { useGetCategoryQuery } from "@/redux/api/categotry";
import React, { useState, useEffect } from "react";

const SearchRecomends = () => {
  const { data } = useGetCategoryQuery();
  function getRandom(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
  return (
    <section className="w-full h-full pt-[50px]">
      <div className="container">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-white font-bold text-2xl">Все остальное</h1>
          <div className="flex flex-wrap gap-x-4 gap-y-4">
            {data?.categories.items.map((item, index) => (
              <div
                key={index}
                className="relative w-[300px] h-[150px] rounded-xl overflow-hidden pt-4 pl-4"
                style={{
                  background: `rgb(${Math.floor(
                    getRandom(0, 255)
                  )},${Math.floor(getRandom(0, 255))},${Math.floor(
                    getRandom(0, 255)
                  )})`,
                }}
              >
                <h1 className="text-white font-bold text-xl">{item.name}</h1>
                {item.icons.map((icon, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center w-[100px] h-[100px] absolute overflow-hidden rounded-md 
                    right-[-12px] bottom-[-12px] translate rotate-45"
                  >
                    <img src={icon.url} alt="icon" className="w-full h-full" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchRecomends;
