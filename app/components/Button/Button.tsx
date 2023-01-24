type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    round?: boolean;
    iconOnly?: boolean;
    onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  }
  
const Button: React.FC<ButtonProps> = ({ 
    round=false, 
    iconOnly=false, 
    className, 
    onclick,
    children,
    disabled = false,
    type = "button"
    }) => {

    const classNameList = 
    `px-2 btn ${className} ${round ? 'btn-round' : ''}
    ${iconOnly ? 'px-2' : 'px-4'}
    `;

    return (
      <button 
        className={classNameList} 
        type={type} 
        onClick={onclick} 
        disabled={disabled}>
        {children}
      </button>
    );
  }
  
  export default Button;