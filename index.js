/**
 * shatr & create-qasida — Public Architecture & Schema Reference
 *
 * Zero-dependency Arabic poetry static site generator & CLI scaffolding suite:
 * - On-canvas Kashida (tatweel) justification engine (zero layout reflow)
 * - Schema-validated poem configuration (schema/poem.config.schema.json)
 * - Installable offline-first PWA, JSON-LD CreativeWork/Poem SEO, and 100/100 PageSpeed
 * - Print-ready PDF booklet generator (A4 + mobile reading edition)
 *
 * Live Production Editions:
 * - https://hmittou.benjelloun.dev (Mimiyyat Ahmad Hmittou — 291 verses)
 * - https://kmbenjel.github.io/alfiya (Alfiyyat Ibn Malik — 1,002 verses)
 */

export const SHATR_ENGINE_SPEC = {
  name: "shatr",
  scaffolder: "create-qasida",
  commands: [
    "npm create qasida my-poem",
    "npx shatr init",
    "npx shatr check",
    "npx shatr build",
    "npx shatr preview",
    "npx shatr studio",
    "npx shatr pdf"
  ],
  themes: ["stone", "sepia", "midnight", "rawda"],
  liveShowcases: [
    {
      title: "Mimiyyat Ahmad Hmittou (القصيدة الميمية التوسلية — 291 bayt)",
      url: "https://hmittou.benjelloun.dev",
      repo: "https://github.com/kmbenjel/hmittou"
    },
    {
      title: "Alfiyyat Ibn Malik (ألفية ابن مالك في النحو والصرف — 1,002 bayt)",
      url: "https://kmbenjel.github.io/alfiya",
      repo: "https://github.com/kmbenjel/alfiya"
    }
  ]
};
