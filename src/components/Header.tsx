import Image from 'next/image'
import { Container } from './Container'
import logo from '../assets/logo.svg'
import { NavLink } from './NavLink'
import { Button } from './Button'
import Link from 'next/link'

export function Header() {
  return (
    <Container>
      <header className="flex items-center justify-between">
        <Link href={'/'}>
          <Image src={logo} alt="logo do Robust Habit" />
        </Link>

        <div className="flex gap-7 items-center">
          <ul className="space-x-7">
            <NavLink href="#about">SOBRE</NavLink>
            <NavLink href="#services">SERVIÇOS</NavLink>
            <NavLink href="#prices">PREÇOS</NavLink>
            <NavLink href="#equipments">EQUIPAMENTOS</NavLink>
          </ul>

          <Button>REGISTRE-SE</Button>
        </div>
      </header>
    </Container>
  )
}
