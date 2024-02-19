import { useContext, createContext } from "react";
export const ImageContext = createContext({
  image: null,
  imagePath: null,
  addImage: () => {},
  addImagePath: () => {},
  
});

export const useImage = () => {
  return useContext(ImageContext);
};

export const ImageProvider = ImageContext.Provider;
