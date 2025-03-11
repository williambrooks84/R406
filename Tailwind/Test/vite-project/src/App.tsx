import { cva } from "class-variance-authority";
import { cn } from "./utils/cn";

const buttonVariants = cva("rounded-md font-medium focus:outline-none", {
  variants: {
    variant: {
      default:
        "bg-cyan-500 text-white shadow-lg hover:bg-cyan-400 focus:bg-cyan-400 focus:ring-cyan-500",
      destructive:
        "bg-red-500 text-white shadow-lg hover:bg-red-400 focus:bg-red-400 focus:ring-red-500",
      ghost:
        "bg-transparent text-cyan-500 shadow-none hover:bg-cyan-100 focus:bg-cyan-100 focus:ring-cyan-500",  
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
    },
    rounded: {
      none: "rounded-none",
      default: "rounded-md",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    rounded: "default",
  },
});

// Interface simplifiée avec uniquement les props nécessaires

interface ButtonProps {
  variant?: "default" | "destructive" | "ghost";
  size?: "default" | "sm" | "lg";
  rounded?: "none" | "default" | "full";
  children?: React.ReactNode;
  className?: string;
}

function Button({
  variant,
  size,
  rounded,

  className,
  children,

  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, rounded, className }))}
      {...props}
    >
      {children}
    </button>
  );
}

export default function App() {
  return (
    <div>
      <Button variant="destructive" size="lg" rounded="full">
        Click me
      </Button>
      <Button variant="default" size="lg" rounded="none">
        Click me
      </Button>
      <Button variant="ghost" size="lg" rounded="default">
        Click me
      </Button>
    </div>
  );
}