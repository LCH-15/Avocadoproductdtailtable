import React from "react";

export interface MetricCellProps {
  value: string;
  width: number;
  /** GMV values use Inter 12px SemiBold #111827 */
  emphasis?: boolean;
}

export function MetricCell({ value, width, emphasis = false }: MetricCellProps) {
  return (
    <div
      style={{
        flex: `0 0 ${width}px`,
        fontFamily: "'Inter', sans-serif",
        fontSize: 12,
        fontWeight: emphasis ? 600 : 400,
        color: emphasis ? "#111827" : "#374151",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      {value}
    </div>
  );
}
