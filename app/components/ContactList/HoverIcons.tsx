'use client'

import { useState } from "react";

import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import DropdownMenu from "./DropdownMenu";
type Props = {
  id:number
}

const HoverIcons:React.FC<Props> = ({id}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex" >
         <Button onMouseEnter={() => setIsOpen(false)} iconOnly className="bg-grey-100">
            <Icon  name="mute" />
          </Button>
          <Button onMouseEnter={() => setIsOpen(false)}iconOnly className="bg-grey-100">
            <Icon  name="unmute" />
          </Button>
          <div onMouseEnter={() => setIsOpen(!isOpen)} className="z-0 btn bg-grey-100 px-2 relative cursor-pointer">
            <Icon  name="more" />
            {isOpen && <DropdownMenu id={id} />}
        </div>
    </div>
    )
}

export default HoverIcons;