import React, { useRef } from "react";
import PhoneFrame from "./PhoneFrame";
import { useImage } from "../context/Context";
import DropArea from "./DropArea";
import html2canvas from "html2canvas";
import cacti from "../../public/backgrounds/cacti.jpg";
import flowers from "../../public/backgrounds/flowers.jpg";
import lama from "../../public/backgrounds/lama.jpg";

import sunset from "../../public/backgrounds/sunset.jpg";
function Canvas() {
  const canvasRef = useRef(null);
  const { addImage, addImagePath } = useImage();

  const handleFileChange = (event) => {
    addImage(event.target.files[0]);
  };

  const handleDownloadClick = () => {
    html2canvas(canvasRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "canvas.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };
  return (
    <div className="flex justify-center flex-col w-full gap-5">
      <div className="canva" ref={canvasRef}>
        <PhoneFrame />
        <DropArea />
      </div>
      <input
        type="file"
        onChange={handleFileChange}
        className="py-3 px-5 bg-fuchsia-800 rounded-md font-semibold text-white shadow-lg"
      />

      {/* <button
        onClick={handleDownloadClick}
        className="px-5 py-2  bg-red-300 h-12 w-40 "
      >
        Download
      </button> */}
      <p className="text-center text-white  py-2 font-semibold">Select Image</p>
      <div className="border p-2 grid grid-cols-2 md:grid-cols-2 gap-3">
        <div>
          <img
            src={lama}
            alt=""
            className="w-full"
            onClick={(e) => {
              addImagePath(e.target.src);
            }}
          />
        </div>
        <div>
          <img
            src={cacti}
            alt=""
            className="w-full"
            onClick={(e) => {
              addImagePath(e.target.src);
            }}
          />
        </div>
        <div>
          <img
            src={flowers}
            alt=""
            className="w-full"
            onClick={(e) => {
              addImagePath(e.target.src);
            }}
          />
        </div>
        <div>
          <img
            src={sunset}
            alt=""
            className="w-full"
            onClick={(e) => {
              addImagePath(e.target.src);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Canvas;
