import { HTMLInputTypeAttribute } from "react";

type InputProps = {
    name: string
    value?:string
    error?:string
    type?: HTMLInputTypeAttribute
    placeholder?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const Input:React.FC<InputProps> = ({name,type="text",error,placeholder,value,onChange}) => {
    return (
        <div className="flex flex-col mb-6">
          <label htmlFor ={name} className="label">{name}</label>
          <input 
            onChange={onChange} 
            value={value} 
            name={name} 
            placeholder={placeholder} 
            type={type} 
            className="input w-full" />
            {error && <p className="text-red-400">{error}</p>}
        </div>
    )
}

export default Input;