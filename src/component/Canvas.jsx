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
      <button
        className="absolute right-4 top-[100px] py-2 px-9 text-white rounded-sm bg-green-800"
        onClick={handleDownloadClick}
      >
        Save
      </button>
    </div>
  );
}

export default Canvas;
