'use client'
import { useContext } from "react";
import ContactList from "./components/ContactList/ContactList"
import { ContactContext } from "./components/ContactList/ContactProvider"

export default function Home() {
  const {contacts} = useContext(ContactContext);
  return (
    <main className="h-full mx-auto md:max-w-xl xl:max-w-5xl border-x border-grey-60">
        <ContactList data={contacts} />
    </main>
  )
}
