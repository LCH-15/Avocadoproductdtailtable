/**
 * LiveTableRow
 * ────────────
 * Auto Layout horizontal · gap 16px · padding-x 16px · height 80px
 *
 * 7 Cell slots:
 *   [Live 362px] [UnitsSold 110px] [GMV 110px] [CumViewers 140px]
 *   [Duration 130px] [Peak 120px] [StartTime 110px]
 *
 * Typography per spec:
 *   Units Sold:          12px Regular #374151
 *   GMV:                 12px SemiBold #111827
 *   Cumulative Viewers:  12px Regular #6B7280
 *   LIVE Duration:       12px Regular #374151   HH:MM:SS
 *   Viewers Peak:        12px Regular #374151
 *   Start Time:          12px Regular #6B7280   YYYY-MM-DD
 *
 * Hover bg: #F9FAFB
 */

import React, { useState } from "react";
import { LiveCell, LiveCellProps } from "./LiveCell";
import { LIVE_COL, LIVE_GAP, LIVE_PAD_X, LIVE_ROW_H } from "./liveColSpec";

// ─── Tiny helper: renders a consistently-styled data cell text ────────────────
function DataCell({
  width,
  color,
  weight = 400,
  children,
}: {
  width:    number;
  color:    string;
  weight?:  400 | 600;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        width:          width,
        minWidth:       width,
        maxWidth:       width,
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        overflow:       "hidden",
      }}
    >
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
    </div>
  );
}

// ─── Props ────────────────────────────────────────────────────────────────────
export interface LiveTableRowProps extends LiveCellProps {
  unitsSold:         string;
  gmv:               string;
  cumulativeViewers: string;
  /** HH:MM:SS */
  liveDuration:      string;
  viewersPeak:       string;
  /** YYYY-MM-DD */
  startTime:         string;
  showDivider?:      boolean;
}

// ─── Component ────────────────────────────────────────────────────────────────
export function LiveTableRow({
  // LiveCell props
  thumbnailSrc,
  title,
  creatorAvatar,
  creatorName,
  emoji,
  // data columns
  unitsSold,
  gmv,
  cumulativeViewers,
  liveDuration,
  viewersPeak,
  startTime,
  showDivider = true,
}: LiveTableRowProps) {
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
        gap:           LIVE_GAP,
        paddingLeft:   LIVE_PAD_X,
        paddingRight:  LIVE_PAD_X,
        height:        LIVE_ROW_H,
        background:    hovered ? "#F9FAFB" : "#FFFFFF",
        borderBottom:  showDivider ? "1px solid rgba(0,0,0,0.05)" : "none",
        transition:    "background 100ms ease",
        cursor:        "default",
      }}
    >
      {/* 1 — Live cell [362px] — left-aligned */}
      <div
        style={{
          width:    LIVE_COL.live,
          minWidth: LIVE_COL.live,
          maxWidth: LIVE_COL.live,
          display:  "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <LiveCell
          thumbnailSrc={thumbnailSrc}
          title={title}
          creatorAvatar={creatorAvatar}
          creatorName={creatorName}
          emoji={emoji}
        />
      </div>

      {/* 2 — Units Sold — Regular #374151 */}
      <DataCell width={LIVE_COL.unitsSold} color="#374151">
        {unitsSold}
      </DataCell>

      {/* 3 — GMV — SemiBold #111827 */}
      <DataCell width={LIVE_COL.gmv} color="#111827" weight={600}>
        {gmv}
      </DataCell>

      {/* 4 — Cumulative Viewers — Regular #6B7280 */}
      <DataCell width={LIVE_COL.cumulativeViewers} color="#6B7280">
        {cumulativeViewers}
      </DataCell>

      {/* 5 — LIVE Duration — Regular #374151 HH:MM:SS */}
      <DataCell width={LIVE_COL.liveDuration} color="#374151">
        {liveDuration}
      </DataCell>

      {/* 6 — Viewers Peak — Regular #374151 */}
      <DataCell width={LIVE_COL.viewersPeak} color="#374151">
        {viewersPeak}
      </DataCell>

      {/* 7 — Start Time — Regular #6B7280 YYYY-MM-DD */}
      <DataCell width={LIVE_COL.startTime} color="#6B7280">
        {startTime}
      </DataCell>
    </div>
  );
}
