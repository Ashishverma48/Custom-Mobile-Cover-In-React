import React, { useState } from "react";
import { useImage } from "../../context/Context";
import { IMAGES } from "../../contant";

function Images() {
  const { addImage, addImagePath } = useImage();

  const handleFileChange = (event) => {
    addImage(event.target.files[0]);
  };

  return (
    <div className="border px-7 py-3 mt-3 md:mt-0 shadow-md rounded-sm w-full md:w-1/2">
      <h2 className="font-semibold text-xl text-amber-500 py-1">
        Select Upload
      </h2>
      <div className="grid grid-cols-3 gap-2">
        {IMAGES?.map((src, index) => (
          <div>
            <img
              src={src}
              className=" h-40  w-full object-contain object-center rounded-sm"
              alt=""
              onClick={(e) => {
                addImagePath(e.target.src);
              }}
            />
          </div>
        ))}
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
