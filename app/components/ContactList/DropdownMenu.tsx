'use client'

import { useContext } from "react";
import Icon from "../Icon/Icon";
import { ContactContext } from "./ContactProvider";
import { ModalContext } from "../Modal/ModalProvider";

type Props = {
    id:number
}

const DropdownMenu:React.FC<Props> = ({id}) => {
    const {contacts,setContacts} = useContext(ContactContext);
    const {openModal} = useContext(ModalContext);

    const handleRemove = (id:number) => {
        setContacts(contacts.filter(contact => contact.id !== id))
    }
    
    return (
        <div className="absolute top-[30px] right-[-12px] flex gap-5 p-4">
          <ul className="w-60 rounded-base overflow-hidden bg-grey-70">
              <li >
                  <button onClick={openModal} className="py-3 btn rounded-none bg-grey-70 pl-3 w-full flex-start">
                        <Icon name="settings" />
                      <span className="ml-2">Edit</span>
                  </button>
              </li>
              <li >
                  <button className=" py-3 btn rounded-none bg-grey-70 pl-3 w-full flex-start">
                  <Icon name="heart" />
                      <span className="ml-2">Favourite</span>
                  </button>
              </li>
              <li >
                  <button onClick={() => handleRemove(id)} className="btn py-3 rounded-none bg-grey-70 pl-3 w-full flex-start">
                    <Icon name="trash" />
                      <span className="ml-2">Remove</span>
                  </button>
              </li>
          </ul>
      </div>
    )
}

export default DropdownMenu;