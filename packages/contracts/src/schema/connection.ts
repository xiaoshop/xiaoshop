import * as z from 'zod'

export const ConnectionStatus = z.literal(['connected', 'disconnected', 'connecting', 'error'])
export type ConnectionStatus = z.infer<typeof ConnectionStatus>
