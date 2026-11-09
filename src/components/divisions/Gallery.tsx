import { GalleryPhoto } from "./GalleryPhoto";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
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
  placeholders = [],
}: {
  images: readonly GalleryImage[];
  emptyTitle: string;
  emptyDescription: string;
  placeholders?: readonly { label: string; context?: string }[];
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

  if (!groups.size && !placeholders.length) {
    return (
      <div className={s.empty}>
        <strong>{emptyTitle}</strong>
        <p>{emptyDescription}</p>
      </div>
    );
  }

  const categories = [
    ...new Set([...placeholders.map((item) => item.label), ...groups.keys()]),
  ];
  return (
    <div className={`${s.groups} ${placeholders.length ? s.categoryGroups : ""}`}>
      {categories.map((category) => (
        <section key={category} aria-label={category} className={s.group}>
          <h3>{category}</h3>
          {groups.has(category) ? (
            <div className={s.gallery}>
              {groups.get(category)!.map((photo) => (
                <GalleryPhoto key={photo.src} image={photo} />
              ))}
            </div>
          ) : (
            <MediaPlaceholder
              label={category}
              context={placeholders.find((item) => item.label === category)?.context}
            />
          )}
        </section>
      ))}
    </div>
  );
}
