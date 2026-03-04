import React from "react";

export interface CreatorCellProps {
  avatarSrc: string;
  name: string;
  handle: string;
  rank: number;
}

/**
 * Creator name column slot — rank + 40px circular avatar + name/handle stack.
 */
export function CreatorCell({ avatarSrc, name, handle, rank }: CreatorCellProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        flex: "0 0 220px",
        overflow: "hidden",
      }}
    >
      {/* Rank */}
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 12,
          fontWeight: 400,
          color: "#9CA3AF",
          width: 16,
          textAlign: "center",
          flexShrink: 0,
        }}
      >
        {rank}
      </span>

      {/* Avatar — 40px circular */}
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          overflow: "hidden",
          flexShrink: 0,
          border: "1.5px solid rgba(0,0,0,0.08)",
        }}
      >
        <img
          src={avatarSrc}
          alt={name}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      {/* Name + handle */}
      <div style={{ display: "flex", flexDirection: "column", gap: 2, overflow: "hidden" }}>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            fontWeight: 500,
            color: "#111827",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            fontWeight: 400,
            color: "#9CA3AF",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {handle}
        </span>
      </div>
    </div>
  );
}
