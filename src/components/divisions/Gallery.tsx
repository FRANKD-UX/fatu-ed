import { GalleryPhoto } from "./GalleryPhoto";
import s from "./Gallery.module.scss";

export type GalleryImage = Readonly<{
  src: `/images/${string}`;
  alt: string;
  width: number;
  height: number;
  category: string;
  caption?: string;
}>;

export function Gallery({
  images,
  emptyTitle,
  emptyDescription,
}: {
  images: readonly GalleryImage[];
  emptyTitle: string;
  emptyDescription: string;
}) {
  const groups = new Map<string, GalleryImage[]>();
  for (const image of images) {
    // Incomplete records must not become broken or inaccessible portfolio entries.
    if (
      !image.src.startsWith("/images/") ||
      !image.alt.trim() ||
      !image.category.trim() ||
      !Number.isFinite(image.width) ||
      image.width <= 0 ||
      !Number.isFinite(image.height) ||
      image.height <= 0
    )
      continue;
    const category = image.category.trim();
    const group = groups.get(category) ?? [];
    group.push(image);
    groups.set(category, group);
  }

  if (!groups.size) {
    return (
      <div className={s.empty}>
        <strong>{emptyTitle}</strong>
        <p>{emptyDescription}</p>
      </div>
    );
  }

  return (
    <div className={s.groups}>
      {Array.from(groups, ([category, photos]) => (
        <section key={category} aria-label={category} className={s.group}>
          <h3>{category}</h3>
          <div className={s.gallery}>
            {photos.map((photo) => (
              <GalleryPhoto key={photo.src} image={photo} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
