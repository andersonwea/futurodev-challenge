'use client'

import { NavBar } from './NavBar'
import { Logo } from './Logo'
import { useEffect, useState } from 'react'
import { Container } from './Container'

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
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`w-full pt-4 max-lg:px-4 fixed  py-2 z-50${
        distance < -60 ? ' backdrop-blur-md bg-white/30' : ''
      } `}
    >
      <Container className="flex items-center justify-between max-lg:px-0">
        <Logo />
        <NavBar />
      </Container>
    </header>
  )
}
