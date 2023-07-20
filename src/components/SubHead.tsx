import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface SubHeadProps extends HTMLAttributes<HTMLHeadingElement> {
  children: string
  subhead?: boolean
}

export function SubHead({ children, subhead = false, ...rest }: SubHeadProps) {
  if (!subhead) {
    return (
      <h1 className={twMerge('text-7xl font-title-secondary', rest.className)}>
        {children}
      </h1>
    )
  }

  return (
    <span className={twMerge('text-7xl font-title-secondary', rest.className)}>
      {children}
    </span>
  )
}
