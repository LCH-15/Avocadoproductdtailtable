import React from "react";

export interface AvatarInstanceProps {
  /** Image URL */
  src: string;
  /** Alt text / creator name */
  alt: string;
  /** Rank badge rendered bottom-left */
  rank: number;
}

/**
 * AvatarInstance — atomic component.
 * 40×40px circular image with a rank badge.
 */
export function AvatarInstance({ src, alt, rank }: AvatarInstanceProps) {
  return (
    <div
      style={{
        position: "relative",
        width: 40,
        height: 40,
        flexShrink: 0,
      }}
    >
      {/* Circle image */}
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          overflow: "hidden",
          border: "1.5px solid rgba(0,0,0,0.08)",
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      {/* Rank badge */}
      <div
        style={{
          position: "absolute",
          bottom: -2,
          right: -2,
          minWidth: 16,
          height: 16,
          borderRadius: 8,
          background: "#111827",
          border: "1.5px solid #fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 3px",
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 9,
            fontWeight: 600,
            color: "#FFFFFF",
            lineHeight: 1,
          }}
        >
          {rank}
        </span>
      </div>
    </div>
  );
}
