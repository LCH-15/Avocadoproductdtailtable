/**
 * Column widths for TopLivesTable
 *
 * Math:
 *   362 + 110 + 110 + 140 + 130 + 120 + 110 = 1082px  (columns)
 *   + padding 16×2  =  32px
 *   + 6 gaps × 16px =  96px
 *   ───────────────────────────
 *   Total            = 1210px ✓
 *
 * Note: Live column adjusted 360→362px (+2px) to hit 1210px exact.
 */
export const LIVE_COL = {
  live:               362,   // Live cell (thumbnail + text stack)
  unitsSold:          110,
  gmv:                110,
  cumulativeViewers:  140,
  liveDuration:       130,
  viewersPeak:        120,
  startTime:          110,
} as const

export const LIVE_GAP    = 16    // horizontal gap between cells
export const LIVE_PAD_X  = 16    // left/right padding
export const LIVE_ROW_H  = 80    // row height px
export const LIVE_WIDTH  = 1210  // container width px
export const LIVE_RADIUS = 14    // border-radius px
