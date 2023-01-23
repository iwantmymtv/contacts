import Image from 'next/image';
import icons from './icons';

type IconProps = {
    name: 'settings' | 'add' | 'back' | 'change' 
        | 'heart' | 'more' | 'mute' | 'unmute' 
        | 'search' | 'sun' | 'trash';
    size?: number;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
    return (
        <div className="icon">
            <Image
            className={className}
            src={icons[name]}
            width={size}
            height={size}
            alt={`${name} icon`}
            />
        </div>
    )
}

export default Icon;