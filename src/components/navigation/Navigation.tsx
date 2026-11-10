"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/content/navigation";
import { FashionMark } from "@/components/layout/FashionMark";
import styles from "./Navigation.module.scss";
// Keep the footer's source order while giving fashion prominence in the header.
const headerNavigation = [navigation[0], navigation[3], navigation[1], navigation[2], navigation[4], navigation[5]];
export function Navigation() {
  const pathname = usePathname().replace(/\/+$/, "") || "/";
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (
        !menu.current?.contains(event.target as Node) &&
        !toggle.current?.contains(event.target as Node)
      )
        setOpen(false);
    };
    const resize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        if (document.activeElement === toggle.current)
          menu.current?.querySelector<HTMLElement>('[aria-current="page"]')?.focus();
        setOpen(false);
      }
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    window.addEventListener("resize", resize);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
      window.removeEventListener("resize", resize);
    };
  }, [open]);
  return (
    <>
      <button
        type="button"
        ref={toggle}
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}{" "}
        <span className={`${styles.menuIcon} ${open ? styles.menuIconOpen : ""}`} aria-hidden="true"><span /><span /><span /></span>
      </button>
      <nav
        ref={menu}
        id="primary-navigation"
        aria-label="Main navigation"
        className={`${styles.nav} ${open ? styles.open : ""}`}
        onBlur={(event) => {
          if (
            !event.currentTarget.contains(event.relatedTarget) &&
            event.relatedTarget !== toggle.current
          )
            setOpen(false);
        }}
      >
        {headerNavigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
            onClick={() => {
              if (pathname === item.href) toggle.current?.focus();
              setOpen(false);
            }}
          >
            {item.label}
          </Link>
        ))}
        <Link href="/contact?topic=designs#enquiry" className={styles.designCta} onClick={() => setOpen(false)}>
          <FashionMark />
          Request a Design
          <span className={styles.ctaArrow} aria-hidden="true" />
        </Link>
      </nav>
    </>
  );
}
