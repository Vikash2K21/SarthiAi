import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md 
   text-sm font-semibold transition-transform transition-shadow duration-300
   disabled:pointer-events-none disabled:opacity-50
   outline-none
   focus-visible:ring-4 focus-visible:ring-offset-2
   focus-visible:ring-primary/70
   aria-invalid:ring-destructive/40 aria-invalid:border-destructive`,
  {
    variants: {
      variant: {
        default: `
          bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 
          text-white shadow-lg 
          hover:scale-[1.05] hover:shadow-xl 
          active:scale-[0.97] active:shadow-md
          focus-visible:ring-purple-400
        `,
        destructive: `
          bg-gradient-to-r from-red-600 via-red-700 to-red-800
          text-white shadow-lg
          hover:scale-[1.05] hover:shadow-xl
          active:scale-[0.97] active:shadow-md
          focus-visible:ring-red-400
        `,
        outline: `
          border-2 border-indigo-600
          text-indigo-600 bg-transparent
          hover:bg-indigo-600 hover:text-white
          shadow-md
          active:scale-[0.97]
          focus-visible:ring-indigo-400
        `,
        secondary: `
          bg-gradient-to-r from-green-600 via-green-700 to-green-800
          text-white shadow-md
          hover:scale-[1.05] hover:shadow-lg
          active:scale-[0.97]
          focus-visible:ring-green-400
        `,
        ghost: `
          text-indigo-500 hover:bg-indigo-100/30 dark:hover:bg-indigo-900/40
          active:scale-[0.95]
          focus-visible:ring-indigo-400
          shadow-sm
        `,
        link: `
          text-indigo-600 underline-offset-4 hover:underline
          focus-visible:ring-indigo-400
          active:text-indigo-700
        `,
      },
      size: {
        default: "h-10 px-5 has-[>svg]:px-3",
        sm: "h-8 px-3 text-sm has-[>svg]:px-2",
        lg: "h-12 px-8 text-lg has-[>svg]:px-5",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
