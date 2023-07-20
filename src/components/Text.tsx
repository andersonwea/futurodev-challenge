import { twMerge } from 'tailwind-merge'
import { HTMLAttributes } from 'react'

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: string
}

export function Text({ children, ...rest }: TextProps) {
  return (
    <p
      className={twMerge(
        'font-default text-lg leading-relaxed',
        rest.className,
      )}
    >
      {children}
    </p>
  )
}
