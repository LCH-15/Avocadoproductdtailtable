import React, { useState } from "react";
import { CreatorCell } from "./CreatorCell";
import { MetricCell } from "./MetricCell";
import { VideoThumbnailStack } from "./VideoThumbnailStack";

// ─── Variant token map ────────────────────────────────────────────────────────
export type RowVariant = "default" | "hover" | "selected";

const VARIANT_BG: Record<RowVariant, string> = {
  default:  "#FFFFFF",
  hover:    "#F9FAFB",
  selected: "#F0FDF4",
};

// ─── Props ────────────────────────────────────────────────────────────────────
export interface CreatorRowProps {
  /** Force a visual variant (design preview). Omit for interactive behaviour. */
  variant?: RowVariant;

  // Slots ─────────────────────────────────────────────────────────────────────
  rank: number;
  /** Slot → CreatorCell: circular avatar image URL */
  avatarSrc: string;
  /** Slot → CreatorCell: creator display name */
  name: string;
  /** Slot → CreatorCell: @handle sub-label */
  handle: string;

  /** Slot → MetricCell */
  unitsSold: string;
  /** Slot → MetricCell (SemiBold #111827) */
  gmv: string;
  /** Slot → MetricCell */
  timeToPromote: string;
  /** Slot → MetricCell */
  videoGPM: string;
  /** Slot → MetricCell */
  liveGPM: string;

  /** Slot → VideoThumbnailStack */
  thumbnails: [string, string, string];

  /** Render bottom divider */
  showDivider?: boolean;
  onClick?: () => void;
  selected?: boolean;
}

/**
 * CreatorRow — nested row component.
 *
 * Variants:
 *   default  → fill #FFFFFF
 *   hover    → fill #F9FAFB       (auto on mouse-enter)
 *   selected → fill #F0FDF4       (auto on click-toggle)
 *
 * Layout: Auto Layout horizontal, padding 16px, height 64px, gap 0.
 * Divider: 1px rgba(0,0,0,0.05) full width below row.
 */
export function CreatorRow({
  variant,
  rank,
  avatarSrc,
  name,
  handle,
  unitsSold,
  gmv,
  timeToPromote,
  videoGPM,
  liveGPM,
  thumbnails,
  showDivider = true,
  onClick,
  selected: controlledSelected,
}: CreatorRowProps) {
  const [hovered, setHovered] = useState(false);
  const [uncontrolledSelected, setUncontrolledSelected] = useState(false);

  const isSelected = controlledSelected ?? uncontrolledSelected;

  const resolvedVariant: RowVariant =
    variant ?? (isSelected ? "selected" : hovered ? "hover" : "default");

  return (
    <div
      onClick={() => {
        if (onClick) onClick();
        else setUncontrolledSelected((p) => !p);
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        // Auto Layout — horizontal, center-align, padding 16px, height 64px
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 64,
        paddingLeft: 16,
        paddingRight: 16,
        gap: 0,
        background: VARIANT_BG[resolvedVariant],
        // Divider rendered as borderBottom
        borderBottom: showDivider ? "1px solid rgba(0,0,0,0.05)" : "none",
        cursor: "pointer",
        transition: "background 100ms ease",
        // Selected: green left accent
        boxShadow:
          resolvedVariant === "selected" ? "inset 3px 0 0 0 #22C55E" : "none",
      }}
    >
      {/* ── Slot: Creator (avatar + name + handle) ── */}
      <CreatorCell rank={rank} avatarSrc={avatarSrc} name={name} handle={handle} />

      {/* ── Slot: Units Sold ── */}
      <MetricCell value={unitsSold} width={110} />

      {/* ── Slot: GMV — Inter 12px SemiBold #111827 ── */}
      <MetricCell value={gmv} width={120} emphasis />

      {/* ── Slot: Time to Promote ── */}
      <MetricCell value={timeToPromote} width={130} />

      {/* ── Slot: Video GPM ── */}
      <MetricCell value={videoGPM} width={110} />

      {/* ── Slot: LIVE GPM ── */}
      <MetricCell value={liveGPM} width={110} />

      {/* ── Slot: Video Thumbnail Stack ── */}
      <div style={{ flex: "1 1 auto" }}>
        <VideoThumbnailStack thumbnails={thumbnails} />
      </div>
    </div>
  );
}
