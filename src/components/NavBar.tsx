'use client'

import * as Dialog from '@radix-ui/react-dialog'

import { Button } from './Button'
import { NavLink } from './NavLink'
import { Menu } from 'lucide-react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ModalContent } from './ModalContent'

export function NavBar() {
  return (
    <div className="flex gap-7 items-center">
      <nav className="flex items-center gap-6">
        <div className="max-md:hidden space-x-7 flex items-center">
          <NavLink href="#about">sobre</NavLink>
          <NavLink href="#services">serviços</NavLink>
          <NavLink href="#prices">preços</NavLink>
          <NavLink href="#contact">contato</NavLink>
        </div>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button className="hover:bg-red-500 transition-colors">
              REGISTRE-SE
            </Button>
          </Dialog.Trigger>

          <ModalContent />
        </Dialog.Root>
      </nav>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild className="md:hidden">
          <button
            className="w-12 rounded-md border-2 border-gray-400"
            aria-label="Menu de navegação"
          >
            <Menu size={32} />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className=" animate-fadeRight space-y-6 rounded-md p-6 w-40 shadow-md bg-secondary"
            sideOffset={8}
          >
            <DropdownMenu.Arrow />
            <DropdownMenu.Item onSelect={(e) => e.preventDefault()}>
              <NavLink href="#about">SOBRE</NavLink>
            </DropdownMenu.Item>
            <DropdownMenu.Item onSelect={(e) => e.preventDefault()}>
              <NavLink href="#services">SERVIÇOS</NavLink>
            </DropdownMenu.Item>
            <DropdownMenu.Item onSelect={(e) => e.preventDefault()}>
              <NavLink href="#prices">PREÇOS</NavLink>
            </DropdownMenu.Item>
            <DropdownMenu.Item onSelect={(e) => e.preventDefault()}>
              <NavLink href="#contact">contato</NavLink>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  )
}
