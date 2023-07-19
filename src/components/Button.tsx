import { ButtonHTMLAttributes, ReactElement } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  icon?: ReactElement
}

export function Button({ children, icon, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="font-title-secondary text-2xl bg-secondary w-[9.5rem] h-11 rounded-tr-[2rem]"
    >
      {children}
      {!!icon && icon}
    </button>
  )
}
