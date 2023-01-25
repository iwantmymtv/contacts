import { useContext, useState } from 'react';
import { ModalContext } from '../Modal/ModalProvider';
import { ImageContext } from './ImageProvider';
import { ContactContext } from '../ContactList/ContactProvider';

import Input from './Input';
import ImageUpload from './ImageUpload';
import Button from '../Button/Button';

import { validate } from './validation';
import { ValidationErrors } from './validation';

type FormState = {
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
}

const ContactForm: React.FC<Props> = () => {
  //contexts
  const {closeModal} = useContext(ModalContext);
  const {imagePreviewUrl} = useContext(ImageContext);
  const {contacts,setContacts} = useContext(ContactContext);
  //states
  const [formData, setFormData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = validate(formData, validationRules);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      
      //will be removed later, id will be from database
      const last = contacts[contacts.length - 1]
      const data = {
        id: last.id +1,
        ...formData,
        img:imagePreviewUrl
      }
      console.log(data)
      setContacts([...contacts, data]);
      closeModal()
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <ImageUpload/>

        <div className="mb-6">
            <Input 
            name="name" 
            value={formData.name} 
            error={errors.name} 
            onChange={handleChange} 
            placeholder='John Doe'/>

            <Input 
            name="phone" 
            value={formData.phone} 
            error={errors.phone} 
            onChange={handleChange} 
            type="tel" 
            placeholder='+36105559999'/>
            
            <Input 
            name="email" 
            value={formData.email} 
            error={errors.email} 
            onChange={handleChange} 
            type="email" 
            placeholder='john@doe.com'/>
        </div>
        <div className=" flex justify-end gap-2">
            <Button onclick={closeModal} className="bg-grey-100">Cancel</Button>
            <Button type="submit">Done</Button>
        </div>
     </form>
  );
};

export default ContactForm;