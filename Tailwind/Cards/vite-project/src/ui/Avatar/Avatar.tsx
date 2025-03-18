import { cva } from "class-variance-authority";

const avatarVariants = cva(
    
);

interface AvatarProps {
    src: string;
    alt: string;
    className?: string;
}

export default function Avatar(props: AvatarProps) {
    return (
        <img className={props.className} src={props.src} alt={props.alt} />
    );
}