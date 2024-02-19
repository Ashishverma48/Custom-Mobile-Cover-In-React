import React, { useState } from "react";
import { useImage } from "../../context/Context";
import cacti from "../../../public/backgrounds/cacti.jpg";
import flowers from "../../../public/backgrounds/flowers.jpg";
import star from "../../../public/backgrounds/star.jpeg";
import sunset from "../../../public/backgrounds/sunset.jpg";

function Images() {
  const { addImage, addImagePath } = useImage();

  const handleFileChange = (event) => {
    addImage(event.target.files[0]);
  };

  return (
    <div className="border px-10 py-5">
      <h2 className="font-semibold text-xl text-amber-500 py-1">
        Select Upload
      </h2>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <img
            src={cacti}
            className="w-full border h-48"
            alt=""
            onClick={(e) => {
              addImagePath(e.target.src);
            }}
          />
        </div>
        <div>
          <img
            src={flowers}
            className="w-full border  h-48"
            alt=""
            onClick={(e) => {
              addImagePath(e.target.src);
            }}
          />
        </div>
        <div>
          <img
            src={star}
            className="w-full border h-48"
            alt=""
            onClick={(e) => {
              addImagePath(e.target.src);
            }}
          />
        </div>
        <div>
          <img
            src={sunset}
            className="w-full border  h-48"
            alt=""
            onClick={(e) => {
              addImagePath(e.target.src);
            }}
          />
        </div>
      </div>
      <div className="mt-3">
        <label htmlFor="" className="text-white text-[18px]">
          Choose File
        </label>
        <input
          className="block w-full mt-1 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-800 p-2 dark:border-gray-600 dark:placeholder-gray-400"
          type="file"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}

export default Images;
