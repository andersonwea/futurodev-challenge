import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface HeadProps extends HTMLAttributes<HTMLHeadingElement> {
  children: string | ReactNode
}

export function Head({ children, ...rest }: HeadProps) {
  return (
    <h1 className={twMerge('text-7xl font-title-primary', rest.className)}>
      {children}
    </h1>
  )
}
