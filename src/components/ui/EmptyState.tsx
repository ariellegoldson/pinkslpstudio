import { ReactNode } from 'react'
import Button from './Button'

interface EmptyStateProps {
  icon?: ReactNode
  title: string
  description: string
  action?: {
    label: string
    onClick: () => void
  }
  className?: string
}

export default function EmptyState({ 
  icon, 
  title, 
  description, 
  action, 
  className = '' 
}: EmptyStateProps) {
  return (
    <div className={`text-center py-12 ${className}`}>
      {icon && (
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-sage-100 mb-6">
          {icon}
        </div>
      )}
      
      <h3 className="text-lg font-display font-medium text-ink-800 mb-2">
        {title}
      </h3>
      
      <p className="text-sage-600 max-w-sm mx-auto mb-6">
        {description}
      </p>
      
      {action && (
        <Button onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  )
}