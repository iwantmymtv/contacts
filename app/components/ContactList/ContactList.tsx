import ListItem from "./ListItem";
import ModalProvider from "../Modal/ModalProvider";
import Modal from "../Modal/Modal";
import { ImageProvider } from "../Form/ImageProvider";
import ContactForm from "../Form/ContactForm";

export interface Contact {
    id: number;
    name: string;
    phone: string;
    img?: string | null;
}

type ContactListProps = {
    data: Contact[]
}

const ContactList: React.FC<ContactListProps> = ({data}) => {
    return (
        <ul className="p-6 w-full flex flex-col gap-4">
            <ModalProvider>
                <Modal title="Edit contact">
                <ImageProvider>
                    <ContactForm id={1}/>
                </ImageProvider>
                </Modal>
            {data && data.map((item) => (
                <ListItem key={item.id} name={item.name} phone={item.phone} img={item.img} id={item.id} />
            ))}
            </ModalProvider>
        </ul>
    )
}

export default ContactList;