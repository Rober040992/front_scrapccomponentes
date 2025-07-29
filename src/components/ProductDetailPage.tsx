'use client'

import { useParams } from 'next/navigation'
import { useProductQuery } from '@/hooks/useProductQuery'

export default function ProductDetailPage() {
  const params = useParams()
  const slug = typeof params.slug === 'string' ? params.slug : ''
  const { data, isLoading, error } = useProductQuery(slug)

  if (isLoading) return <p className="text-white">Cargando...</p>
  if (error) return <p className="text-red-500">Error: {error.message}</p>
  if (!data) return <p className="text-white">No hay datos</p>

  return (
    <div className="text-white space-y-4">
      <h2 className="text-2xl font-bold">{data.title}</h2>
      <img src={data.image} alt={data.title} className="max-w-xs rounded" />
      <p className="text-lg font-mono">{data.price || 'Precio no disponible'}</p>
    </div>
  )
}