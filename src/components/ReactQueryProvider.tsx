'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'

/**
 * Este componente se encarga de envolver la app con el QueryClientProvider
 * para habilitar React Query en un entorno compatible con Server Components.
 * Se usa en el layout para evitar marcar el layout como 'use client'.
 */

export default function ReactQueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())// Creamos un único cliente de React Query solo una vez

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
