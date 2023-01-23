import ContactList from "./components/ContactList/ContactList"

export default function Home() {
  return (
    <main className="h-full mx-auto md:max-w-xl xl:max-w-5xl border-x border-grey-60">
        <ContactList/>
    </main>
  )
}
