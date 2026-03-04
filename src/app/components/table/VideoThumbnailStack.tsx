import { Play } from "lucide-react";

export interface VideoThumbnailStackProps {
  thumbnails: [string, string, string];
}

/**
 * 3 overlapping video thumbnails — 48×36px, rounded 8px, -8px overlap, 20px white play icon.
 */
export function VideoThumbnailStack({ thumbnails }: VideoThumbnailStackProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", position: "relative", height: 36 }}>
      {thumbnails.map((src, i) => (
        <div
          key={i}
          style={{
            position: "relative",
            width: 48,
            height: 36,
            borderRadius: 8,
            overflow: "hidden",
            flexShrink: 0,
            marginLeft: i === 0 ? 0 : -8,
            border: "1.5px solid #FFFFFF",
            boxSizing: "border-box",
            zIndex: thumbnails.length - i,
          }}
        >
          {/* Thumbnail */}
          <img
            src={src}
            alt={`video ${i + 1}`}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          {/* Scrim */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.32)",
            }}
          />
          {/* Play icon — 20px white, centered */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Play
              size={11}
              fill="#FFFFFF"
              stroke="none"
              style={{ marginLeft: 1 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
