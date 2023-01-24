import { createContext, useState } from 'react';

interface ImageContextProps {
  imageFile: File | null;
  setImageFile: React.Dispatch<React.SetStateAction<File | null>>;
}

interface Props {
    children: React.ReactNode;
  }

export const ImageContext = createContext<ImageContextProps>({
    imageFile: null,
    setImageFile: () => {}
});

export const ImageProvider: React.FC<Props> = ({ children }) => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const value = { imageFile, setImageFile };

  return <ImageContext.Provider value={value}>{children}</ImageContext.Provider>;
};

