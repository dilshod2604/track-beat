"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { IoIosSearch } from "react-icons/io";

const SearchTracks = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hasFocus, setHasFocus] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (hasFocus) {
      if (searchQuery) {
        router.push(`/search/${searchQuery}`);
      } else {
        router.push("/search");
      }
    }
  }, [searchQuery]);
  return (
    <div
      className="flex items-center w-full bg-neutral-800 px-3 rounded-full py-1 max-[800px]:w-auto max-[800px]:p-2 cursor-pointer"
      onClick={() => {
        router.push("/search");
        setHasFocus(true);
      }}
    >
      <IoIosSearch
        size={40}
        className="text-white text-2xlf lex items-center justify-center hover:opacity-75 trasition "
      />
      <DebounceInput
        type="text"
        minLength={2}
        debounceTimeout={300}
        value={searchQuery}
        placeholder="Что хочешь включить?"
        onChange={(e) => setSearchQuery(e.target.value)}
        onClick={() => {
          router.push("/search");
          setHasFocus(true);
        }}
        className="w-full bg-neutral-800 min-h-[45px] rounded-full focus:outline-none px-4 placeholder:text-neutral-400  placeholder:font-semibold max-[800px]:hidden"
      />
    </div>
  );
};

export default SearchTracks;
