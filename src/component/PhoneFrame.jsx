import React from "react";
import bgCover from "../../public/other/case-backgr.svg";
function PhoneFrame() {
  return (
    <div
      className="phoneFrame"
      style={{ backgroundImage: `url(${bgCover})` }}
    ></div>
  );
}

export default PhoneFrame;
