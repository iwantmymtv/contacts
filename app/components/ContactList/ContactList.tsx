import ListItem from "./ListItem";

export interface Contact {
    id: number;
    name: string;
    phone: string;
    img?: string | File;
}

type ContactListProps = {
    data: Contact[]
}

const ContactList: React.FC<ContactListProps> = ({data}) => {
    return (
        <ul className="p-6 w-full flex flex-col gap-4">
              {data.map((item) => (
                <ListItem key={item.id} name={item.name} phone={item.phone} img={item.img} id={item.id} />
            ))}
        </ul>
    )
}

export default ContactList;