import Link from 'next/link'

import logo from '../assets/logo.svg'
import Image from 'next/image'

export function Logo() {
  return (
    <Link href={'/'}>
      <Image src={logo} alt="logo do Robust Habit" className="max-sm:w-24" />
    </Link>
  )
}
