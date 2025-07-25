'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { slugify } from '@/lib/utils/slugify'

export default function SearchForm() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const slug = slugify(query)
    if (!slug) return
    router.push(`/productos/${slug}`)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Buscar producto..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="px-4 py-2 rounded bg-white text-black w-full"
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded"
      >
        Buscar
      </button>
    </form>
  )
}
