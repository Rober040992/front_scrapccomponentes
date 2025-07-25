export async function getProductBySlug(slug: string) {
  const res = await fetch(`/api/products/one?slug=${encodeURIComponent(slug)}`)

  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.message || 'Error al buscar producto')
  }

  return res.json()
}
