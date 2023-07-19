import { AnchorHTMLAttributes } from 'react'

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string
}

export function NavLink({ children, ...props }: NavLinkProps) {
  return (
    <a className="font-title-secondary text-2xl font-normal" {...props}>
      {children}
    </a>
  )
}
