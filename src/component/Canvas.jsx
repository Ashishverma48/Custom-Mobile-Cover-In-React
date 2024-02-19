import React, { useRef } from "react";
import PhoneFrame from "./PhoneFrame";

import DropArea from "./DropArea";
import html2canvas from "html2canvas";

function Canvas() {
  const canvasRef = useRef(null);

  const handleDownloadClick = () => {
    html2canvas(canvasRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "canvas.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };
  return (
    <>
      <div className="canva" ref={canvasRef}>
        <PhoneFrame />
        <DropArea />
      </div>
      <button
        onClick={handleDownloadClick}
        className="px-5 py-2  bg-red-300 h-12 w-40 "
      >
        Download
      </button>
    </>
  );
}

export default Canvas;
