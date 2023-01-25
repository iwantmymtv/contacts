import { createContext, useState } from 'react';
import { ContactData } from './ContactList';

interface ContactContextProps {
    contacts: ContactData[],
    setContacts: (contacts: ContactData[]) => void;
}

export const ContactContext = createContext<ContactContextProps>({
    contacts: [],
    setContacts: () => {}
});

interface Props {
  children: React.ReactNode;
}

export const ContactProvider: React.FC<Props> = ({children}) => {
  const [contacts, setContacts] = useState<ContactData[]>([]);

  return (
    <ContactContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactContext.Provider>
  )
}