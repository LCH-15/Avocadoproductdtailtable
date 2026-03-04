import React from "react";
import { Cell } from "../row/Cell";
import { TextLayer } from "../row/TextLayer";
import { VIDEO_COL } from "./VideoTableRow";

const HEADERS: { label: string; width: number }[] = [
  { label: "Video",           width: VIDEO_COL.video          },
  { label: "Views",           width: VIDEO_COL.views          },
  { label: "Likes",           width: VIDEO_COL.likes          },
  { label: "Engagement Rate", width: VIDEO_COL.engagementRate },
  { label: "Comments",        width: VIDEO_COL.comments       },
  { label: "GMV",             width: VIDEO_COL.gmv            },
];

/**
 * VideoTableHeader
 * ─────────────────
 * Auto Layout horizontal · gap 16px · fill #F9FAFB
 * TextLayer header: Inter 14px SemiBold #111827
 */
export function VideoTableHeader() {
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
