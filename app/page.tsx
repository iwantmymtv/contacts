import ContactList from "./components/ContactList/ContactList"


export default function Home() {
  const testData = [
    { id: 1, name: 'John Doe', phone: '555-555-5555' },
    { id: 2, name: 'Jane Smith', phone: '555-555-5556', img: 'https://example.com/jane.jpg' },
    { id: 3, name: 'Bob Johnson', phone: '555-555-5557' },
    { id: 4, name: 'Emily Davis', phone: '555-555-5558', img: 'https://example.com/emily.jpg' },
    { id: 5, name: 'Michael Brown', phone: '555-555-5559' },
  ];
  return (
    <main className="h-full mx-auto md:max-w-xl xl:max-w-5xl border-x border-grey-60">
        <ContactList data={testData}/>
    </main>
  )
}
