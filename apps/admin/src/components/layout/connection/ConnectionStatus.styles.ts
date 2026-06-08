import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const connectionStatusVariants = cva('shrink-0 flex-center justify-self-start px-2 gap-1 text-[10px] select-none border rounded-full', {
  variants: {
    status: {
      connected: 'text-green-500 border-green-500',
      disconnected: 'text-zinc-400 border-zinc-300',
      connecting: 'text-yellow-500 border-yellow-500',
      error: 'text-red-500 border-red-500',
    },
  },
  defaultVariants: {
    status: 'disconnected',
  },
})
export type ConnectionStatusVariants = VariantProps<typeof connectionStatusVariants>
