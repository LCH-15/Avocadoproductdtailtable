import React from "react";

const columns: { label: string; width: number | "auto" }[] = [
  { label: "Creator Name",       width: 220 },
  { label: "Units Sold",         width: 110 },
  { label: "GMV",                width: 120 },
  { label: "Time to Promote",    width: 130 },
  { label: "Video GPM",          width: 110 },
  { label: "LIVE GPM",           width: 110 },
  { label: "Highest GMV Videos", width: "auto" },
];

/**
 * Header row — fill #F9FAFB, padding 12px 16px, Inter 14px SemiBold #111827.
 */
export function TableHeader() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        background: "#F9FAFB",
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 16,
        paddingRight: 16,
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        // no gap — each column uses flex-basis
      }}
    >
      {columns.map((col, i) => (
        <div
          key={i}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            fontWeight: 600,
            color: "#111827",
            whiteSpace: "nowrap",
            flex: col.width === "auto" ? "1 1 auto" : `0 0 ${col.width}px`,
          }}
        >
          {col.label}
        </div>
      ))}
    </div>
  );
}
