import Image from 'next/image'
import logo from '../assets/logo.svg'
import Link from 'next/link'
import { NavBar } from './NavBar'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href={'/'}>
        <Image src={logo} alt="logo do Robust Habit" />
      </Link>

      <NavBar />
    </header>
  )
}
