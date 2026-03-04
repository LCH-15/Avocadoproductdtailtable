/**
 * LiveCell
 * ────────
 * Auto Layout horizontal · gap 12px · aligns center
 *
 *  ┌─────────────────┐   title       12px SemiBold #111827, truncate 1 line
 *  │  80×60 thumb    │   ─────────────────────────────────────────────────
 *  │  LIVE badge     │   creator row:  [20px avatar]  name 11px #6B7280  emoji?
 *  │  top-left       │
 *  └─────────────────┘
 *
 * LIVE badge: red dot (●) + "LIVE" text, top-left corner of thumbnail
 */

import React from "react";

export interface LiveCellProps {
  thumbnailSrc:  string;
  title:         string;
  creatorAvatar: string;
  creatorName:   string;
  /** Optional emoji shown after creator name, e.g. "🔥" */
  emoji?:        string;
}

export function LiveCell({
  thumbnailSrc,
  title,
  creatorAvatar,
  creatorName,
  emoji,
}: LiveCellProps) {
  return (
    <div
      style={{
        display:       "flex",
        flexDirection: "row",
        alignItems:    "center",
        gap:           12,
        width:         "100%",
        overflow:      "hidden",
      }}
    >
      {/* ── Thumbnail 80×60, radius 8 ──────────────────────────────── */}
      <div
        style={{
          position:     "relative",
          width:        80,
          height:       60,
          borderRadius: 8,
          overflow:     "hidden",
          flexShrink:   0,
          border:       "1px solid rgba(0,0,0,0.07)",
        }}
      >
        {/* Image */}
        <img
          src={thumbnailSrc}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />

        {/* Subtle gradient scrim — bottom for readability */}
        <div
          style={{
            position:   "absolute",
            inset:      0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.38) 100%)",
          }}
        />

        {/* LIVE badge — top-left */}
        <div
          style={{
            position:      "absolute",
            top:           5,
            left:          5,
            display:       "flex",
            alignItems:    "center",
            gap:           3,
            background:    "rgba(239,68,68,0.92)",   // red-500 at 92%
            borderRadius:  4,
            paddingLeft:   4,
            paddingRight:  5,
            paddingTop:    2,
            paddingBottom: 2,
          }}
        >
          {/* Pulsing dot */}
          <div
            style={{
              width:        5,
              height:       5,
              borderRadius: "50%",
              background:   "#FFFFFF",
              flexShrink:   0,
            }}
          />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize:   9,
              fontWeight: 700,
              color:      "#FFFFFF",
              lineHeight: 1,
              letterSpacing: "0.04em",
            }}
          >
            LIVE
          </span>
        </div>
      </div>

      {/* ── Text stack (vertical flex, gap 6) ─────────────────────── */}
      <div
        style={{
          display:        "flex",
          flexDirection:  "column",
          gap:            6,
          overflow:       "hidden",
          flex:           1,
          justifyContent: "center",
        }}
      >
        {/* Title — 12px SemiBold #111827, truncate 1 line */}
        <span
          style={{
            fontFamily:   "'Inter', sans-serif",
            fontSize:     12,
            fontWeight:   600,
            color:        "#111827",
            whiteSpace:   "nowrap",
            overflow:     "hidden",
            textOverflow: "ellipsis",
            lineHeight:   1.4,
          }}
        >
          {title}
        </span>

        {/* Creator row — 20px avatar + name 11px #6B7280 + optional emoji */}
        <div
          style={{
            display:    "flex",
            alignItems: "center",
            gap:        5,
          }}
        >
          {/* Avatar 20px circular */}
          <div
            style={{
              width:        20,
              height:       20,
              borderRadius: "50%",
              overflow:     "hidden",
              flexShrink:   0,
              border:       "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <img
              src={creatorAvatar}
              alt={creatorName}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Creator name */}
          <span
            style={{
              fontFamily:   "'Inter', sans-serif",
              fontSize:     11,
              fontWeight:   400,
              color:        "#6B7280",
              whiteSpace:   "nowrap",
              overflow:     "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {creatorName}
          </span>

          {/* Optional emoji */}
          {emoji && (
            <span style={{ fontSize: 12, lineHeight: 1, flexShrink: 0 }}>
              {emoji}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
