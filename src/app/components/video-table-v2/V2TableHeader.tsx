/**
 * V2TableHeader
 * ─────────────
 * Fill: #F9FAFB (gray-50)
 * Typography: Inter 14px SemiBold #111827
 * Border-bottom: 1px rgba(0,0,0,0.05)
 */

import React from "react";
import { V2Cell } from "./V2Cell";
import { V2_COL, V2_GAP, V2_PAD_X } from "./colSpec";

const COLS: { key: string; label: string; width: number; align: "left" | "center" }[] = [
  { key: "video",          label: "Video",           width: V2_COL.video,          align: "left"   },
  { key: "unitsSold",      label: "Total Units Sold", width: V2_COL.unitsSold,      align: "center" },
  { key: "gmv",            label: "GMV",              width: V2_COL.gmv,            align: "center" },
  { key: "views",          label: "Views",            width: V2_COL.views,          align: "center" },
  { key: "likes",          label: "Likes",            width: V2_COL.likes,          align: "center" },
  { key: "engagementRate", label: "Engagement Rate",  width: V2_COL.engagementRate, align: "center" },
  { key: "comments",       label: "Comments",         width: V2_COL.comments,       align: "center" },
  { key: "published",      label: "Published",        width: V2_COL.published,      align: "center" },
];

export function V2TableHeader() {
  return (
    <div
      role="rowheader"
      style={{
        display:       "flex",
        flexDirection: "row",
        alignItems:    "center",
        gap:           V2_GAP,
        paddingLeft:   V2_PAD_X,
        paddingRight:  V2_PAD_X,
        paddingTop:    12,
        paddingBottom: 12,
        background:    "#F9FAFB",
        borderBottom:  "1px solid rgba(0,0,0,0.05)",
      }}
    >
      {COLS.map((c) => (
        <V2Cell key={c.key} width={c.width} align={c.align}>
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
        </V2Cell>
      ))}
    </div>
  );
}
