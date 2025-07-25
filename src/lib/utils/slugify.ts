export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFD') // Quita acentos
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, '-') // Reemplaza espacios y símbolos por guiones
    .replace(/^-+|-+$/g, '') // Elimina guiones al inicio y final
}
