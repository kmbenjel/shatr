/**
 * shatr & create-qasida — Public Architecture & Schema Reference
 *
 * Zero-dependency Arabic poetry static site generator & CLI scaffolding suite:
 * - On-canvas Kashida (tatweel) justification engine (zero layout reflow)
 * - Schema-validated poem configuration (schema/poem.config.schema.json)
 * - Installable offline-first PWA, JSON-LD CreativeWork/Poem SEO, and 100/100 PageSpeed
 * - Print-ready PDF booklet generator (A4 + mobile reading edition)
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
  themes: ["stone", "sepia", "midnight", "rawda"]
};
