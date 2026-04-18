import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-[16px] font-bold uppercase tracking-[0.05em] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#1B4332] text-white hover:bg-[#1B4332]/90 shadow-[0_4px_14px_rgba(27,67,50,0.3)]",
        destructive:
          "bg-red-500 text-slate-50 hover:bg-red-500/90",
        outline:
          "border-2 border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332]/5",
        secondary:
          "bg-white text-[#1B4332] border-2 border-[#1B4332] hover:bg-gray-50",
        accent:
          "bg-[#2D6A4F] text-white hover:bg-[#2D6A4F]/90 shadow-[0_4px_14px_rgba(45,106,79,0.3)]",
        ghost: "hover:bg-slate-100 hover:text-slate-900",
        link: "text-[#1B4332] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-14 px-8 py-4",
        sm: "h-10 rounded-md px-4",
        lg: "h-16 rounded-xl px-10 text-lg",
        icon: "h-14 w-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
