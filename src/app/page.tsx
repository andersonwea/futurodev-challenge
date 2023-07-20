import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Head } from '@/components/Head'
import { Header } from '@/components/Header'
import { SubHead } from '@/components/SubHead'
import { Text } from '@/components/Text'
import { ArrowRight } from 'lucide-react'
import bannerImg from '../assets/pngwing1.png'
import Image from 'next/image'

export default function Home() {
  return (
    <Container>
      <Header />

      <div className="grid grid-cols-2 gap-16 items-center">
        <div>
          <Head>
            AQUI NAO SE{' '}
            <SubHead subhead className="text-8xl block">
              TREINA FOFO
            </SubHead>
          </Head>
          <Text className="max-w-lg">
            Transforme-se na nossa academia! Oferecemos equipamentos modernos,
            instrutores qualificados e aulas para todos os níveis. Alcance seus
            objetivos fitness conosco. Experimente hoje!
          </Text>
          <Button className="mt-7 group hover:bg-red-500 transition-colors">
            COMEÇAR <ArrowRight className="group-hover:animate-bounceRight" />
          </Button>
        </div>

        <Image
          src={bannerImg}
          alt="Um homem praticando musculação"
          width={477}
          height={627}
        />
      </div>
    </Container>
  )
}
