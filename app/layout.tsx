'use client'

import './globals.css'
import Nav from '../app/components/Nav/Nav'
import { ContactProvider } from "./components/ContactList/ContactProvider"

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
        <ContactProvider>
          <Nav/>
          {children}
        </ContactProvider>
      </body>
    </html>
  )
}
