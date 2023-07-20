import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Head } from '@/components/Head'
import { Header } from '@/components/Header'
import { SubHead } from '@/components/SubHead'
import { Text } from '@/components/Text'
import { ArrowRight } from 'lucide-react'
import bannerImg from '../assets/pngwing1.png'
import Image from 'next/image'
import { TextLoop } from '@/components/TextLoop'

export default function Home() {
  return (
    <>
      <Container>
        <Header />

        <div className="grid grid-cols-2 gap-16 items-center max-lg:gap-2 max-md:grid-cols-1 max-md:mt-10">
          <div>
            <Head className="max-lg:text-[3.5rem]">
              AQUI NAO SE{' '}
              <SubHead subhead className="text-8xl block max-lg:text-7xl">
                TREINA FOFO
              </SubHead>
            </Head>
            <Text className="max-w-lg">
              Transforme-se na nossa academia! Oferecemos equipamentos modernos,
              instrutores qualificados e aulas para todos os níveis. Alcance
              seus objetivos fitness conosco. Experimente hoje!
            </Text>
            <Button className="mt-7 group hover:bg-red-500 transition-colors">
              COMEÇAR <ArrowRight className="group-hover:animate-bounceRight" />
            </Button>
          </div>

          <Image
            className="max-md:hidden"
            src={bannerImg}
            alt="Um homem praticando musculação"
            width={477}
            height={627}
          />
        </div>
      </Container>

      <TextLoop />
    </>
  )
}
