import Image from 'next/image'
import { SubHead } from './SubHead'
import { Text } from './Text'
import { Button } from './Button'
import { ArrowRight } from 'lucide-react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { twMerge } from 'tailwind-merge'
import { HTMLAttributes } from 'react'

interface differentialCardProps extends HTMLAttributes<HTMLDivElement> {
  icon: StaticImport
  title: string
  text: string
  buttonText: string
}

export function DifferentialCard({
  icon,
  title,
  text,
  buttonText,
  ...rest
}: differentialCardProps) {
  return (
    <div
      className={twMerge(
        'flex flex-col justify-between p-6 group hover:bg-secondary transition-colors max-sm:p-3',
        rest.className,
      )}
    >
      <div>
        <Image
          src={icon}
          alt=""
          width={60}
          height={60}
          className="w-[60px] max-sm:w-[40px]"
        />
        <SubHead subhead className="text-2xl mt-2">
          {title}
        </SubHead>
        <Text>{text}</Text>
      </div>
      <Button className="text-sm leading-4 text-left pl-3 mt-3 group-hover:bg-red-500">
        {buttonText}{' '}
        <ArrowRight className="w-8 mr-4 group-hover:animate-bounceRight" />
      </Button>
    </div>
  )
}
