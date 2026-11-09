"use client";

import Image from "next/image";
import { useState } from "react";
import { withBasePath } from "@/config/paths";
import type { GalleryImage } from "./Gallery";
import s from "./Gallery.module.scss";

// Only individual photographs need client state; grouping and the empty state
// remain server-rendered. Full images use normal links rather than a modal.
export function GalleryPhoto({ image }: { image: GalleryImage }) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={s.photo}>
      {failed ? (
        <div className={s.unavailable}>
          <strong>Photograph unavailable</strong>
          <p>{image.alt}</p>
        </div>
      ) : (
        <a
          href={withBasePath(image.src)}
          className={s.photoLink}
          aria-label={`View full photograph: ${image.alt}`}
        >
          <div className={s.frame}>
            <Image
              src={withBasePath(image.src)}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 1288px) calc((100vw - 72px) / 2), 608px"
              loading="lazy"
              onError={() => setFailed(true)}
            />
          </div>
          <span className={s.photoAction}>View full photograph</span>
        </a>
      )}
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  );
}
