'use client'

import * as Dialog from '@radix-ui/react-dialog'

import { Button } from './Button'
import { TextInput } from './Input'
import googleIcon from '../assets/googleIcon.png'
import Image from 'next/image'
import { SubHead } from './SubHead'
import { X } from 'lucide-react'

export function ModalContent() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 w-screen h-screen bg-[rgba(0,0,0,0.75)]" />

      <Dialog.Content className="fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 min-w-[544px] bg-secondary p-12 rounded-md shadow-sm z-50 space-y-8 max-sm:min-w-[350px]">
        <Dialog.Title asChild>
          <SubHead className="text-5xl">faça seu cadastro</SubHead>
        </Dialog.Title>

        <div className="space-y-3">
          <TextInput className="w-full" type="email" placeholder="Email" />
          <TextInput type="text" placeholder="Nome" />
          <TextInput type="password" placeholder="Senha" />
        </div>

        <div className=" space-y-3">
          <Button className="bg-red-500">Cadastrar</Button>

          <div className="border w-full border-zinc-500" />
          <Button className="w-64 bg-blue-500 justify-start">
            <div className="bg-white p-1">
              <Image
                className="w-[36px] max-sm:w-[20px] max-md:w-[28px]"
                src={googleIcon}
                alt=""
              />
            </div>
            cadastrar com google
          </Button>
        </div>

        <Dialog.Close className="absolute right-6 top-0 leadining-[0]">
          <X />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
