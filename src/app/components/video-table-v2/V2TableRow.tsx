/**
 * V2TableRow
 * ──────────
 * Auto Layout horizontal · gap 16px · padding-x 16px · height 80px
 *
 * 8 Cell slots (all centered except Video which is left-aligned):
 *   [Video 326px] [Units 110px] [GMV 110px] [Views 100px]
 *   [Likes 100px] [EngRate 130px] [Comments 90px] [Published 100px]
 *
 * Typography per spec:
 *   Units:   12px Regular #374151
 *   GMV:     12px SemiBold #111827
 *   Views:   12px Regular #6B7280
 *   Likes:   12px Regular #6B7280
 *   EngRate: 12px Regular #22C55E
 *   Comments:12px Regular #374151
 *   Published:12px Regular #6B7280
 */

import React, { useState } from "react";
import { V2Cell } from "./V2Cell";
import { V2VideoCell, V2VideoCellProps } from "./V2VideoCell";
import { V2_COL, V2_GAP, V2_PAD_X, V2_ROW_H } from "./colSpec";

// ─── Per-column text style helpers ───────────────────────────────────────────
function txt(
  color:  string,
  weight: 400 | 600 = 400,
  children: React.ReactNode,
) {
  return (
    <span
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize:   12,
        fontWeight: weight,
        color,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

// ─── Types ────────────────────────────────────────────────────────────────────
export interface V2TableRowProps extends V2VideoCellProps {
  unitsSold:      string;
  gmv:            string;
  views:          string;
  likes:          string;
  /** Displayed green */
  engagementRate: string;
  comments:       string;
  /** YYYY-MM-DD */
  published:      string;
  showDivider?:   boolean;
}

// ─── Component ───────────────────────────────────────────────────────────────
export function V2TableRow({
  // VideoCell props
  thumbnailSrc,
  title,
  duration,
  creatorAvatar,
  creatorName,
  // data columns
  unitsSold,
  gmv,
  views,
  likes,
  engagementRate,
  comments,
  published,
  showDivider = true,
}: V2TableRowProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      role="row"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:       "flex",
        flexDirection: "row",
        alignItems:    "center",
        gap:           V2_GAP,
        paddingLeft:   V2_PAD_X,
        paddingRight:  V2_PAD_X,
        height:        V2_ROW_H,
        background:    hovered ? "#F9FAFB" : "#FFFFFF",
        borderBottom:  showDivider ? "1px solid rgba(0,0,0,0.05)" : "none",
        transition:    "background 100ms ease",
        cursor:        "default",
      }}
    >
      {/* 1 — Video */}
      <V2Cell width={V2_COL.video} align="left">
        <V2VideoCell
          thumbnailSrc={thumbnailSrc}
          title={title}
          duration={duration}
          creatorAvatar={creatorAvatar}
          creatorName={creatorName}
        />
      </V2Cell>

      {/* 2 — Total Units Sold — Regular #374151 */}
      <V2Cell width={V2_COL.unitsSold} align="center">
        {txt("#374151", 400, unitsSold)}
      </V2Cell>

      {/* 3 — GMV — SemiBold #111827 */}
      <V2Cell width={V2_COL.gmv} align="center">
        {txt("#111827", 600, gmv)}
      </V2Cell>

      {/* 4 — Views — Regular #6B7280 */}
      <V2Cell width={V2_COL.views} align="center">
        {txt("#6B7280", 400, views)}
      </V2Cell>

      {/* 5 — Likes — Regular #6B7280 */}
      <V2Cell width={V2_COL.likes} align="center">
        {txt("#6B7280", 400, likes)}
      </V2Cell>

      {/* 6 — Engagement Rate — Regular #22C55E green */}
      <V2Cell width={V2_COL.engagementRate} align="center">
        {txt("#22C55E", 400, engagementRate)}
      </V2Cell>

      {/* 7 — Comments — Regular #374151 */}
      <V2Cell width={V2_COL.comments} align="center">
        {txt("#374151", 400, comments)}
      </V2Cell>

      {/* 8 — Published — Regular #6B7280 YYYY-MM-DD */}
      <V2Cell width={V2_COL.published} align="center">
        {txt("#6B7280", 400, published)}
      </V2Cell>
    </div>
  );
}
