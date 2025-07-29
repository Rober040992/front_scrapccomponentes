export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9/]+/g, '-')       // conserva las barras para luego transformarlas
    .replace(/\//g, '-')                // transforma / en -
    .replace(/--+/g, '-')               // limpia múltiples guiones
    .replace(/^-+|-+$/g, '')            // limpia extremos
    .replace(/ghz/g, 'ghz')             // normalización específica
    .replace(/box$/, 'box')             // asegurar consistencia con terminación box
}
