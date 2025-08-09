import { ButtonHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'
import { cva, VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-pink-500 text-white hover:bg-pink-600 focus:ring-pink-300 shadow-soft',
        secondary: 'bg-white text-pink-600 border border-pink-200 hover:bg-pink-50 focus:ring-pink-300 shadow-soft',
        ghost: 'text-ink-700 hover:bg-sage-100 focus:ring-sage-200',
        danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-300 shadow-soft',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm rounded-lg',
        md: 'px-6 py-3 text-base rounded-2xl',
        lg: 'px-8 py-4 text-lg rounded-2xl',
        xl: 'px-10 py-5 text-xl rounded-2xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={clsx(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export default Button