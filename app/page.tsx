'use client'
import { useContext } from "react";
import ContactList from "./components/ContactList/ContactList"
import { ContactContext } from "./components/ContactList/ContactProvider"
import useSWR from 'swr'

const fetcher = (url:string) => fetch(url).then((res) => res.json())

export default function Home() {
  const {contacts, setContacts} = useContext(ContactContext);
  const { data, error, isLoading } = useSWR('/api/contacts', fetcher)
  setContacts(data)

  return (
    <main className="h-full mx-auto md:max-w-xl xl:max-w-5xl border-x border-grey-60">
      
        {isLoading && <p className="h3 text-center mt-4">Loading...</p>}
        {data && <ContactList data={contacts} /> }
        
    </main>
  )
}
