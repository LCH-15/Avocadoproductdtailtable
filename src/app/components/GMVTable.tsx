/**
 * GMVTable — Top 10 GMV Creators
 *
 * Container:  fill #FFFFFF · stroke 1px rgba(0,0,0,0.1) · radius 14px
 * Layout:     Auto Layout vertical · gap 0px
 * Header:     fill #F9FAFB · padding 12px 16px · Inter 14px SemiBold #111827
 * Rows:       fill #FFFFFF · padding 16px · Inter 12px Regular #374151 · height 64px
 * Dividers:   1px rgba(0,0,0,0.05) between rows
 * GMV values: Inter 12px SemiBold #111827
 * Thumbnails: 48×36px · rounded 8px · -8px overlap · 20px white play icon
 */

import React from "react";
import { TableHeader } from "./table/TableHeader";
import { CreatorRow, RowVariant } from "./table/CreatorRow";

// ─── Avatar pool ──────────────────────────────────────────────────────────────
const AVATARS = [
  "https://images.unsplash.com/photo-1558975285-193b2c315c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
  "https://images.unsplash.com/photo-1748344386932-f0b9c7b925e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
  "https://images.unsplash.com/photo-1763913086925-d802f2df70a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
  "https://images.unsplash.com/photo-1660557989710-1a91e7e89d1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
  "https://images.unsplash.com/photo-1558975285-193b2c315c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
  "https://images.unsplash.com/photo-1748344386932-f0b9c7b925e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
  "https://images.unsplash.com/photo-1763913086925-d802f2df70a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
  "https://images.unsplash.com/photo-1660557989710-1a91e7e89d1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
  "https://images.unsplash.com/photo-1558975285-193b2c315c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
  "https://images.unsplash.com/photo-1748344386932-f0b9c7b925e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
];

// ─── Thumbnail pool ───────────────────────────────────────────────────────────
const THUMB_POOL = [
  "https://images.unsplash.com/photo-1694878982378-4fc7fb9ca415?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=96",
  "https://images.unsplash.com/photo-1564518160120-94178fcdf5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=96",
  "https://images.unsplash.com/photo-1645017324561-5de0e0739ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=96",
  "https://images.unsplash.com/photo-1768560886863-7570b744d33b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=96",
  "https://images.unsplash.com/photo-1758522488640-59b1b0acf03f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=96",
];

function thumbsForRow(idx: number): [string, string, string] {
  return [
    THUMB_POOL[(idx + 0) % THUMB_POOL.length],
    THUMB_POOL[(idx + 1) % THUMB_POOL.length],
    THUMB_POOL[(idx + 2) % THUMB_POOL.length],
  ];
}

// ─── Creator data ─────────────────────────────────────────────────────────────
const CREATORS = [
  { rank: 1,  name: "Sophie Anderson", handle: "@sophiebeauty",  units: "12,480", gmv: "$248,600", ttp: "2.3 days", videoGPM: "$18.40", liveGPM: "$22.10" },
  { rank: 2,  name: "Marcus Chen",     handle: "@marcustech",    units: "10,920", gmv: "$198,340", ttp: "1.8 days", videoGPM: "$16.70", liveGPM: "$19.80" },
  { rank: 3,  name: "Bella Rivera",    handle: "@bellalifestyle", units: "9,750", gmv: "$176,200", ttp: "3.1 days", videoGPM: "$15.20", liveGPM: "$17.50" },
  { rank: 4,  name: "James Hartwell",  handle: "@jamesfitness",  units: "8,300",  gmv: "$154,800", ttp: "2.6 days", videoGPM: "$14.90", liveGPM: "$16.30" },
  { rank: 5,  name: "Priya Nair",      handle: "@priyacooks",    units: "7,840",  gmv: "$139,500", ttp: "1.5 days", videoGPM: "$13.60", liveGPM: "$15.70" },
  { rank: 6,  name: "Ethan Walker",    handle: "@ethanoutdoors", units: "7,200",  gmv: "$122,400", ttp: "2.9 days", videoGPM: "$12.80", liveGPM: "$14.20" },
  { rank: 7,  name: "Luna Kim",        handle: "@lunafashion",   units: "6,580",  gmv: "$108,900", ttp: "3.4 days", videoGPM: "$11.90", liveGPM: "$13.40" },
  { rank: 8,  name: "Noah Patel",      handle: "@noahgadgets",   units: "5,960",  gmv: "$94,600",  ttp: "2.1 days", videoGPM: "$11.20", liveGPM: "$12.80" },
  { rank: 9,  name: "Aria Thompson",   handle: "@ariamakeup",    units: "5,310",  gmv: "$82,750",  ttp: "1.9 days", videoGPM: "$10.50", liveGPM: "$11.90" },
  { rank: 10, name: "Dylan Brooks",    handle: "@dylanfood",     units: "4,870",  gmv: "$71,400",  ttp: "2.7 days", videoGPM: "$9.80",  liveGPM: "$10.60" },
];

// ─── Props ────────────────────────────────────────────────────────────────────
export interface GMVTableProps {
  /** Pin all rows to a specific variant (design preview mode). */
  forceVariant?: RowVariant;
}

// ─── Component ────────────────────────────────────────────────────────────────
export function GMVTable({ forceVariant }: GMVTableProps) {
  return (
    <div
      style={{
        // Container
        background: "#FFFFFF",
        borderRadius: 14,
        border: "1px solid rgba(0,0,0,0.10)",
        // Auto Layout — vertical, gap 0
        display: "flex",
        flexDirection: "column",
        gap: 0,
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* Header */}
      <TableHeader />

      {/* Rows */}
      {CREATORS.map((c, idx) => (
        <CreatorRow
          key={c.rank}
          variant={forceVariant}
          rank={c.rank}
          avatarSrc={AVATARS[idx]}
          name={c.name}
          handle={c.handle}
          unitsSold={c.units}
          gmv={c.gmv}
          timeToPromote={c.ttp}
          videoGPM={c.videoGPM}
          liveGPM={c.liveGPM}
          thumbnails={thumbsForRow(idx)}
          showDivider={idx < CREATORS.length - 1}
        />
      ))}
    </div>
  );
}
