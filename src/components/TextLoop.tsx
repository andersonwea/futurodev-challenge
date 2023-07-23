import { SubHead } from './SubHead'
import barbellIcon from '../assets/barbellIcon.svg'
import Image from 'next/image'

export function TextLoop() {
  return (
    <div className="bg-secondary overflow-hidden max-md:mt-3">
      <div className="grid grid-flow-col items-center space-x-10 animate-textInfiteAnimation">
        <SubHead className="text-3xl w-max">CONSUTORIA INDIVIDUAL</SubHead>
        <Image src={barbellIcon} alt="" className="w-max" />
        <SubHead className="text-3xl w-max">+20 PROFESSORES</SubHead>
        <Image src={barbellIcon} alt="" className="w-max" />
        <SubHead className="text-3xl w-max">TREINE NA SUA FORMA</SubHead>
        <Image src={barbellIcon} alt="" className="w-max" />
        <SubHead className="text-3xl w-max">+15 UNIDADES</SubHead>
        <Image src={barbellIcon} alt="" className="w-max" />
        <SubHead className="text-3xl w-max">MONTE SEU TREINO</SubHead>
        <Image src={barbellIcon} alt="" className="w-max" />

        <SubHead className="text-3xl w-max">CONSUTORIA INDIVIDUAL</SubHead>
        <Image src={barbellIcon} alt="" className="w-max" />
        <SubHead className="text-3xl w-max">+20 PROFESSORES</SubHead>
        <Image src={barbellIcon} alt="" className="w-max" />
        <SubHead className="text-3xl w-max">TREINE NA SUA FORMA</SubHead>
        <Image src={barbellIcon} alt="" className="w-max" />
        <SubHead className="text-3xl w-max">+15 UNIDADES</SubHead>
        <Image src={barbellIcon} alt="" className="w-max" />
        <SubHead className="text-3xl w-max">MONTE SEU TREINO</SubHead>
        <Image src={barbellIcon} alt="" className="w-max" />
      </div>
    </div>
  )
}
