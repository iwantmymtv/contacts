import { createContext, useState } from 'react';
import { Contact } from './ContactList';

interface ContactContextProps {
    contacts: Contact[],
    setContacts: (contacts: Contact[]) => void;
}

export const ContactContext = createContext<ContactContextProps>({
    contacts: [],
    setContacts: () => {}
});

interface Props {
  children: React.ReactNode;
}

export const ContactProvider: React.FC<Props> = ({children}) => {
  const [contacts, setContacts] = useState<Contact[]>([
    { id: 1, name: 'John Doe', phone: '555-555-5555' },
    { id: 2, name: 'Jane Smith', phone: '555-555-5556', img: 'https://picsum.photos/200' },
    { id: 3, name: 'Bob Johnson', phone: '555-555-5557' },
    { id: 4, name: 'Emily Davis', phone: '555-555-5558', img: 'https://picsum.photos/200' },
    { id: 5, name: 'Michael Brown', phone: '555-555-5559' },
  ]);

  return (
    <ContactContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactContext.Provider>
  )
}