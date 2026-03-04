import React from "react";
import { Play } from "lucide-react";

export interface ThumbnailInstanceProps {
  /** Image URL */
  src: string;
  alt?: string;
}

/**
 * ThumbnailInstance — atomic component.
 * 48×36px, rounded-8px, dark scrim, centered white play icon (20px circle).
 */
export function ThumbnailInstance({ src, alt = "video" }: ThumbnailInstanceProps) {
  return (
    <div
      style={{
        position: "relative",
        width: 48,
        height: 36,
        borderRadius: 8,
        overflow: "hidden",
        flexShrink: 0,
        border: "1.5px solid #FFFFFF",
        boxSizing: "border-box",
      }}
    >
      {/* Image */}
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />

      {/* Scrim */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.35)",
        }}
      />

      {/* Play icon — 20px white circle, centered */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "rgba(255,255,255,1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
          }}
        >
          <Play size={8} fill="#111827" stroke="none" style={{ marginLeft: 1 }} />
        </div>
      </div>
    </div>
  );
}
