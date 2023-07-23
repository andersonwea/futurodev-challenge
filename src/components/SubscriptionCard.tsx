import Image from 'next/image'
import { Text } from './Text'
import { SubHead } from './SubHead'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface SubscriptionCardProps {
  popular?: boolean
  image: StaticImport
  title: string
  text: string
  price?: string
}

export function SubscriptionCard({
  popular,
  image,
  title,
  text,
  price,
}: SubscriptionCardProps) {
  return (
    <div className="max-w-[399px] mx-auto">
      {popular && (
        <Text className="p-1 bg-red-500 font-bold text-center uppercase leading-5">
          recomendado por usuários
        </Text>
      )}
      <Image src={image} alt="" width={399} height={168} />
      <SubHead
        subhead
        className={`text-4xl p-3 max-lg:text-3xl ${
          popular ? 'bg-red-500' : 'bg-black'
        }`}
      >
        {title}
      </SubHead>
      <div className="bg-zinc-400 flex justify-between p-3 items-center max-lg:flex-col max-lg:gap-2 max-sm:flex-row">
        <div>
          <Text className="text-zinc-500 text-2xl max-lg:text-center">
            {text}
          </Text>
          {price && (
            <span className="block text-white font-default font-bold text-2xl">
              {price}
            </span>
          )}
        </div>
        <button className="border border-zinc-500 font-default rounded-3xl w-28 h-10 text-zinc-500 text-lg hover:text-red-500 hover:border-red-500 font-bold transition-colors">
          selecionar
        </button>
      </div>
    </div>
  )
}
