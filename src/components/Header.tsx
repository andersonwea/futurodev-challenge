import Image from 'next/image'
import { Container } from './Container'
import logo from '../assets/logo.svg'
import Link from 'next/link'
import { NavBar } from './NavBar'

export function Header() {
  return (
    <Container>
      <header className="flex items-center justify-between">
        <Link href={'/'}>
          <Image src={logo} alt="logo do Robust Habit" />
        </Link>

        <NavBar />
      </header>
    </Container>
  )
}