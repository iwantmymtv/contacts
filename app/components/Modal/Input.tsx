import { HTMLInputTypeAttribute } from "react";

type InputProps = {
    name: string
    type?: HTMLInputTypeAttribute
    placeholder?: string
}
const Input:React.FC<InputProps> = ({name,type="text",placeholder}) => {
    return (
        <div className="flex flex-col mb-6">
          <label htmlFor ={name} className="label">{name}</label>
          <input name={name} placeholder={placeholder} type={type} className="input w-full" />
        </div>
    )
}

export default Input;