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
  const [contacts, setContacts] = useState<Contact[]>([]);

  return (
    <ContactContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactContext.Provider>
  )
}