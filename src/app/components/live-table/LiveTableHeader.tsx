/**
 * LiveTableHeader
 * ───────────────
 * Fill: #F9FAFB (gray-50)
 * Typography: Inter 14px SemiBold #111827
 * Border-bottom: 1px solid rgba(0,0,0,0.05)
 */

import React from "react";
import { LIVE_COL, LIVE_GAP, LIVE_PAD_X } from "./liveColSpec";

const COLS: { key: string; label: string; width: number; align: "left" | "center" }[] = [
  { key: "live",              label: "Live",                 width: LIVE_COL.live,              align: "left"   },
  { key: "unitsSold",         label: "Units Sold",           width: LIVE_COL.unitsSold,         align: "center" },
  { key: "gmv",               label: "GMV",                  width: LIVE_COL.gmv,               align: "center" },
  { key: "cumulativeViewers", label: "Cumulative Viewers",   width: LIVE_COL.cumulativeViewers, align: "center" },
  { key: "liveDuration",      label: "LIVE Duration",        width: LIVE_COL.liveDuration,      align: "center" },
  { key: "viewersPeak",       label: "Viewers Peak",         width: LIVE_COL.viewersPeak,       align: "center" },
  { key: "startTime",         label: "Start Time",           width: LIVE_COL.startTime,         align: "center" },
];

export function LiveTableHeader() {
  return (
    <div
      role="rowheader"
      style={{
        display:       "flex",
        flexDirection: "row",
        alignItems:    "center",
        gap:           LIVE_GAP,
        paddingLeft:   LIVE_PAD_X,
        paddingRight:  LIVE_PAD_X,
        paddingTop:    12,
        paddingBottom: 12,
        background:    "#F9FAFB",
        borderBottom:  "1px solid rgba(0,0,0,0.05)",
      }}
    >
      {COLS.map((c) => (
        <div
          key={c.key}
          style={{
            width:          c.width,
            minWidth:       c.width,
            maxWidth:       c.width,
            display:        "flex",
            alignItems:     "center",
            justifyContent: c.align === "center" ? "center" : "flex-start",
            overflow:       "hidden",
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize:   14,
              fontWeight: 600,
              color:      "#111827",
              whiteSpace: "nowrap",
            }}
          >
            {c.label}
          </span>
        </div>
      ))}
    </div>
  );
}
