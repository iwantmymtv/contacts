'use client'
import { useContext, useEffect, useState } from "react";
import ContactList from "./components/ContactList/ContactList"
import { ContactContext } from "./components/ContactList/ContactProvider"
import { getContacts } from "./utils";

export default function Home() {
  const {contacts,setContacts} = useContext(ContactContext);
  const [isLoading, setIsLoading] = useState<boolean>(false)

  let content = <ContactList data={contacts} /> 

  if (contacts.length === 0){
    content = <p className="h3 text-center mt-4">No contacts...</p>
  }
  if (isLoading){
    content = <p className="h3 text-center mt-4">Loading...</p>
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const data = await getContacts();
      setContacts(data);
      setIsLoading(false)
    }
    fetchData();
  }, []);

  return (
    <main className="h-full mx-auto md:max-w-xl xl:max-w-5xl border-x border-grey-60">
      {content}
    </main>
  )
}
