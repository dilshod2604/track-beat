"use client";
import {
  useAddCustomCoverMutation,
  useChangeDetailsMutation,
} from "@/redux/api/playlist";
import { useAddCoverStore } from "@/store/useAddCoverStore";
import { IPlaylistById } from "@/types/schema";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiEdit2 } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
interface ChangePlaylistCoverProps {
  data: IPlaylistById | undefined;
}

interface InputValue {
  name: string;
  description: string;
}
const ChangePlaylistCover: React.FC<ChangePlaylistCoverProps> = ({ data }) => {
  const [image, setImage] = useState<string>("");
  const [trackName, setTrackName] = useState<string>(data?.name!);
  const { register, handleSubmit } = useForm<InputValue>();
  const [addCustomCover] = useAddCustomCoverMutation();
  const [changeDetails] = useChangeDetailsMutation();
  const router = useRouter();
  const { setIsOpen } = useAddCoverStore();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if ((file && file.type === "image/png") || file?.type === "image/jpeg") {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64String = e.target?.result as string;
        setImage(base64String);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a PNG or JPG file.");
    }
  };

  const onSubmit: SubmitHandler<InputValue> = async (value) => {
    try {
      await addCustomCover({
        image: image.split(",")[1],
        playlist_id: data?.id!,
      });
      await changeDetails({
        name: value.name,
        description: value.description,
        playlist_id: data?.id!,
      });
      router.refresh();
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col pb-5">
      <div className="flex items-center justify-between py-5 mb-5">
        <h1 className="text-white font-bold text-xl ">Изменение сведений</h1>
        <MdOutlineClose
          size={25}
          className="text-white hover:opacity-75"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <div className="flex gap-x-4 items-center justify-between">
        <div className="relative flex group items-center justify-center w-[150px] h-[150px] overflow-hidden rounded-md">
          <img
            src={image ? image : data?.images ? data.images[0].url : ""}
            alt="image"
            className="w-full h-full"
          />
          <input
            type="file"
            className="absolute border  w-[150px] h-[150px] z-10 opacity-0 "
            accept="image/png, image/jpeg"
            onChange={handleFileChange}
          />
          <button className="absolute flex flex-col items-center justify-center w-full h-full opacity-0 group-hover:opacity-100 group-hover:bg-neutral-950/75 transition focus:outline-none">
            <FiEdit2 size={50} className="text-white" />
            <p className="text-white">Выбрать фото</p>
          </button>
        </div>
        <form
          className="flex flex-col gap-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            value={trackName}
            {...register("name", { required: true })}
            type="text"
            placeholder="name"
            onChange={(e) => setTrackName(e.target.value)}
            className="w-full h-[30px] bg-neutral-700 rounded-md focus:outline-none placeholder:text-neutral-400 text-white px-4 "
          />
          <textarea
            {...register("description", { required: false })}
            className="bg-neutral-700 text-white px-4 py-2 w-full placeholder:text-neutral-400 rounded-md"
            placeholder="Описание"
          />
          <button
            className="flex items-center justify-center px-5 py-2 rounded-full bg-white hover:opacity-75 hover:scale-x-110 transition text-black font-bold"
            type="submit"
          >
            Cохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePlaylistCover;
