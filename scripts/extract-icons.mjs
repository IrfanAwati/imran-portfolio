// Copies the tool logos the site uses into public/icons/ (run: node scripts/extract-icons.mjs).
// Source: simple-icons (CC0). Tools with no published icon get a
// monogram badge in the UI instead (see src/content/tools.ts).
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const out = path.join(root, 'public', 'icons')
fs.mkdirSync(out, { recursive: true })

const si = (n) => path.join(root, 'node_modules/simple-icons/icons', `${n}.svg`)

/** slug -> [source file, optional brand fill for single-colour simple-icons] */
const MAP = {
  autocad: [si('autocad'), '#E51050'],
  claude: [si('claude'), '#D97757'],
  youtube: [si('youtube'), '#FF0000'],
}

for (const [slug, [src, fill]] of Object.entries(MAP)) {
  let svg = fs.readFileSync(src, 'utf8')
  if (fill) svg = svg.replace('<svg ', `<svg fill="${fill}" `)
  fs.writeFileSync(path.join(out, `${slug}.svg`), svg)
}
console.log(`wrote ${Object.keys(MAP).length} icons to public/icons`)
