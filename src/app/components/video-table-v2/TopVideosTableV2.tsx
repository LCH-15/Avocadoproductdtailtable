/**
 * TopVideosTableV2 — "Top 10 GMV Related Videos"
 * ────────────────────────────────────────────────
 * Container: fill #FFFFFF · 1px stroke rgba(0,0,0,0.1) · radius 14px · width 1210px
 *
 * 8 columns (exact math → 1210px):
 *   Video 326px · Units 110px · GMV 110px · Views 100px
 *   Likes 100px · EngRate 130px · Comments 90px · Published 100px
 *   ────────────────────────────────────────────────────
 *   Cols 1066px + padding 32px + 7 gaps × 16px 112px = 1210px ✓
 */

import React from "react";
import { V2TableHeader } from "./V2TableHeader";
import { V2TableRow }    from "./V2TableRow";
import { V2_WIDTH, V2_RADIUS } from "./colSpec";

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

// ─── Video thumbnails ─────────────────────────────────────────────────────────
const THUMBS = [
  "https://images.unsplash.com/photo-1690725219036-3c9f57a08837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  "https://images.unsplash.com/photo-1543441235-e8c913dea2d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  "https://images.unsplash.com/photo-1514410068872-091ca7957586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  "https://images.unsplash.com/photo-1766287453739-c3ffc3f37d05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  "https://images.unsplash.com/photo-1589714379796-37d4bc8655c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  "https://images.unsplash.com/photo-1552877843-1064151d97bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  "https://images.unsplash.com/photo-1758272421578-840698d05a00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  "https://images.unsplash.com/photo-1659977035284-91e73d5e709d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  "https://images.unsplash.com/photo-1758909894264-eae137ed71ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
];

// ─── 10 video records ─────────────────────────────────────────────────────────
const VIDEOS = [
  {
    title: "My Full Skincare Routine Using This Amazing Serum",
    duration: "4:32", creator: "Sophie Anderson",
    unitsSold: "12,480", gmv: "$248,600",
    views: "3.2M", likes: "284K", engagementRate: "8.87%", comments: "12,480",
    published: "2025-01-14",
  },
  {
    title: "Unboxing the Most Hyped Tech Gadget of 2025",
    duration: "6:14", creator: "Marcus Chen",
    unitsSold: "10,920", gmv: "$198,340",
    views: "2.8M", likes: "231K", engagementRate: "8.25%", comments: "10,920",
    published: "2025-01-22",
  },
  {
    title: "Styling 10 Outfits With One Dress — Fashion Hacks",
    duration: "5:47", creator: "Bella Rivera",
    unitsSold: "9,750", gmv: "$176,200",
    views: "2.1M", likes: "198K", engagementRate: "9.43%", comments: "9,750",
    published: "2025-02-03",
  },
  {
    title: "30-Day Transformation: My Home Gym Setup Guide",
    duration: "8:03", creator: "James Hartwell",
    unitsSold: "8,300", gmv: "$154,800",
    views: "1.9M", likes: "163K", engagementRate: "8.58%", comments: "8,300",
    published: "2025-02-11",
  },
  {
    title: "Cooking 5-Star Restaurant Dishes at Home",
    duration: "7:21", creator: "Priya Nair",
    unitsSold: "7,840", gmv: "$139,500",
    views: "1.7M", likes: "147K", engagementRate: "8.65%", comments: "7,840",
    published: "2025-02-19",
  },
  {
    title: "Solo Hiking the Most Scenic Trails This Summer",
    duration: "9:55", creator: "Ethan Walker",
    unitsSold: "7,200", gmv: "$122,400",
    views: "1.5M", likes: "128K", engagementRate: "8.53%", comments: "7,200",
    published: "2025-02-27",
  },
  {
    title: "Full Glam Makeup in 10 Minutes — Everyday Look",
    duration: "3:58", creator: "Luna Kim",
    unitsSold: "6,580", gmv: "$108,900",
    views: "1.3M", likes: "114K", engagementRate: "8.77%", comments: "6,580",
    published: "2025-03-06",
  },
  {
    title: "Living Room Makeover on a $500 Budget",
    duration: "6:42", creator: "Noah Patel",
    unitsSold: "5,960", gmv: "$94,600",
    views: "1.1M", likes:  "96K", engagementRate: "8.73%", comments: "5,960",
    published: "2025-03-14",
  },
  {
    title: "I Tested Every Viral Sneaker — Here's the Truth",
    duration: "5:18", creator: "Aria Thompson",
    unitsSold: "5,310", gmv: "$82,750",
    views:  "980K", likes:  "84K", engagementRate: "8.57%", comments: "5,310",
    published: "2025-03-22",
  },
  {
    title: "Morning Routine That Actually Changed My Life",
    duration: "4:46", creator: "Dylan Brooks",
    unitsSold: "4,870", gmv: "$71,400",
    views:  "870K", likes:  "73K", engagementRate: "8.39%", comments: "4,870",
    published: "2025-03-30",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export function TopVideosTableV2() {
  return (
    <div
      role="table"
      aria-label="Top 10 GMV Related Videos"
      style={{
        background:    "#FFFFFF",
        borderRadius:  V2_RADIUS,
        border:        "1px solid rgba(0,0,0,0.10)",
        display:       "flex",
        flexDirection: "column",
        overflow:      "hidden",
        width:         V2_WIDTH,
      }}
    >
      <V2TableHeader />

      {VIDEOS.map((v, idx) => (
        <V2TableRow
          key={idx}
          thumbnailSrc={THUMBS[idx]}
          title={v.title}
          duration={v.duration}
          creatorAvatar={AVATARS[idx]}
          creatorName={v.creator}
          unitsSold={v.unitsSold}
          gmv={v.gmv}
          views={v.views}
          likes={v.likes}
          engagementRate={v.engagementRate}
          comments={v.comments}
          published={v.published}
          showDivider={idx < VIDEOS.length - 1}
        />
      ))}
    </div>
  );
}
