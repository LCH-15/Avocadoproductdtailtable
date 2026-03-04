import React, { useState } from "react";
import { Cell } from "./Cell";
import { TextLayer } from "./TextLayer";
import { AvatarInstance } from "./AvatarInstance";
import { ThumbnailInstance } from "./ThumbnailInstance";

// ─── Column widths (spec) ─────────────────────────────────────────────────────
// Total columns: 240+120+120+150+120+120+212 = 1082px
// + padding 32px + gaps(6×16) 96px = 1210px container
export const COL = {
  name:     240,
  units:    120,
  gmv:      120,
  date:     150,
  videoGPM: 120,
  liveGPM:  120,
  videos:   212,
} as const;

// ─── Row variant ──────────────────────────────────────────────────────────────
export type RowVariant = "default" | "hover" | "selected";

const BG: Record<RowVariant, string> = {
  default:  "#FFFFFF",
  hover:    "#F9FAFB",
  selected: "#F0FDF4",
};

// ─── Props ────────────────────────────────────────────────────────────────────
export interface TableRowCreatorProps {
  // ── Slot: Name cell ──────────────────────────────────────────────────────
  /** AvatarInstance slot — image URL */
  avatarSrc: string;
  /** TextLayer slot — creator display name */
  creatorName: string;
  /** TextLayer slot — @handle */
  handle: string;
  /** Rank number shown as avatar badge */
  rank: number;

  // ── Slot: Units cell ─────────────────────────────────────────────────────
  /** TextLayer slot — units sold value */
  unitsSold: string;

  // ── Slot: GMV cell ───────────────────────────────────────────────────────
  /** TextLayer slot (gmv variant) — GMV value */
  gmv: string;

  // ── Slot: Date cell ──────────────────────────────────────────────────────
  /** TextLayer slot — time-to-promote / date string */
  date: string;

  // ── Slot: Video GPM cell ─────────────────────────────────────────────────
  /** TextLayer slot — video GPM value */
  videoGPM: string;

  // ── Slot: Live GPM cell ──────────────────────────────────────────────────
  /** TextLayer slot — live GPM value */
  liveGPM: string;

  // ── Slot: Videos cell ────────────────────────────────────────────────────
  /** ThumbnailInstance slots — exactly 3 image URLs */
  thumbnails: [string, string, string];

  // ── State ────────────────────────────────────────────────────────────────
  /** Force a visual variant. Omit for interactive hover + click-select. */
  variant?: RowVariant;
  /** Render 1px divider below the row */
  showDivider?: boolean;
  /** Controlled selected state */
  selected?: boolean;
  onClick?: () => void;
}

/**
 * TableRowCreator
 * ───────────────
 * Auto Layout — horizontal, gap 16px, padding-x 16px, height 64px.
 *
 * 7 Cell slots (fixed widths per spec):
 *   [Name 200px] [Units 100px] [GMV 100px] [Date 120px]
 *   [VideoGPM 100px] [LiveGPM 100px] [Videos 180px]
 *
 * Each cell uses Auto Layout center-vertical.
 * Text layers have auto (hug-content) width.
 * Avatar and thumbnails are component instances (AvatarInstance, ThumbnailInstance).
 *
 * Variants: default | hover | selected
 */
export function TableRowCreator({
  avatarSrc,
  creatorName,
  handle,
  rank,
  unitsSold,
  gmv,
  date,
  videoGPM,
  liveGPM,
  thumbnails,
  variant,
  showDivider = true,
  selected: controlledSelected,
  onClick,
}: TableRowCreatorProps) {
  const [hovered, setHovered] = useState(false);
  const [uncontrolledSelected, setUncontrolledSelected] = useState(false);

  const isSelected = controlledSelected ?? uncontrolledSelected;
  const resolved: RowVariant =
    variant ?? (isSelected ? "selected" : hovered ? "hover" : "default");

  return (
    <div
      role="row"
      onClick={() => {
        onClick ? onClick() : setUncontrolledSelected((p) => !p);
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        // ── Auto Layout — horizontal ─────────────────────────────────────
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 16,                        // ← spec: 16px horizontal gap
        paddingLeft: 16,
        paddingRight: 16,
        height: 64,
        // ── Appearance ───────────────────────────────────────────────────
        background: BG[resolved],
        borderBottom: showDivider ? "1px solid rgba(0,0,0,0.05)" : "none",
        boxShadow: resolved === "selected" ? "inset 3px 0 0 0 #22C55E" : "none",
        cursor: "pointer",
        transition: "background 100ms ease",
        userSelect: "none",
      }}
    >

      {/* ══ Slot 1 — Name [200px] ══════════════════════════════════════════ */}
      <Cell width={COL.name}>
        {/* Auto Layout horizontal, gap 10, center-vertical */}
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10, width: "100%", overflow: "hidden" }}>
          {/* Component instance: AvatarInstance */}
          <AvatarInstance src={avatarSrc} alt={creatorName} rank={rank} />

          {/* Text stack: Auto Layout vertical, gap 2 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 2, overflow: "hidden", flex: 1 }}>
            {/* TextLayer — auto width, label variant */}
            <TextLayer variant="label" truncate>{creatorName}</TextLayer>
            {/* TextLayer — auto width, sub variant */}
            <TextLayer variant="sub" truncate>{handle}</TextLayer>
          </div>
        </div>
      </Cell>

      {/* ══ Slot 2 — Units Sold [100px] ════════════════════════════════════ */}
      <Cell width={COL.units}>
        {/* TextLayer — auto width, body */}
        <TextLayer variant="body">{unitsSold}</TextLayer>
      </Cell>

      {/* ══ Slot 3 — GMV [100px] ═══════════════════════════════════════════ */}
      <Cell width={COL.gmv}>
        {/* TextLayer — auto width, gmv (SemiBold #111827) */}
        <TextLayer variant="gmv">{gmv}</TextLayer>
      </Cell>

      {/* ══ Slot 4 — Date / Time to Promote [120px] ════════════════════════ */}
      <Cell width={COL.date}>
        {/* TextLayer — auto width, body */}
        <TextLayer variant="body">{date}</TextLayer>
      </Cell>

      {/* ══ Slot 5 — Video GPM [100px] ═════════════════════════════════════ */}
      <Cell width={COL.videoGPM}>
        {/* TextLayer — auto width, body */}
        <TextLayer variant="body">{videoGPM}</TextLayer>
      </Cell>

      {/* ══ Slot 6 — Live GPM [100px] ══════════════════════════════════════ */}
      <Cell width={COL.liveGPM}>
        {/* TextLayer — auto width, body */}
        <TextLayer variant="body">{liveGPM}</TextLayer>
      </Cell>

      {/* ══ Slot 7 — Videos [180px] ════════════════════════════════════════ */}
      <Cell width={COL.videos}>
        {/* Auto Layout horizontal, gap 0 (thumbnails overlap via -8px margin) */}
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          {thumbnails.map((src, i) => (
            // Component instance: ThumbnailInstance — stacked with -8px overlap
            <div key={i} style={{ marginLeft: i === 0 ? 0 : -8, zIndex: 3 - i, position: "relative" }}>
              <ThumbnailInstance src={src} alt={`${creatorName} video ${i + 1}`} />
            </div>
          ))}
        </div>
      </Cell>

    </div>
  );
}