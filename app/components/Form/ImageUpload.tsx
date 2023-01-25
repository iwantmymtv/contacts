'use client'

import { useContext, useState } from 'react';

import Image from 'next/image';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

import { ImageContext } from './ImageProvider';


const ImageUpload: React.FC = () => {
    
    const [hasImage,setHasImage] = useState<boolean>(false)
    const {imagePreviewUrl, setImagePreviewUrl} = useContext(ImageContext);
  
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
  
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result as string);
        setHasImage(true)
      }

      reader.readAsDataURL(file!);
    }
    const handleRemove = () => {
        setImagePreviewUrl(null)
        setHasImage(false)
    }

    return (
        <div className=" mb-6 flex items-center" >
            <Image
                className="rounded-full w-[88px] h-[88px]  mr-4"
                src={imagePreviewUrl ? imagePreviewUrl : '/imgs/profile.png'}
                width={88}
                height={88}
                alt={`profile picture`}
            />
            <div className="pl-3 flex gap-2">
                <Button className='relative'>
                    <input className='cursor-pointer opacity-0 absolute w-full h-full' type="file" onChange={handleFileChange} />
                    <Icon name={hasImage ? "change" : "add"} className="mr-2" />
                    <span className="hidden md:block"> {hasImage ? "Change picture" :"Add new"} </span>
                </Button>

                {hasImage && 
                    <Button iconOnly onclick={handleRemove}>
                        <Icon name="trash"  />
                    </Button>
                }
            </div>
        </div>
    );
};

export default ImageUpload;
