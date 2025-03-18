import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { BadgeProps } from "../../interfaces/dataDefinitions";
import { BadgePropsCVA } from "../../interfaces/styleDefinitions";


const badgeVariants = cva(
  "flex justify-center items-center aspect-square text-center rounded-full text-xs font-medium",
  {
    variants: {
      variant: {
        default: "bg-red-500 text-gray-800",
        primary: "bg-blue-100 text-blue-800",
        secondary: "bg-gray-100 text-gray-800",
      },
      size: {
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8",
      },
      border: {
        true: "border-2 border-red-500",
        false: "",
      },
      borderColor: {
        default: "border-red-500",
        orange: "border-orange-500",
        blue: "border-blue-500",
      },
      borderSize: {
        sm: "border-2",
        md: "border-4",
        lg: "border-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      border: false,
    },
    compoundVariants: [
      {
        border: true,
        className: "border-2 border-red-500"
      }
    ]
  },
);

type Props = BadgePropsCVA & BadgeProps;

export default function Badge({ className, children, ...propsbadge }: Props) {
  return <span className={cn(badgeVariants({ ...propsbadge }), className)}>{children}</span>;
}
