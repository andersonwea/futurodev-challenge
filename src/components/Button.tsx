import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode
  icon?: ReactElement
}

export function Button({ children, icon, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        'font-title-secondary text-2xl bg-secondary w-[9.5rem] h-11 rounded-tr-[2rem] flex gap-3 items-center justify-center',
        rest.className,
      )}
    >
      {children}
      {!!icon && icon}
    </button>
  )
}
