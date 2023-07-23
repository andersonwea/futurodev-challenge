import { Container } from './Container'
import { Logo } from './Logo'
import { Text } from '@/components/Text'
import { SubHead } from './SubHead'
import { NavLink } from './NavLink'

import instagram1 from '../assets/instagram/instagram1.jpg'
import instagram2 from '../assets/instagram/instagram2.jpg'
import instagram3 from '../assets/instagram/instagram3.jpg'
import instagram4 from '../assets/instagram/instagram4.jpg'
import instagram5 from '../assets/instagram/instagram5.jpg'
import instagram6 from '../assets/instagram/instagram6.jpg'
import Image from 'next/image'

export function Footer() {
  const instagramPosts = [
    instagram1,
    instagram2,
    instagram3,
    instagram4,
    instagram5,
    instagram6,
  ]

  return (
    <footer className="pt-12 pb-4 max-sm:pt-6">
      <Container className="grid grid-cols-[3fr_1fr_3fr] gap-5 max-sm:grid-cols-1 max-sm:space-y-4">
        <div>
          <Logo />
          <div className="mt-9 max-sm:mt-4">
            <Text>143 your academy address goes here, New York</Text>
            <Text>Call: +00 123 456 789</Text>
            <Text>Email: info@robust-habit.com</Text>
            <Text>Web: www.robust-habit.com</Text>
          </div>
        </div>

        <div>
          <SubHead subhead className="text-3xl">
            links
          </SubHead>
          <nav className="mt-9 flex flex-col gap-4 pt-4 max-sm:flex-row max-sm:mt-0 max-sm:items-center">
            <NavLink href="#about">sobre</NavLink>
            <NavLink href="#services">serviços</NavLink>
            <NavLink href="#prices">preços</NavLink>
            <NavLink href="#contact">contato</NavLink>
          </nav>
        </div>

        <div>
          <SubHead subhead className="text-3xl">
            veja no instagram
          </SubHead>
          <div className="mt-9 flex flex-wrap gap-2 pt-4 max-w-[400px] max-sm:mt-0">
            {instagramPosts.map((instagramPost, i) => {
              return (
                <a
                  href="https://instagram.com"
                  target="_blank"
                  key={'postagem' + i}
                  rel="noreferrer"
                >
                  <Image
                    className="w-auto max-sm:w-[100px] object-cover"
                    src={instagramPost}
                    alt="postagem do instagram"
                    width={105}
                    height={105}
                  />
                </a>
              )
            })}
          </div>
        </div>
      </Container>
    </footer>
  )
}
