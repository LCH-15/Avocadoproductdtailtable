import React, { useState } from "react";
import { VideoCell, VideoCellProps } from "./VideoCell";
import { Cell } from "../row/Cell";
import { TextLayer } from "../row/TextLayer";

// ─── Column widths ────────────────────────────────────────────────────────────
// 350 + 148 + 148 + 160 + 148 + 144 = 1098px
// + padding 32px + 5 gaps × 16px = 1210px ✓
export const VIDEO_COL = {
  video:          350,
  views:          148,
  likes:          148,
  engagementRate: 160,
  comments:       148,
  gmv:            144,
} as const;

export type VideoRowVariant = "default" | "hover" | "selected";

const BG: Record<VideoRowVariant, string> = {
  default:  "#FFFFFF",
  hover:    "#F9FAFB",
  selected: "#F0FDF4",
};

export interface VideoTableRowProps extends VideoCellProps {
  rank: number;
  views: string;
  likes: string;
  /** Shown in #22C55E */
  engagementRate: string;
  comments: string;
  gmv: string;
  showDivider?: boolean;
  variant?: VideoRowVariant;
  selected?: boolean;
  onClick?: () => void;
}

/**
 * VideoTableRow
 * ─────────────
 * Auto Layout horizontal · gap 16px · padding-x 16px · height 80px
 *
 * 6 Cell slots:
 *   [Video 350px] [Views 148px] [Likes 148px]
 *   [EngRate 160px] [Comments 148px] [GMV 144px]
 */
export function VideoTableRow({
  rank,
  thumbnailSrc,
  title,
  duration,
  creatorAvatarSrc,
  creatorName,
  views,
  likes,
  engagementRate,
  comments,
  gmv,
  showDivider = true,
  variant,
  selected: controlledSelected,
  onClick,
}: VideoTableRowProps) {
  const [hovered, setHovered] = useState(false);
  const [uncontrolledSelected, setUncontrolledSelected] = useState(false);

  const isSelected = controlledSelected ?? uncontrolledSelected;
  const resolved: VideoRowVariant =
    variant ?? (isSelected ? "selected" : hovered ? "hover" : "default");

  return (
    <div
      role="row"
      onClick={() => (onClick ? onClick() : setUncontrolledSelected((p) => !p))}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        paddingLeft: 16,
        paddingRight: 16,
        height: 80,                              // ← spec: 80px row height
        background: BG[resolved],
        borderBottom: showDivider ? "1px solid rgba(0,0,0,0.05)" : "none",
        boxShadow: resolved === "selected" ? "inset 3px 0 0 0 #22C55E" : "none",
        cursor: "pointer",
        transition: "background 100ms ease",
        userSelect: "none",
      }}
    >
      {/* ══ Slot 1 — Video [350px] ═════════════════════════════════════ */}
      <Cell width={VIDEO_COL.video}>
        <VideoCell
          thumbnailSrc={thumbnailSrc}
          title={title}
          duration={duration}
          creatorAvatarSrc={creatorAvatarSrc}
          creatorName={creatorName}
        />
      </Cell>

      {/* ══ Slot 2 — Views [148px] ═════════════════════════════════════ */}
      <Cell width={VIDEO_COL.views}>
        <TextLayer variant="body">{views}</TextLayer>
      </Cell>

      {/* ══ Slot 3 — Likes [148px] ═════════════════════════════════════ */}
      <Cell width={VIDEO_COL.likes}>
        <TextLayer variant="body">{likes}</TextLayer>
      </Cell>

      {/* ══ Slot 4 — Engagement Rate [160px] — green #22C55E ══════════ */}
      <Cell width={VIDEO_COL.engagementRate}>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            fontWeight: 600,
            color: "#22C55E",            // ← spec: Engagement Rate text color
          }}
        >
          {engagementRate}
        </span>
      </Cell>

      {/* ══ Slot 5 — Comments [148px] ══════════════════════════════════ */}
      <Cell width={VIDEO_COL.comments}>
        <TextLayer variant="body">{comments}</TextLayer>
      </Cell>

      {/* ══ Slot 6 — GMV [144px] ═══════════════════════════════════════ */}
      <Cell width={VIDEO_COL.gmv}>
        <TextLayer variant="gmv">{gmv}</TextLayer>
      </Cell>
    </div>
  );
}
