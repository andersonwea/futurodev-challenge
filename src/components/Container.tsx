import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return <div className="max-w-[1200px] px-4 mx-auto py-3">{children}</div>
}
