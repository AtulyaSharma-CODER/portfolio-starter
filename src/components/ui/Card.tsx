import { cn } from '@/lib/utils'
import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'elevated'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export default function Card({
  children,
  className,
  variant = 'default',
  padding = 'md',
  ...props
}: CardProps) {
  const variants = {
    default: 'bg-white dark:bg-dark-800',
    bordered: 'bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700',
    elevated: 'bg-white dark:bg-dark-800 shadow-lg shadow-dark-900/10 dark:shadow-dark-950/30',
  }

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return (
    <div
      className={cn(
        'rounded-xl',
        variants[variant],
        paddings[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}