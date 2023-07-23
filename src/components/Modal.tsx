'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { ModalContent } from './ModalContent'

export function Modal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <X />
      </Dialog.Trigger>

      <ModalContent />
    </Dialog.Root>
  )
}
