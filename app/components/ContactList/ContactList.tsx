import ListItem from "./ListItem";

const ContactList = () => {
    return (
        <ul className="p-6 w-full flex flex-col gap-4">
            <ListItem name="John Doe" phone="+36705816979" />
            <ListItem name="Jane Doe" phone="+36705816979" />
        </ul>
    )
}

export default ContactList;