'use client'

import { useState } from "react";
import HoverIcons from "./HoverIcons";
import Image from 'next/image';

import profilePlaceholder from '../../../public/imgs/profile.png'

type ListItemProps = {
    id: number;
    name: string;
    phone: string;
    img?: string;
  }

const ListItem: React.FC<ListItemProps> = ({name,phone,img,id}) => {
    const [isHovering, setIsHovering] = useState(false);
    
    return (
      <li onMouseEnter={() => setIsHovering(true)} 
        onMouseLeave={() => setIsHovering(false)}
        className="flex w-full justify-between items-center">
          <div className="flex-center py-3">
              <Image
                className="w-12 h-12 rounded-full"
                src={img ? img : profilePlaceholder}
                width={48}
                height={48}
                alt={`profile picture`}
              />
              <div className="ml-4">
                  <h3 className="h3">{name}</h3>
                  <a className="text-message text-white/[0.56]" href={`tel:${phone}`}>{phone}</a>
              </div>
          </div>
          {isHovering && <HoverIcons id={id} />}
      </li>
    )
}

export default ListItem;