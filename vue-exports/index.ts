/**
 * Vue 3 Table Components - Main Export File
 * 
 * Export all table components for easy importing in your Vue 3 project.
 * 
 * Usage:
 * import { TopCreatorsTable, TopVideosTableV2, TopLivesTable } from './vue-exports'
 */

// ─── Main Table Components ───────────────────────────────────────────────────
export { default as TopCreatorsTable } from './creators/TopCreatorsTable.vue'
export { default as TopVideosTableV2 } from './videos-v2/TopVideosTableV2.vue'
export { default as TopLivesTable } from './lives/TopLivesTable.vue'

// ─── Creators Table Components ───────────────────────────────────────────────
export { default as CreatorTableHeader } from './creators/TableHeader.vue'
export { default as CreatorTableRow } from './creators/TableRow.vue'
export { default as CreatorCell } from './creators/components/Cell.vue'
export { default as CreatorTextLayer } from './creators/components/TextLayer.vue'
export { default as CreatorAvatarInstance } from './creators/components/AvatarInstance.vue'
export { default as CreatorThumbnailInstance } from './creators/components/ThumbnailInstance.vue'

// ─── Videos V2 Table Components ──────────────────────────────────────────────
export { default as V2TableHeader } from './videos-v2/V2TableHeader.vue'
export { default as V2TableRow } from './videos-v2/V2TableRow.vue'
export { default as V2Cell } from './videos-v2/components/V2Cell.vue'
export { default as V2VideoCell } from './videos-v2/components/V2VideoCell.vue'

// ─── Lives Table Components ──────────────────────────────────────────────────
export { default as LiveTableHeader } from './lives/LiveTableHeader.vue'
export { default as LiveTableRow } from './lives/LiveTableRow.vue'
export { default as LiveCell } from './lives/components/LiveCell.vue'

// ─── Shared Components ───────────────────────────────────────────────────────
export { default as SectionTitle } from './components/SectionTitle.vue'

// ─── Type Exports ────────────────────────────────────────────────────────────
export type { TextVariant } from './creators/components/TextLayer.vue'
export type { RowVariant } from './creators/TableRow.vue'

// ─── Constants & Specs ───────────────────────────────────────────────────────
export { V2_COL, V2_GAP, V2_PAD_X, V2_ROW_H, V2_WIDTH, V2_RADIUS } from './videos-v2/colSpec'
export { LIVE_COL, LIVE_GAP, LIVE_PAD_X, LIVE_ROW_H, LIVE_WIDTH, LIVE_RADIUS } from './lives/liveColSpec'
