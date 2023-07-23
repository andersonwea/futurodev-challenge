import { AnchorHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string
}

export function NavLink({ children, ...rest }: NavLinkProps) {
  return (
    <a
      className={twMerge(
        'font-title-secondary text-white text-2xl font-normal hover:text-zinc-200',
        rest.className,
      )}
      {...rest}
    >
      {children}
    </a>
  )
}
