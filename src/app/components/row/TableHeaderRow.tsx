import { Cell } from "./Cell";
import { TextLayer } from "./TextLayer";
import { COL as COLS } from "./TableRowCreator";

const HEADERS: { label: string; width: number }[] = [
  { label: "Creator Name",       width: COLS.name     },
  { label: "Units Sold",         width: COLS.units    },
  { label: "GMV",                width: COLS.gmv      },
  { label: "Date / TTP",         width: COLS.date     },
  { label: "Video GPM",          width: COLS.videoGPM },
  { label: "LIVE GPM",           width: COLS.liveGPM  },
  { label: "Highest GMV Videos", width: COLS.videos   },
];

/**
 * TableHeaderRow
 * ──────────────
 * Auto Layout horizontal, gap 16px (mirrors TableRowCreator gap).
 * Fill #F9FAFB, padding 12px 16px.
 * TextLayer header variant: Inter 14px SemiBold #111827.
 */
export function TableHeaderRow() {
  return (
    <div
      role="rowheader"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 12,
        paddingBottom: 12,
        background: "#F9FAFB",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      {HEADERS.map((h) => (
        <Cell key={h.label} width={h.width}>
          <TextLayer variant="header">{h.label}</TextLayer>
        </Cell>
      ))}
    </div>
  );
}