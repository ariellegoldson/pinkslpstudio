import { forwardRef, HTMLAttributes } from 'react'
import { clsx } from 'clsx'
import { cva, VariantProps } from 'class-variance-authority'

const cardVariants = cva(
  'card',
  {
    variants: {
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
      hover: {
        true: 'hover:shadow-lg hover:ring-pink-200 transition-all duration-200',
        false: '',
      },
    },
    defaultVariants: {
      padding: 'md',
      hover: false,
    },
  }
)

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, padding, hover, ...props }, ref) => {
    return (
      <div
        className={clsx(cardVariants({ padding, hover }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'

// Card Header Component
export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx('mb-4 pb-4 border-b border-sage-100', className)}
      {...props}
    />
  )
)

CardHeader.displayName = 'CardHeader'

// Card Title Component
export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={clsx('text-lg font-display font-semibold text-ink-800', className)}
      {...props}
    />
  )
)

CardTitle.displayName = 'CardTitle'

// Card Content Component
export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx('text-ink-700', className)}
      {...props}
    />
  )
)

CardContent.displayName = 'CardContent'

export default Card