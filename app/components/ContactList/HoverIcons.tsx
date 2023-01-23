'use client'

import { useState } from "react";

import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import DropdownMenu from "./DropdownMenu";

const HoverIcons = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex" >
         <Button iconOnly className="bg-grey-100">
            <Icon  name="mute" />
          </Button>
          <Button  iconOnly className="bg-grey-100">
            <Icon  name="unmute" />
          </Button>
          <div onClick={() => setIsOpen(!isOpen)} className="btn bg-grey-100 px-2 relative cursor-pointer">
            <Icon  name="more" />
            {isOpen && <DropdownMenu />}
        </div>
    </div>
    )
}

export default HoverIcons;