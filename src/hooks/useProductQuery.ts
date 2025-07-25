import { useQuery } from '@tanstack/react-query'
import { getProductBySlug } from '@/lib/service/getServiceSlug'

export function useProductQuery(slug: string) {
  return useQuery({
    queryKey: ['product', slug],
    queryFn: () => getProductBySlug(slug),
    enabled: !!slug,
  })
}
