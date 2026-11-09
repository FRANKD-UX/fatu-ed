import type { CSSProperties } from "react";
import s from "./MediaPlaceholder.module.scss";

export function MediaPlaceholder({
  label,
  aspectRatio = "4 / 5",
  context = "Approved photograph to follow.",
}: {
  label: string;
  aspectRatio?: "4 / 5" | "3 / 2" | "16 / 9";
  context?: string;
}) {
  return (
    <figure className={s.placeholder} style={{ "--media-ratio": aspectRatio } as CSSProperties}>
      <span className={s.marker}>Image placeholder</span>
      <figcaption>
        <strong>{label}</strong>
        <span>{context}</span>
      </figcaption>
    </figure>
  );
}
