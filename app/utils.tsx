import { ContactData } from "./components/ContactList/ContactList";
import { FormState } from "./components/Form/ContactForm";

// GET request
export async function getContacts(): Promise<ContactData[] | undefined> {
    try {
        const response = await fetch('/api/contacts');
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e);
    }
}

// GET request
export async function getSingleContact(id: number): Promise<ContactData | undefined> {
    try {
        const response = await fetch(`/api/contacts?id=${id}`);
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e);
    }
}

// POST request
export async function addContact(data: FormState): Promise<ContactData | undefined> {
    try {
        const response = await fetch('/api/contacts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const newContact = await response.json();
        return newContact;
    } catch (e) {
        console.error(e);
    }
}

// PUT request
export async function updateContact(id: number, data: FormState): Promise<ContactData | undefined> {
    try {
        const response = await fetch(`/api/contacts?id=${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const updatedContact = await response.json();
        return updatedContact;
    } catch (e) {
        console.error(e);
    }
}

// DELETE request
export async function deleteContact(id: number): Promise<void> {
    try {
        await fetch(`/api/contacts?id=${id}`, {
            method: 'DELETE'
        });
        console.log('Contact deleted');
    } catch (e) {
        console.error(e);
    }
}
