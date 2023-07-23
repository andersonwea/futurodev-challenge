import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  section?: boolean
}

export function Container({
  children,
  section = false,
  ...rest
}: ContainerProps) {
  if (section) {
    return (
      <section
        className={twMerge('max-w-[1200px] px-4 mx-auto', rest.className)}
      >
        {children}
      </section>
    )
  }

  return (
    <div className={twMerge('max-w-[1200px] px-4 mx-auto', rest.className)}>
      {children}
    </div>
  )
}
