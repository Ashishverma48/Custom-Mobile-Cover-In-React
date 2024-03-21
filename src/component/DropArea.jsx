import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import React, { useCallback, useEffect, useState } from "react";
import { fabric } from "fabric";
import img from "../../public/backgrounds/flowers.jpg";
import { useImage } from "../context/Context";
import PhoneForground from "./PhoneForground";
function DropArea() {
  const { selectedObjects, editor, onReady } = useFabricJSEditor();
  const { image, imagePath, addImage, addImagePath } = useImage(null);

  const [imageObject, setImageObject] = useState(null);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        setImageObject(imageUrl);
      };
      reader.readAsDataURL(image);
    } else if (imagePath) {
      setImageObject(imagePath);
    }
  }, [image, imagePath]);

  const handleCanvaReady = useCallback(() => {
    if (!imageObject || !editor) return;
    editor.canvas.clear();

    const onImageLoded = (oImg) => {
      oImg.scaleToWidth(230);
      editor.canvas.add(oImg);
    };
    fabric.Image.fromURL(imageObject, onImageLoded);

    return () => {
      editor.canvas.clear();
    };
  }, [editor, imageObject]);

  useEffect(() => {
    if (editor && imageObject) {
      handleCanvaReady();
    }
  }, [imageObject]);

  const deleteImage = () => {
    setImageObject(null);
    editor.canvas.clear();
    addImage(null);
    addImagePath(null);
  };
  return (
    <>
      <div
        style={{
          position: "relative",
        }}
      >
        <FabricJSCanvas className="sample-canvas" onReady={onReady} />
      </div>
      <PhoneForground />
      <div
        className="fixed flex bg-red-950  text-white cursor-pointer gap-3  py-2 px-4 rounded-sm shadow-md top-6 right-4"
        onClick={deleteImage}
      >
        <button>Clear</button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </>
  );
}

export default DropArea;
