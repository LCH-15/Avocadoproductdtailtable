import React from "react";

export type TextVariant =
  | "body"       // 12px Regular #374151
  | "label"      // 12px Medium  #111827
  | "gmv"        // 12px SemiBold #111827
  | "sub"        // 11px Regular #9CA3AF
  | "header";    // 14px SemiBold #111827

const VARIANT_STYLES: Record<TextVariant, React.CSSProperties> = {
  body:   { fontSize: 12, fontWeight: 400, color: "#374151" },
  label:  { fontSize: 12, fontWeight: 500, color: "#111827" },
  gmv:    { fontSize: 12, fontWeight: 600, color: "#111827" },
  sub:    { fontSize: 11, fontWeight: 400, color: "#9CA3AF" },
  header: { fontSize: 14, fontWeight: 600, color: "#111827" },
};

export interface TextLayerProps {
  children: React.ReactNode;
  variant?: TextVariant;
  /** Truncate with ellipsis when content overflows */
  truncate?: boolean;
  style?: React.CSSProperties;
}

/**
 * TextLayer — atomic text slot.
 * Width is "auto" (hugs content) by default; truncate collapses it.
 */
export function TextLayer({ children, variant = "body", truncate = false, style }: TextLayerProps) {
  return (
    <span
      style={{
        fontFamily: "'Inter', sans-serif",
        ...VARIANT_STYLES[variant],
        whiteSpace: truncate ? "nowrap" : "nowrap",
        overflow: truncate ? "hidden" : "visible",
        textOverflow: truncate ? "ellipsis" : "clip",
        display: "block",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
