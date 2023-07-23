'use client'

import { NavBar } from './NavBar'
import { Logo } from './Logo'
import { useEffect, useState } from 'react'

export function Header() {
  const [distance, setDistance] = useState(0)

  function handleScroll() {
    const topElement = document.querySelector('#top')

    if (topElement) {
      const { top } = topElement.getBoundingClientRect()
      setDistance(top)
    }
  }

  useEffect(() => {
    if (window.innerWidth < 768) {
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <header
      className={`flex items-center justify-between w-full pt-4 max-md:px-4 max-md:fixed max-md:-ml-4 max-md:h-[65px] max-md:pt-0 max-md:z-50${
        distance < -60 ? ' max-md:backdrop-blur-md max-md:bg-white/30' : ''
      } `}
    >
      <Logo />
      <NavBar />
    </header>
  )
}
