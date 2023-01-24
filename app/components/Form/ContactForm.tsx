import { useContext, useState } from 'react';
import { ModalContext } from '../Modal/ModalProvider';
import { ImageContext } from './ImageProvider';

import Input from './Input';
import ImageUpload from './ImageUpload';
import Button from '../Button/Button';

import { validate } from './validation';
import { ValidationErrors } from './validation';

type FormState = {
  name: string
  phone: string
  email: string
  img?:File
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

interface Props {}

const ModalForm: React.FC<Props> = () => {
  const {closeModal} = useContext(ModalContext);
  const {imageFile} = useContext(ImageContext);

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
    console.log("imageFile: ", imageFile)
    if (Object.keys(errors).length === 0) {
      console.log(imageFile)
      console.log(formData)
      alert(`${formData.name}, formData.phone, formData.email`)
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

export default ModalForm;