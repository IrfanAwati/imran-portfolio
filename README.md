# Imran Awati: portfolio

A single-page portfolio in a neon-marker style (dark base, electric purple, lime notes).
Built with Vite, React 19, TypeScript, Motion for React and Lenis.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production bundle in dist/
```

## Editing content

All copy is in `src/content/`: `profile.ts` (name, hero, about, off-the-clock cards, links),
`work.ts` (roles, stats, education, certifications) and `skills.ts` (tools row).
Facts come only from Imran's résumé, LinkedIn or what he/Irfan stated; anything unconfirmed is marked `TODO`.

## Images

`public/img/` holds AI-enhanced images generated in Gemini from Imran's own photos
(alt text says so). The illustrations were cut out locally with the `isnet-anime` ONNX model.
Tool logos come from simple-icons (CC0) via `node scripts/extract-icons.mjs`; tools without a
published logo use a monogram tile.
