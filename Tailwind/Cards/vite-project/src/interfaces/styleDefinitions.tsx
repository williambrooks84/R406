//Badge
export interface BadgePropsCVA {
    variant?: "default" | "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    border?: boolean;
    borderColor?: "default" | "orange" | "blue";
    borderSize?: "sm" | "md" | "lg";
    className?: string;
}

//Card
export interface CardStyleProps {
    badgeStyle?: BadgePropsCVA;
}