'use client'

import { useContext, useState } from 'react';

import Image from 'next/image';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

import { ImageContext } from './ImageProvider';

type Props = {
    className?: string
}
const ImageUpload: React.FC<Props> = ({className}) => {
    
    const {imagePreviewUrl, setImagePreviewUrl} = useContext(ImageContext);
  
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
  
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result as string);
      }

      reader.readAsDataURL(file!);
    }
    const handleRemove = () => {
        setImagePreviewUrl(null)
    }

    return (
        <div className={` mb-6 flex items-center ${className}`} >
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
                    <Icon name={imagePreviewUrl ? "change" : "add"} className="mr-2" />
                    <span className=""> {imagePreviewUrl ? "Change picture" :"Add new"} </span>
                </Button>

                {imagePreviewUrl && 
                    <Button iconOnly onclick={handleRemove}>
                        <Icon name="trash"  />
                    </Button>
                }
            </div>
        </div>
    );
};

export default ImageUpload;
