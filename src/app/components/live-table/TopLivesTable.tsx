/**
 * TopLivesTable — "Top 10 GMV Related Lives"
 * ────────────────────────────────────────────
 * Container: fill #FFFFFF · 1px rgba(0,0,0,0.1) · radius 14px · width 1210px
 *
 * 7 columns (exact → 1210px):
 *   Live 362px · UnitsSold 110px · GMV 110px · CumViewers 140px
 *   Duration 130px · Peak 120px · StartTime 110px
 *   ─────────────────────────────────────────────────────
 *   Cols 1082px + padding 32px + 6 gaps × 16px 96px = 1210px ✓
 */

import React from "react";
import { LiveTableHeader } from "./LiveTableHeader";
import { LiveTableRow }    from "./LiveTableRow";
import { LIVE_WIDTH, LIVE_RADIUS } from "./liveColSpec";

// ─── Creator avatars ──────────────────────────────────────────────────────────
const AVATARS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
  "https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
];

// ─── Live thumbnails (stream screenshots) ────────────────────────────────────
const THUMBS = [
  "https://images.unsplash.com/photo-1710839006592-4fdfc6caca80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  "https://images.unsplash.com/photo-1696834137457-8872b6c525f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  "https://images.unsplash.com/photo-1601428684288-4b3d4709aa96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  "https://images.unsplash.com/photo-1758599879065-46fd59235166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  "https://images.unsplash.com/photo-1659354219145-dedd2324698e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  "https://images.unsplash.com/photo-1743292844327-ff5a6a9f6b21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  "https://images.unsplash.com/photo-1616160232761-cc3a7ba52211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  "https://images.unsplash.com/photo-1726667798194-31a8aba1d186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  "https://images.unsplash.com/photo-1744134369942-73ba1d1719f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  "https://images.unsplash.com/photo-1584178202347-022146d5b2a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
];

// ─── 10 live records ──────────────────────────────────────────────────────────
const LIVES = [
  {
    title: "✨ Skincare Secrets LIVE — Limited Flash Sale",
    creator: "Sophie Anderson", emoji: "🔥",
    unitsSold: "8,240",  gmv: "$186,400",
    cumulativeViewers: "420K", liveDuration: "02:14:38", viewersPeak: "38,200", startTime: "2025-01-14",
  },
  {
    title: "Tech Drop LIVE: Gadget Unboxing & Giveaway",
    creator: "Marcus Chen", emoji: "🎁",
    unitsSold: "6,810",  gmv: "$154,320",
    cumulativeViewers: "368K", liveDuration: "01:58:22", viewersPeak: "31,500", startTime: "2025-01-22",
  },
  {
    title: "Style With Me LIVE — Winter Collection Haul",
    creator: "Bella Rivera", emoji: "❄️",
    unitsSold: "5,950",  gmv: "$132,800",
    cumulativeViewers: "310K", liveDuration: "02:05:10", viewersPeak: "27,800", startTime: "2025-02-03",
  },
  {
    title: "Home Gym Build LIVE — Best Budget Equipment",
    creator: "James Hartwell",
    unitsSold: "5,420",  gmv: "$118,500",
    cumulativeViewers: "274K", liveDuration: "01:42:55", viewersPeak: "24,600", startTime: "2025-02-11",
  },
  {
    title: "Cook With Me LIVE — 3-Course Dinner Party",
    creator: "Priya Nair", emoji: "👩‍🍳",
    unitsSold: "4,980",  gmv: "$104,200",
    cumulativeViewers: "248K", liveDuration: "02:30:44", viewersPeak: "22,100", startTime: "2025-02-19",
  },
  {
    title: "Adventure Gear LIVE — Trail Hiking Essentials",
    creator: "Ethan Walker", emoji: "🏔️",
    unitsSold: "4,560",  gmv: "$ 95,760",
    cumulativeViewers: "221K", liveDuration: "01:35:18", viewersPeak: "19,900", startTime: "2025-02-27",
  },
  {
    title: "Glam LIVE: Full-Face Makeup Tutorial Sale",
    creator: "Luna Kim", emoji: "💄",
    unitsSold: "4,130",  gmv: "$ 86,140",
    cumulativeViewers: "196K", liveDuration: "01:48:06", viewersPeak: "17,400", startTime: "2025-03-06",
  },
  {
    title: "Room Reno LIVE — Affordable Decor Picks",
    creator: "Noah Patel",
    unitsSold: "3,720",  gmv: "$ 78,600",
    cumulativeViewers: "178K", liveDuration: "02:02:33", viewersPeak: "15,800", startTime: "2025-03-14",
  },
  {
    title: "Sneaker Drop LIVE — Exclusive Early Access",
    creator: "Aria Thompson", emoji: "👟",
    unitsSold: "3,380",  gmv: "$ 69,850",
    cumulativeViewers: "158K", liveDuration: "01:22:47", viewersPeak: "14,200", startTime: "2025-03-22",
  },
  {
    title: "Morning Wellness LIVE — Routine & Products",
    creator: "Dylan Brooks", emoji: "☀️",
    unitsSold: "3,040",  gmv: "$ 61,300",
    cumulativeViewers: "142K", liveDuration: "01:15:59", viewersPeak: "12,700", startTime: "2025-03-30",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export function TopLivesTable() {
  return (
    <div
      role="table"
      aria-label="Top 10 GMV Related Lives"
      style={{
        background:    "#FFFFFF",
        borderRadius:  LIVE_RADIUS,
        border:        "1px solid rgba(0,0,0,0.10)",
        display:       "flex",
        flexDirection: "column",
        overflow:      "hidden",
        width:         LIVE_WIDTH,
      }}
    >
      <LiveTableHeader />

      {LIVES.map((v, idx) => (
        <LiveTableRow
          key={idx}
          thumbnailSrc={THUMBS[idx]}
          title={v.title}
          creatorAvatar={AVATARS[idx]}
          creatorName={v.creator}
          emoji={v.emoji}
          unitsSold={v.unitsSold}
          gmv={v.gmv}
          cumulativeViewers={v.cumulativeViewers}
          liveDuration={v.liveDuration}
          viewersPeak={v.viewersPeak}
          startTime={v.startTime}
          showDivider={idx < LIVES.length - 1}
        />
      ))}
    </div>
  );
}
