import { createContext, useState } from 'react';

interface ImageContextProps {
  imagePreviewUrl: string | null;
  setImagePreviewUrl: React.Dispatch<React.SetStateAction<string | null>>;
}

interface Props {
    children: React.ReactNode;
  }

export const ImageContext = createContext<ImageContextProps>({
  imagePreviewUrl: null,
  setImagePreviewUrl: () => {}
});

export const ImageProvider: React.FC<Props> = ({ children }) => {
    const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
    const value = { imagePreviewUrl, setImagePreviewUrl };

  return <ImageContext.Provider value={value}>{children}</ImageContext.Provider>;
};

