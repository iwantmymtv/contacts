import './globals.css'
import Nav from '../app/components/Nav/Nav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="w-screen h-screen bg-grey-100 overflow-x-hidden">
        <Nav/>
        {children}
      </body>
    </html>
  )
}
