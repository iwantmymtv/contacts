import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse, NextApiHandler} from 'next'

import { ContactData } from '@/app/components/ContactList/ContactList'

type Query = {
    id?: string
}

interface ApiRequest extends NextApiRequest {
    body: ContactData
    query: Query
}


const prisma = new PrismaClient()

const contactsApi: NextApiHandler = async (req: ApiRequest, res: NextApiResponse) => {
    try {
        switch (req.method) {
            case 'GET':
              const { id } = req.query as Query
              let contacts;
              if (id) {
                  contacts = await prisma.contact.findUnique({
                      where: {
                          id: parseInt(id)
                      }
                  })
              } else {
                  contacts = await prisma.contact.findMany()
              }
              res.status(200).json(contacts)
                break
            case 'POST':
                const { name, email, phone, img } = req.body as ContactData
                const newContact = await prisma.contact.create({
                    data: { name, email, phone, img }
                })
                res.status(201).json(newContact)
                break
            case 'PUT':
                const { id: contactPutId } = req.query as Query
                const {  name: updateName, email: updateEmail, phone: updatePhone, img: updateImg } = req.body
                const updatedContact = await prisma.contact.update({
                    where: {
                        id: parseInt(contactPutId)
                    },
                    data: {
                        name: updateName,
                        email: updateEmail,
                        phone: updatePhone,
                        img: updateImg
                    }
                })
                res.status(200).json(updatedContact)
                break
            case 'DELETE':
                const { id: contactDeleteId } = req.query as Query
                await prisma.contact.delete({
                    where: {
                        id: parseInt(contactDeleteId)
                    }
                })
                res.status(204).end()
                break
            default:
                res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
                res.status(405).end(`Method ${req.method} Not Allowed`)
        }
    } catch (e) {
        console.error(e)
        res.status(500).end()
    } finally {
        await prisma.$disconnect()
    }
}

export default contactsApi;