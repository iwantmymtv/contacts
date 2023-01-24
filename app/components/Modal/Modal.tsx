import ModalForm from "./ModalForm";

type ModalProps = {
    title: string
}
const Modal:React.FC<ModalProps> = ({title}) => {
    return (
        <div className="fixed w-screen h-screen top-0 left-0 m-auto">
            <div className="z-40 bg-black opacity-[0.40] absolute top-0 right-0 w-full h-full"></div>

            <div className="z-50 absolute transform-center flex flex-col bg-grey-100 rounded-base p-7 w-[364px]">
                <h2 className="h2 mb-6">{title}</h2>
                <ModalForm />
                <div className=" flex justify-end gap-2">
                    <button className="btn bg-grey-100">Cancel</button>
                    <button className="btn">Done</button>

                </div>
            </div>

        </div>
    )
}

export default Modal;