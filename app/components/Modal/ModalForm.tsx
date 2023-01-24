import Input from './Input';
import ImageUpload from './ImageUpload';

interface Props {}

const ModalForm: React.FC<Props> = () => {
  return (
    <>
        <ImageUpload/>
        <div className="mb-6">
            <Input name="name" placeholder='John Doe'/>
            <Input name="phone" type="tel" placeholder='+36105559999'/>
            <Input name="email" type="email" placeholder='john@doe.com'/>
        </div>
     </>
  );
};

export default ModalForm;