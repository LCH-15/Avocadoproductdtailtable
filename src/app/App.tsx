/**
 * App — showcases the TableRowCreator component system.
 *
 * Component hierarchy:
 *   TopCreatorsTable
 *   ├── TableHeaderRow          gap 16px · #F9FAFB · 14px SemiBold
 *   └── TableRowCreator × 10   gap 16px · 64px height
 *         ├── Cell[Name  200px] → AvatarInstance + TextLayer(label) + TextLayer(sub)
 *         ├── Cell[Units 100px] → TextLayer(body)
 *         ├── Cell[GMV   100px] → TextLayer(gmv)
 *         ├── Cell[Date  120px] → TextLayer(body)
 *         ├── Cell[VGPM  100px] → TextLayer(body)
 *         ├── Cell[LGPM  100px] → TextLayer(body)
 *         └── Cell[Videos 180px]→ ThumbnailInstance × 3 (−8px overlap)
 */

import React from "react";
import { TopCreatorsTable } from "./components/row/TopCreatorsTable";
import { TableHeaderRow } from "./components/row/TableHeaderRow";
import { TableRowCreator, RowVariant } from "./components/row/TableRowCreator";
import { TopVideosTable }   from "./components/video-table/TopVideosTable";
import { TopVideosTableV2 } from "./components/video-table-v2/TopVideosTableV2";
import { TopLivesTable }    from "./components/live-table/TopLivesTable";

// ─── Variant strip data ───────────────────────────────────────────────────────
const VARIANT_DEMO: { variant: RowVariant; tag: string; bg: string; desc: string }[] = [
  { variant: "default",  tag: "Variant 1",  bg: "#111827", desc: "Default — fill #FFFFFF" },
  { variant: "hover",    tag: "Variant 2",  bg: "#6366F1", desc: "Hover — fill #F9FAFB" },
  { variant: "selected", tag: "Variant 3",  bg: "#22C55E", desc: "Selected — fill #F0FDF4 + green bar" },
];

const DEMO_ROW = {
  rank: 1,
  avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
  creatorName: "Sophie Anderson",
  handle: "@sophiebeauty",
  unitsSold: "12,480",
  gmv: "$248,600",
  date: "Jan 14, 2025",
  videoGPM: "$18.40",
  liveGPM: "$22.10",
  thumbnails: [
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=96",
    "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=96",
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=96",
  ] as [string, string, string],
};

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F3F4F6",
        padding: "48px 40px 80px",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        gap: 56,
      }}
    >

      {/* ── Section 1: Component anatomy label ───────────────────────── */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <SectionTitle
          title="TableRowCreator"
          badge="Component"
          badgeColor="#6366F1"
          note="Auto Layout horizontal · gap 16px · 7 cell slots · avatar + thumbnail instances"
        />

        {/* Annotated single row */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0, overflowX: "auto" }}>
          {/* Column width annotations */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              gap: 16,
              paddingLeft: 16,
              paddingRight: 16,
              paddingBottom: 4,
            }}
          >
            {[
              { w: 200, label: "Name" },
              { w: 100, label: "Units" },
              { w: 100, label: "GMV" },
              { w: 120, label: "Date" },
              { w: 100, label: "VideoGPM" },
              { w: 100, label: "LiveGPM" },
              { w: 180, label: "Videos" },
            ].map((c) => (
              <div
                key={c.label}
                style={{ width: c.w, minWidth: c.w, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 2 }}
              >
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 500, color: "#6366F1" }}>
                  {c.label}
                </span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 400, color: "#9CA3AF" }}>
                  {c.w}px
                </span>
              </div>
            ))}
          </div>

          {/* Single row preview */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 14,
              border: "1px solid rgba(0,0,0,0.10)",
              overflow: "hidden",
              width: 1210,
            }}
          >
            <TableHeaderRow />
            <TableRowCreator {...DEMO_ROW} showDivider={false} />
          </div>
        </div>
      </div>

      {/* ── Section 2: Variant strip ──────────────────────────────────── */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <SectionTitle
          title="Row Variants"
          badge="3 states"
          badgeColor="#F59E0B"
          note="default · hover · selected — controlled via variant prop or interactive"
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {VARIANT_DEMO.map(({ variant, tag, bg, desc }) => (
            <div key={variant} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#fff",
                    background: bg,
                    borderRadius: 6,
                    padding: "2px 8px",
                  }}
                >
                  {tag}
                </span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#6B7280" }}>{desc}</span>
              </div>
              <div
                style={{
                  background: "#FFFFFF",
                  borderRadius: 14,
                  border: "1px solid rgba(0,0,0,0.10)",
                  overflow: "hidden",
                  width: 1210,
                }}
              >
                <TableHeaderRow />
                <TableRowCreator {...DEMO_ROW} variant={variant} showDivider={false} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Section 3: 10 instances — live interactive table ─────────── */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <SectionTitle
          title="Top 10 GMV Creators"
          badge="10 instances"
          badgeColor="#22C55E"
          note="Hover rows → Variant 2 · Click rows → Variant 3 (toggle)"
        />
        <div style={{ overflowX: "auto" }}>
          <TopCreatorsTable />
        </div>
      </div>

      {/* ── Section 4: Top 10 GMV Related Videos (v1) ────────────────── */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <SectionTitle
          title="Top 10 GMV Related Videos"
          badge="10 instances"
          badgeColor="#F43F5E"
          note="Video cell: 80×60px thumbnail · title · duration · creator · Engagement Rate in #22C55E · row height 80px"
        />
        <div style={{ overflowX: "auto" }}>
          <TopVideosTable />
        </div>
      </div>

      {/* ── Section 5: Top 10 GMV Related Videos V2 ────────────────── */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <SectionTitle
          title="Top 10 GMV Related Videos"
          badge="8 columns · 1210px exact"
          badgeColor="#6366F1"
          note="Video 326px · Units 110px · GMV 110px · Views 100px · Likes 100px · EngRate 130px · Comments 90px · Published 100px"
        />
        <div style={{ overflowX: "auto" }}>
          <TopVideosTableV2 />
        </div>
      </div>

      {/* ── Section 6: Top 10 GMV Related Lives ──────────────────────── */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <SectionTitle
          title="Top 10 GMV Related Lives"
          badge="7 columns · 1210px exact"
          badgeColor="#EF4444"
          note="Live 362px · Units 110px · GMV 110px · Cum.Viewers 140px · Duration 130px · Peak 120px · Start 110px"
        />
        <div style={{ overflowX: "auto" }}>
          <TopLivesTable />
        </div>
      </div>

    </div>
  );
}

// ─── Section title ────────────────────────────────────────────────────────────
function SectionTitle({
  title,
  badge,
  badgeColor,
  note,
}: {
  title: string;
  badge: string;
  badgeColor: string;
  note: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 18,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        {title}
      </span>
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 11,
          fontWeight: 600,
          color: "#fff",
          background: badgeColor,
          borderRadius: 6,
          padding: "2px 8px",
        }}
      >
        {badge}
      </span>
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 12,
          fontWeight: 400,
          color: "#9CA3AF",
        }}
      >
        {note}
      </span>
    </div>
  );
}