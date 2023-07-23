import {
  ButtonHTMLAttributes,
  ReactElement,
  ReactNode,
  forwardRef,
} from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode
  icon?: ReactElement
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, icon, ...rest }: ButtonProps, ref) => {
    return (
      <button
        ref={ref}
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
  },
)

Button.displayName = 'Button'
