'use client'

import { useState } from "react";
import HoverIcons from "./HoverIcons";

type ListItemProps = {
    name: string;
    phone: string;
    image?: string;
  }

const ListItem: React.FC<ListItemProps> = ({name,phone,image}) => {
    const [isHovering, setIsHovering] = useState(false);
    
    return (
      <li onMouseEnter={() => setIsHovering(true)} 
        onMouseLeave={() => setIsHovering(false)}
        className="flex w-full justify-between items-center">
          <div className="flex-center py-3">
              <img className="w-12 h-12 rounded-full" src="imgs/profile.png" alt="profile placeholder" />
              <div className="ml-4">
                  <h3 className="h3">{name}</h3>
                  <a className="text-message text-white/[0.56]" href={`tel:${phone}`}>{phone}</a>
              </div>
          </div>
          {isHovering && <HoverIcons />}
      </li>
    )
}

export default ListItem;