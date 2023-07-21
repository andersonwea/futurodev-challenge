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
import { DifferentialCard } from '@/components/DifferentialCard'
import { SubscriptionCard } from '@/components/SubscriptionCard'

import subscriptionImage1 from '../assets/subscriptionImage1.png'
import subscriptionImage2 from '../assets/subscriptionImage2.png'
import subscriptionImage3 from '../assets/subscriptionImage3.png'
import sport1 from '../assets/sport1.svg'
import dumbbell from '../assets/dumbbell.svg'
import trainer1 from '../assets/trainer1.svg'
import gym1 from '../assets/gym1.svg'
import pngwing2 from '../assets/pngwing2.png'
import { title } from 'process'
import { text } from 'stream/consumers'

export default function Home() {
  return (
    <>
      <Container section>
        <Header />

        <div className="grid grid-cols-2 gap-16 items-center max-lg:gap-2 max-md:grid-cols-1 max-md:mt-10">
          <div>
            <Head className="max-lg:text-[3.5rem]">
              AQUI NAO SE{' '}
              <SubHead className="text-8xl block max-lg:text-7xl">
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

      <Container section>
        <Head className="flex items-center justify-center gap-2 mt-28 text-6xl max-lg:mt-16 max-sm:block max-sm:text-center">
          NOSSOS <SubHead className="text-7xl">DIFERENCIAIS</SubHead>
        </Head>

        <div className="grid grid-cols-4 gap-2 mt-7 mb-7 max-lg:grid-cols-2 max-sm:gap-0">
          <DifferentialCard
            icon={sport1}
            title="equipe qualificada"
            text="Profissionais altamente capacitados e motivados a ajudá-lo a alcançar seus objetivos."
            buttonText="conheça nossos profissionais"
          />
          <DifferentialCard
            icon={dumbbell}
            title="Ambiente motivador"
            text="Um ambiente seguro e inspirador para ajudá-lo a manter-se motivado durante seus treinos."
            buttonText="Faça um tour
            virtual"
          />
          <DifferentialCard
            icon={trainer1}
            title="Aulas Diversas"
            text="Oferecemos uma ampla variedade de aulas, desde musculação até dança, para atender a todos os interesses."
            buttonText="Ver modalidades"
          />
          <DifferentialCard
            icon={gym1}
            title="Equipamentos Modernos"
            text="Mantemos nossos equipamentos atualizados para garantir a segurança e eficiência de nossos clientes."
            buttonText="faça um tour
            virtual"
          />
        </div>
      </Container>

      <section className="bg-secondary pb-12">
        <Container>
          <SubHead subhead className="text-center mt-14">
            nossos planos
          </SubHead>

          <div className="grid grid-cols-3 gap-10 items-end mt-12 max-md:grid-cols-1 max-sm:max-w-xs max-md:mx-auto">
            <SubscriptionCard
              image={subscriptionImage1}
              title="passe de 1 dia"
              text="Teste 
              gratuitamente"
            />
            <SubscriptionCard
              popular={true}
              image={subscriptionImage2}
              title="passe de 1 MÊS"
              text="À partir de"
              price="R$ 99,90"
            />
            <SubscriptionCard
              image={subscriptionImage3}
              title="passe de 1 ANO"
              text="À partir de"
              price="R$ 999,00"
            />
          </div>
        </Container>
      </section>

      <Container
        section
        className="grid grid-cols-[432px_1fr] pt-16 gap-8 max-lg:grid-cols-1 max-lg:pt-6"
      >
        <div>
          <Image
            className="max-lg:hidden"
            src={pngwing2}
            alt="duas pessoas segutando alteres"
            width={432}
            height={576}
            quality={80}
          />
        </div>

        <div className="self-center">
          <Head className="text-6xl max-lg:text-center">
            faça parte <SubHead>da família</SubHead>
          </Head>
          <Text className="mt-2 max-lg:text-center">
            Nossa academia tem milhares de clientes satisfeitos com resultados
            surpreendentes. Junte-se a nós e comece a transformar seu corpo
            agora!
          </Text>
          <div className="flex space-x-8 mt-16">
            <div>
              <SubHead>+15</SubHead>
              <Text>Unidades na cidade de São Paulo.</Text>
            </div>
            <div>
              <SubHead>+2000</SubHead>
              <Text>Alunos matriculados em nossas unidades.</Text>
            </div>
            <div>
              <SubHead>+100</SubHead>
              <Text>Professores altamente qualificados.</Text>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
