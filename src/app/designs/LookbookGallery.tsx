"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  LazyMotion, domAnimation, m, useMotionValue, useReducedMotion,
  useScroll, useTransform, useSpring, useAnimationFrame, useInView, animate as animateValue, wrap,
} from "motion/react";
import type { MotionValue } from "motion/react";
import { withBasePath } from "@/config/paths";
import s from "./Lookbook.module.scss";

export type LookbookPhoto = {
  number: number;
  src: `/images/${string}`;
  caption: string;
  alt: string;
  width: number;
  height: number;
  previews: readonly { src: `/images/${string}`; width: number }[];
};
export type LookbookChapter = {
  id: string;
  title: string;
  description: string;
  photos: LookbookPhoto[];
};

const subscribeHydration = () => () => {};

function ChapterHeading({ chapter, index }: { chapter: LookbookChapter; index: number }) {
  return (
    <div className={s.chapterHeading}>
      <div><span className={s.chapterNumber}>Collection 0{index + 1} / 03</span><h3 id={`${chapter.id}-title`}>{chapter.title}</h3></div>
      <p>{chapter.description}</p>
    </div>
  );
}

function PhotoLink({ photo, sizes, scale, onFocus }: {
  photo: LookbookPhoto;
  sizes: string;
  scale?: MotionValue<number>;
  onFocus?: () => void;
}) {
  const fallback = photo.previews[photo.previews.length - 1];
  return (
    <a href={withBasePath(photo.src)} aria-label={`View full photograph: ${photo.alt}`} onFocus={onFocus}>
      <div className={s.imageMat}>
        <m.div className={s.imageSurface} style={scale ? { scale } : undefined}>
          <picture>
            <source type="image/webp" srcSet={photo.previews.map((preview) => `${withBasePath(preview.src)} ${preview.width}w`).join(", ")} sizes={sizes} />
            <Image src={withBasePath(fallback.src)} alt={photo.alt} width={photo.width} height={photo.height} sizes={sizes} unoptimized loading="lazy" />
          </picture>
        </m.div>
        <span className={s.viewOriginal}>View full photograph</span>
      </div>
    </a>
  );
}

function PhotoCaption({ photo, y }: { photo: LookbookPhoto; y?: MotionValue<number> }) {
  return <m.figcaption className={s.caption} style={y ? { y } : undefined}><span>{photo.caption}</span><span className={s.photoNumber}>{String(photo.number).padStart(2, "0")}</span></m.figcaption>;
}

type CarouselLayout = { enabled: boolean; widths: number[]; gap: number; gutter: number; cycle: number; height: number };

function CarouselPhoto({ photo, index, phase, layout, onFocus }: {
  photo: LookbookPhoto; index: number; phase: MotionValue<number>; layout: CarouselLayout; onFocus: () => void;
}) {
  const base = layout.widths.slice(0, index).reduce((sum, width) => sum + width + layout.gap, 0);
  const x = useTransform(phase, (value) => {
    const min = -(layout.widths[index] ?? 0) - layout.gap - layout.gutter;
    return layout.enabled ? wrap(min, min + layout.cycle, base + value) : 0;
  });
  return (
    <m.figure className={s.railPhoto} data-photo={photo.number} style={{ width: `calc(var(--rail-image-height) * ${Math.min(photo.width / photo.height, 1.3)})`, ...(layout.enabled ? { x } : {}) }}>
      <PhotoLink photo={photo} sizes="(min-width: 1024px) 65vw, (min-width: 640px) 45vw, 90vw" onFocus={onFocus} />
      <PhotoCaption photo={photo} />
    </m.figure>
  );
}

function TogetherGallery({ chapter, animate }: { chapter: LookbookChapter; animate: boolean }) {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const navigation = useRef<{ stop: () => void } | null>(null);
  const previousCycle = useRef(0);
  const [layout, setLayout] = useState<CarouselLayout>({ enabled: false, widths: [], gap: 0, gutter: 0, cycle: 0, height: 0 });
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const phase = useMotionValue(0);
  const inView = useInView(viewport, { amount: .15 });
  const progress = useTransform(phase, (value) => layout.cycle ? wrap(0, 1, -value / layout.cycle) : 0);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px) and (min-height: 620px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    const measure = () => {
      if (!track.current || !viewport.current) return;
      const cards = [...track.current.children] as HTMLElement[];
      const widths = cards.map((card) => card.offsetWidth);
      const gap = parseFloat(getComputedStyle(track.current).columnGap) || 0;
      const gutter = parseFloat(getComputedStyle(track.current).paddingLeft) || 0;
      const cycle = widths.reduce((sum, width) => sum + width + gap, 0);
      // A photograph wraps only after leaving the viewport completely.
      const enabled = animate && query.matches && cycle - Math.max(...widths) - gap > viewport.current.clientWidth;
      const height = Math.max(...cards.map((card) => card.offsetHeight));
      if (Math.abs(previousCycle.current - cycle) > 1) { navigation.current?.stop(); phase.set(0); previousCycle.current = cycle; }
      const next = { enabled, widths, gap, gutter, cycle, height };
      setLayout((previous) => previous.enabled === enabled && previous.cycle === cycle && previous.gutter === gutter && previous.height === height && previous.widths.every((width, index) => width === widths[index]) ? previous : next);
    };
    const schedule = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(measure); };
    const observer = new ResizeObserver(schedule);
    if (viewport.current) observer.observe(viewport.current);
    if (track.current) { observer.observe(track.current); [...track.current.children].forEach((card) => observer.observe(card)); }
    query.addEventListener("change", schedule);
    window.addEventListener("resize", schedule);
    schedule();
    return () => { cancelAnimationFrame(frame); observer.disconnect(); query.removeEventListener("change", schedule); window.removeEventListener("resize", schedule); };
  }, [animate, phase]);
  useEffect(() => () => navigation.current?.stop(), []);

  useAnimationFrame((_, delta) => {
    if (!layout.enabled || !inView || paused || hovered || focused || document.hidden) return;
    // 24 pixels/second, independent of frame rate. No React updates on each frame.
    phase.set(wrap(-layout.cycle, 0, phase.get() - Math.min(delta, 64) * .024));
  });

  const offsets = () => layout.widths.map((_, index) => layout.widths.slice(0, index).reduce((sum, width) => sum + width + layout.gap, 0));
  const focusPhoto = (index: number) => {
    if (!layout.enabled) return;
    navigation.current?.stop();
    requestAnimationFrame(() => { if (viewport.current) viewport.current.scrollLeft = 0; phase.set(-(offsets()[index] ?? 0)); });
  };
  const step = (direction: number) => {
    setPaused(true);
    navigation.current?.stop();
    const positions = offsets();
    const current = wrap(0, layout.cycle, -phase.get());
    phase.set(-current);
    let target: number;
    if (direction > 0) target = -(positions.find((offset) => offset > current + 2) ?? layout.cycle);
    else target = -([...positions].reverse().find((offset) => offset < current - 2) ?? positions[positions.length - 1] - layout.cycle);
    navigation.current = animateValue(phase, target, { duration: .65, ease: [.22, 1, .36, 1] });
  };
  const togglePlayback = () => { navigation.current?.stop(); setPaused((value) => !value); setFocused(false); };

  return (
    <section id={chapter.id} className={s.railScene} data-carousel={layout.enabled} aria-labelledby={`${chapter.id}-title`} onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
      <div className={s.carouselStage}>
        <div className={s.railHeading}><ChapterHeading chapter={chapter} index={0} /><div className={s.railInstructions}><span>{layout.enabled ? (paused ? "Carousel paused / 06 photographs" : "Slowly moving / 06 photographs") : "06 photographs / A shared sense of occasion"}</span><a href="#finishing-touches">Continue to The finishing touch</a></div></div>
        <div ref={viewport} className={s.railViewport} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <div ref={track} className={s.railTrack} style={layout.enabled ? { height: layout.height } : undefined}>
            {chapter.photos.map((photo, index) => <CarouselPhoto photo={photo} index={index} phase={phase} layout={layout} onFocus={() => focusPhoto(index)} key={photo.number} />)}
          </div>
        </div>
        <div className={s.railFooter}>
          {layout.enabled ? <><div className={s.progress} aria-hidden="true"><m.span style={{ scaleX: progress }} /></div><div className={s.railButtons}><button type="button" onClick={togglePlayback} aria-label={paused ? "Play automatic photo carousel" : "Pause automatic photo carousel"}>{paused ? "Play" : "Pause"}</button><button type="button" onClick={() => step(-1)} aria-label="Previous photograph in Beautiful together">Previous</button><button type="button" onClick={() => step(1)} aria-label="Next photograph in Beautiful together">Next</button></div></> : <span>Each photograph opens its full-size original.</span>}
        </div>
      </div>
    </section>
  );
}

function RevealPhoto({ photo, index, animate, editorial }: { photo: LookbookPhoto; index: number; animate: boolean; editorial: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.98", "start 0.48"] });
  const { scrollYProgress: floatProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const stagger = (index % 3) * .055;
  const revealY = useTransform(scrollYProgress, [stagger, .84 + stagger], [editorial ? 26 : 18, 0]);
  // Alternate the drift between neighbours, keeping the garments fully visible.
  const direction = index % 2 === 0 ? 1 : -1;
  const drift = useTransform(floatProgress, [0, 1], [12 * direction, -12 * direction]);
  const floatingY = useTransform(() => revealY.get() + drift.get());
  const y = useSpring(floatingY, { stiffness: 75, damping: 26, mass: .8 });
  // Content is always readable, even before a reveal or if JavaScript is unavailable.
  const opacity = useTransform(scrollYProgress, [stagger, .84 + stagger], [.65, 1]);
  const scale = useTransform(scrollYProgress, [stagger, .84 + stagger], [.975, 1]);
  const captionY = useTransform(scrollYProgress, [stagger + .04, Math.min(.94 + stagger, 1)], [6, 0]);
  return (
    <m.figure ref={ref} data-photo={photo.number} className={s.revealPhoto} style={animate ? { opacity, y } : undefined}>
      <PhotoLink photo={photo} sizes={editorial ? "(min-width: 1024px) 65vw, (min-width: 640px) 45vw, 90vw" : "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"} scale={animate ? scale : undefined} />
      <PhotoCaption photo={photo} y={animate ? captionY : undefined} />
    </m.figure>
  );
}

function RevealChapter({ chapter, index, animate, editorial = false }: { chapter: LookbookChapter; index: number; animate: boolean; editorial?: boolean }) {
  return (
    <section id={chapter.id} className={`${s.revealChapter} ${editorial ? s.editorialChapter : s.masonryChapter}`} aria-labelledby={`${chapter.id}-title`}>
      <ChapterHeading chapter={chapter} index={index} />
      <div className={editorial ? s.editorialGrid : s.masonryGrid}>
        {chapter.photos.map((photo, photoIndex) => <RevealPhoto photo={photo} index={photoIndex} animate={animate} editorial={editorial} key={photo.number} />)}
      </div>
      <div className={s.chapterEnd}><span>0{index + 1} / 03</span><span>{chapter.photos.length} photographs. A personal point of view.</span></div>
    </section>
  );
}

export function LookbookGalleries({ chapters }: { chapters: LookbookChapter[] }) {
  const hydrated = useSyncExternalStore(subscribeHydration, () => true, () => false);
  const reducedMotion = useReducedMotion();
  const animate = hydrated && reducedMotion === false;
  return (
    <LazyMotion features={domAnimation} strict>
      <div className={s.lookbook} data-motion={animate ? "enabled" : "static"}>
        <TogetherGallery chapter={chapters[0]} animate={animate} />
        <RevealChapter chapter={chapters[1]} index={1} animate={animate} />
        <RevealChapter chapter={chapters[2]} index={2} animate={animate} editorial />
      </div>
    </LazyMotion>
  );
}
