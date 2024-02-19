import { useState } from "react";
import Canvas from "./component/Canvas";
import Images from "./component/Images/Images";
import { ImageProvider } from "./context/Context";

import "./style.scss";
function App() {
  const [image, setImage] = useState(null);
  const [imagePath,setImagePath] = useState(null)
  const addImage = (img) => {
    setImage(img);
  };
  const addImagePath = (img)=>{
    setImagePath(img)
  }

  // console.log('app',image);

  return (
    <ImageProvider value={{ addImage, image ,imagePath,addImagePath}}>
      <div className="mainCanva">
        <Images />
        <Canvas />
      </div>
      
    </ImageProvider>
  );
}

export default App;
