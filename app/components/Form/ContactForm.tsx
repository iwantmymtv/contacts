import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../Modal/ModalProvider';
import { ImageContext } from './ImageProvider';
import { ContactContext } from '../ContactList/ContactProvider';

import Input from './Input';
import ImageUpload from './ImageUpload';
import Button from '../Button/Button';

import { validate } from './validation';
import { ValidationErrors } from './validation';
import { addContact,updateContact } from '@/app/utils';
import { ContactData } from '../ContactList/ContactList';

export type FormState = {
  id?: number 
  name: string
  phone: string
  email: string
  img?:string | null
}

const initialState: FormState = {
  name: '',
  phone: '',
  email: ''
}

const validationRules = {
  name: {
    required: true,
    minLength: 3
  },
  phone: {
    required: true,
    pattern: /^\+\d{11}$/
  },
  email: {
    required: true,
    pattern: /^\S+@\S+\.\S+$/
  }
}

interface Props {
  id?:number
}

const ContactForm: React.FC<Props> = ({id}) => {
  //contexts
  const {closeModal} = useContext(ModalContext);
  const {imagePreviewUrl,setImagePreviewUrl} = useContext(ImageContext);
  const {contacts,setContacts} = useContext(ContactContext);
  //states
  const [formData, setFormData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [updateForm, setUpdateForm] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    if (id){
      console.log("is id?",id)
      const data = contacts.filter(contact => contact.id === id)[0]
      setImagePreviewUrl(data.img)
      setUpdateForm(true)
      setFormData(data)
    }
  }, []);

  function updateItem(id:number, newProperties:FormData) {
    return contacts.map(item => {
        if(item.id === id) {
            // update the properties of the item
            return {...item, ...newProperties};
        } else {
            // return the original item
            return item;
        }
    });
}
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

 
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = validate(formData, validationRules);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      
      //will be removed later, id will be from database    
      const data = {
        ...formData,
        img:imagePreviewUrl
      }
      if (updateForm){
        setIsLoading(true)
          await updateContact(id,data) as ContactData;
          const updatedList = updateItem(id, data)
          setContacts(updatedList)
        setIsLoading(false)
      } else {
        setIsLoading(true)
          const newContact = await addContact(data) as ContactData;
          setContacts([...contacts, newContact]);
        setIsLoading(false)
      }

      closeModal()
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
        <ImageUpload className={isLoading ? "opacity-10" : ""}/>
        <div className="mb-6">
            <Input 
            name="name" 
            disabled={isLoading}
            value={formData.name} 
            error={errors.name} 
            onChange={handleChange} 
            placeholder='John Doe'/>

            <Input 
            name="phone" 
            disabled={isLoading}
            value={formData.phone} 
            error={errors.phone} 
            onChange={handleChange} 
            type="tel" 
            placeholder='+36105559999'/>
            
            <Input 
            name="email" 
            disabled={isLoading}
            value={formData.email} 
            error={errors.email} 
            onChange={handleChange} 
            type="email" 
            placeholder='john@doe.com'/>
        </div>
        <div className=" flex justify-end gap-2">
            <Button disabled={isLoading} onclick={closeModal} className="bg-grey-100">Cancel</Button>
            <Button disabled={isLoading} type="submit">Done</Button>
        </div>
     </form>
     {isLoading && <p className="h3 text-center mt-4">Loading...</p>}
    </>

    
  );
};

export default ContactForm;