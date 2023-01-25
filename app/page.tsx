'use client'
import { useContext } from "react";
import ContactList from "./components/ContactList/ContactList"
import { ContactContext } from "./components/ContactList/ContactProvider"

export default function Home() {
  const {contacts} = useContext(ContactContext);
  let content = <ContactList data={contacts} /> 
  if (contacts.length === 0){
    content = <p className="h3 text-center mt-4">No contacts...</p>
  }

  return (
    <main className="h-full mx-auto md:max-w-xl xl:max-w-5xl border-x border-grey-60">
      {content}
    </main>
  )
}
