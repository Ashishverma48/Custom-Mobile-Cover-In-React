import React, { useState } from "react";
import cameraImg from "../../public/other/camera1.png";
// import cameraImg1 from "../../public/other/camera2.png";
// import cameraImg from "../../public/other/case-foregr.svg";

function PhoneForground({ style, ...props }) {
  // console.log({ ...style });
  const [width, setWidth] = useState("90");
  const [height, setHeight] = useState("100");
  const [top, setTop] = useState("10");
  const [left, setLeft] = useState("10");
  const [imgPath, setImagePath] = useState(cameraImg);
  return (
    <div
      className="forCamera"
      // {...props}
      // style={{ backgroundImage: `url(${cameraImg})`, ...style }}
    >
      <img
        src={imgPath}
        alt=""
        srcset=""
        style={{
          width: `${width}px`,
          height: `${height}px`,
          top: `${top}px`,
          left: `${left}px`,
          position: "absolute",
        }}
      />
    </div>
  );
}

export default PhoneForground;
