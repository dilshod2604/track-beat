"use client";
import { useGetAlbumsQuery } from "@/redux/api/albums";
import { useGetMeQuery } from "@/redux/api/me";
import React from "react";
const Albums = () => {
  const { data: me } = useGetMeQuery();
  const { data: albums } = useGetAlbumsQuery(me?.id!);
  console.log("🚀 ~ Albums ~ albums:", albums);
  return (
    <section>
      <div className="container">
        <div></div>
      </div>
    </section>
  );``
};

export default Albums;
