'use client'

import { Button } from './Button'
import { NavLink } from './NavLink'
import { Menu } from 'lucide-react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export function NavBar() {
  return (
    <div className="flex gap-7 items-center">
      <nav className="space-x-7 max-md:hidden">
        <NavLink href="#about">SOBRE</NavLink>
        <NavLink href="#services">SERVIÇOS</NavLink>
        <NavLink href="#prices">PREÇOS</NavLink>
        <NavLink href="#equipments">EQUIPAMENTOS</NavLink>

        <Button>REGISTRE-SE</Button>
      </nav>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild className="md:hidden">
          <button
            className="w-9 rounded-md border-2 border-gray-500"
            aria-label="Menu de navegação"
          >
            <Menu size={32} />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className=" animate-fadeRight space-y-3 rounded-md bg-pink-100 p-3 shadow-md"
            sideOffset={8}
          >
            <DropdownMenu.Item>
              <NavLink href="#about">SOBRE</NavLink>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <NavLink href="#services">SERVIÇOS</NavLink>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <NavLink href="#prices">PREÇOS</NavLink>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <NavLink href="#equipments">EQUIPAMENTOS</NavLink>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Button>REGISTRE-SE</Button>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  )
}
