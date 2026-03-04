/**
 * V2VideoCell
 * ───────────
 * Layout: horizontal flex, gap 10px
 *
 *  ┌──────────────┐  title        12px SemiBold #111827, truncate 1 line
 *  │ 80×60 thumb  │  duration     11px Regular  #6B7280
 *  │ play + badge │  [20px ava]   creatorName   11px Regular #6B7280
 *  └──────────────┘
 */

import React from "react";
import { Play } from "lucide-react";

export interface V2VideoCellProps {
  thumbnailSrc:    string;
  title:           string;
  /** e.g. "3:24" */
  duration:        string;
  creatorAvatar:   string;
  creatorName:     string;
}

export function V2VideoCell({
  thumbnailSrc,
  title,
  duration,
  creatorAvatar,
  creatorName,
}: V2VideoCellProps) {
  return (
    <div
      style={{
        display:        "flex",
        flexDirection:  "row",
        alignItems:     "center",
        gap:            10,
        width:          "100%",
        overflow:       "hidden",
      }}
    >
      {/* ── Thumbnail 80×60, radius 8 ─────────────────────────────── */}
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

        {/* Dark scrim */}
        <div
          style={{
            position: "absolute",
            inset:    0,
            background: "rgba(0,0,0,0.28)",
          }}
        />

        {/* Play icon — centered */}
        <div
          style={{
            position:       "absolute",
            inset:          0,
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width:           22,
              height:          22,
              borderRadius:    "50%",
              background:      "rgba(255,255,255,0.93)",
              display:         "flex",
              alignItems:      "center",
              justifyContent:  "center",
              boxShadow:       "0 1px 5px rgba(0,0,0,0.25)",
            }}
          >
            <Play size={8} fill="#111827" stroke="none" style={{ marginLeft: 1 }} />
          </div>
        </div>

        {/* Duration badge — bottom-right */}
        <div
          style={{
            position:   "absolute",
            bottom:     4,
            right:      4,
            background: "rgba(0,0,0,0.68)",
            borderRadius: 3,
            padding:    "1px 4px",
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize:   10,
              fontWeight: 500,
              color:      "#FFFFFF",
              lineHeight: 1.4,
            }}
          >
            {duration}
          </span>
        </div>
      </div>

      {/* ── Text stack (vertical flex, gap 3) ─────────────────────── */}
      <div
        style={{
          display:        "flex",
          flexDirection:  "column",
          gap:            3,
          overflow:       "hidden",
          flex:           1,
          justifyContent: "center",
        }}
      >
        {/* Title — 12px SemiBold #111827, truncate 1 line */}
        <span
          style={{
            fontFamily:    "'Inter', sans-serif",
            fontSize:      12,
            fontWeight:    600,
            color:         "#111827",
            whiteSpace:    "nowrap",
            overflow:      "hidden",
            textOverflow:  "ellipsis",
            lineHeight:    1.4,
          }}
        >
          {title}
        </span>

        {/* Duration — 11px Regular #6B7280 */}
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize:   11,
            fontWeight: 400,
            color:      "#6B7280",
            lineHeight: 1.4,
          }}
        >
          {duration}
        </span>

        {/* Creator row — 20px circular avatar + name 11px #6B7280 */}
        <div
          style={{
            display:    "flex",
            alignItems: "center",
            gap:        5,
            marginTop:  2,
          }}
        >
          <div
            style={{
              width:        20,
              height:       20,
              borderRadius: "50%",
              overflow:     "hidden",
              flexShrink:   0,
              border:       "1px solid rgba(0,0,0,0.07)",
            }}
          >
            <img
              src={creatorAvatar}
              alt={creatorName}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

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
        </div>
      </div>
    </div>
  );
}
