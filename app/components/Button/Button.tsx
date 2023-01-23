type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    round?: boolean;
    iconOnly?: boolean;
    onclick?: () => void;
  }
  
const Button: React.FC<ButtonProps> = ({ 
    round=false, 
    iconOnly=false, 
    className, 
    onclick,
    children
    }) => {

    const classNameList = 
    `px-2 btn ${className} ${round ? 'btn-round' : ''}
    ${iconOnly ? 'px-2' : 'px-4'}
    `;

    return (
      <button className={classNameList} onClick={onclick}>
        {children}
      </button>
    );
  }
  
  export default Button;