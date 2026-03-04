/**
 * V2Cell — fixed-width container for a single column slot.
 * Aligns children either left (default) or center.
 */
import React from "react";

interface V2CellProps {
  width:   number;
  align?:  "left" | "center";
  children: React.ReactNode;
}

export function V2Cell({ width, align = "left", children }: V2CellProps) {
  return (
    <div
      style={{
        width:          width,
        minWidth:       width,
        maxWidth:       width,
        display:        "flex",
        alignItems:     "center",
        justifyContent: align === "center" ? "center" : "flex-start",
        overflow:       "hidden",
      }}
    >
      {children}
    </div>
  );
}
