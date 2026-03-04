import React from "react";
import { Play } from "lucide-react";

export interface VideoCellProps {
  /** 80×60px video thumbnail */
  thumbnailSrc: string;
  title: string;
  /** e.g. "3:24" */
  duration: string;
  creatorAvatarSrc: string;
  creatorName: string;
}

/**
 * VideoCell — atomic component for the Video column.
 *
 * Auto Layout horizontal, gap 12px:
 *   ┌──────────────┐
 *   │  80×60 thumb │  title (12px SemiBold #111827, truncate)
 *   │  + play icon │  duration (11px Regular #9CA3AF)
 *   └──────────────┘  [20px avatar] creatorName (11px Medium #374151)
 */
export function VideoCell({
  thumbnailSrc,
  title,
  duration,
  creatorAvatarSrc,
  creatorName,
}: VideoCellProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* ── Thumbnail (80×60, radius 8) ─────────────────────────────── */}
      <div
        style={{
          position: "relative",
          width: 80,
          height: 60,
          borderRadius: 8,
          overflow: "hidden",
          flexShrink: 0,
          border: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <img
          src={thumbnailSrc}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        {/* Scrim */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.30)" }} />

        {/* Duration badge — bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: 4,
            right: 4,
            background: "rgba(0,0,0,0.70)",
            borderRadius: 4,
            padding: "1px 5px",
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 10,
              fontWeight: 500,
              color: "#FFFFFF",
              lineHeight: 1.4,
            }}
          >
            {duration}
          </span>
        </div>

        {/* Play icon — centered */}
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
              width: 24,
              height: 24,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.95)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 1px 6px rgba(0,0,0,0.22)",
            }}
          >
            <Play size={9} fill="#111827" stroke="none" style={{ marginLeft: 1 }} />
          </div>
        </div>
      </div>

      {/* ── Text stack (Auto Layout vertical, gap 3) ─────────────────── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          overflow: "hidden",
          flex: 1,
          // center vertically within the cell
          justifyContent: "center",
        }}
      >
        {/* Title — 12px SemiBold #111827, truncate */}
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            fontWeight: 600,
            color: "#111827",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: 1.4,
          }}
        >
          {title}
        </span>

        {/* Duration — 11px Regular #9CA3AF */}
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            fontWeight: 400,
            color: "#9CA3AF",
            lineHeight: 1.4,
          }}
        >
          {duration}
        </span>

        {/* Creator row — 20px avatar + name */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            marginTop: 2,
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <img
              src={creatorAvatarSrc}
              alt={creatorName}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 500,
              color: "#374151",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {creatorName}
          </span>
        </div>
      </div>
    </div>
  );
}
