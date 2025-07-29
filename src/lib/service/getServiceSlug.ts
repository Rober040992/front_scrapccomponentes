const baseUrl = process.env.NEXT_PUBLIC_LOCAL_BASE_URL

export async function getProductBySlug(slug: string) {
  const res = await fetch(`${baseUrl}/api/products/one?slug=${encodeURIComponent(slug)}`)

  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.message || 'Error al buscar producto')
  }

  return res.json()
}
