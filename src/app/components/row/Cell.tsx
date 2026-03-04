import React from "react";

export interface CellProps {
  /** Fixed pixel width for this cell */
  width: number;
  /** Horizontal alignment of content inside the cell */
  align?: "left" | "center" | "right";
  children: React.ReactNode;
}

/**
 * Cell — Auto Layout container for a single column slot.
 * Fixed width, center-vertical, horizontal padding 0 (gap handled by row).
 */
export function Cell({ width, align = "left", children }: CellProps) {
  const justifyMap = { left: "flex-start", center: "center", right: "flex-end" } as const;
  return (
    <div
      style={{
        // Auto Layout — horizontal, center-vertical, fixed width
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: justifyMap[align],
        width,
        minWidth: width,
        maxWidth: width,
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
}
