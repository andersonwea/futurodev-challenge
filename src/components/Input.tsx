import { InputHTMLAttributes, forwardRef } from 'react'

type TextInputProps = InputHTMLAttributes<HTMLInputElement>

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ ...props }: TextInputProps, ref) => {
    return (
      <div className="border-2 border-white w-full rounded-tr-[2rem] focus-within:border-red-500 px-3 py-2">
        <input
          {...props}
          ref={ref}
          className="font-default w-full bg-transparent placeholder:text-white border-none p-0 focus:ring-0 text-white uppercase"
        />
      </div>
    )
  },
)

TextInput.displayName = 'TextInput'
