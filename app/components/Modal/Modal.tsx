'use client'

import { useContext } from "react";
import { ModalContext } from './ModalProvider';

type ModalProps = {
    children: React.ReactNode
    title: string
}
const Modal:React.FC<ModalProps> = ({title,children}) => {
    const { isOpen, closeModal } = useContext(ModalContext);

    return (
        <>
        {isOpen && 
        <div className="z-40 fixed w-screen h-screen top-0 left-0 m-auto">
            <div onClick={closeModal} className="z-40 bg-black opacity-[0.40] absolute top-0 right-0 w-full h-full"></div>

            <div className="z-50 absolute transform-center flex flex-col bg-grey-100 rounded-base p-7 w-[364px]">
                <h2 className="h2 mb-6">{title}</h2>
                {children}
            </div>

        </div>
        }
        </>
    )
}

export default Modal;