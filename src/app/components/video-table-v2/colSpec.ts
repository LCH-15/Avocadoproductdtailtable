/**
 * Column widths for TopVideosTableV2
 *
 * Math:
 *   326 + 110 + 110 + 100 + 100 + 130 + 90 + 100 = 1066px  (columns)
 *   + padding 16×2 = 32px
 *   + 7 gaps × 16px = 112px
 *   ─────────────────────────────
 *   Total = 1210px ✓
 */
export const V2_COL = {
  video:          326,   // adjusted from 320 to hit 1210px exact
  unitsSold:      110,
  gmv:            110,
  views:          100,
  likes:          100,
  engagementRate: 130,
  comments:        90,
  published:      100,
} as const;

export const V2_GAP     = 16;   // horizontal gap between cells
export const V2_PAD_X   = 16;   // left/right padding
export const V2_ROW_H   = 80;   // row height px
export const V2_WIDTH   = 1210; // container width px
export const V2_RADIUS  = 14;   // border-radius px
