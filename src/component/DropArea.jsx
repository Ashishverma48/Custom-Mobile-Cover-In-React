import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import React, { useCallback, useEffect, useState } from "react";
import { fabric } from "fabric";
import img from "../../public/backgrounds/flowers.jpg";
import { useImage } from "../context/Context";
import PhoneForground from "./PhoneForground";
function DropArea() {
  const { selectedObjects, editor, onReady } = useFabricJSEditor();
  const { image, imagePath } = useImage(null);

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
    </>
  );
}

export default DropArea;
