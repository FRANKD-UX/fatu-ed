import Image from "next/image";
import { withBasePath } from "@/config/paths";
import s from "./DivisionLogo.module.scss";

const logos = {
  trading: {
    src: "/images/branding/general-trading-logo.png",
    alt: "FATU.E.D General Trading — Delivery in your time",
    width: 1536,
    height: 1024,
  },
  designs: {
    src: "/images/branding/designs-logo.jpeg",
    alt: "FATU.E.D Designs logo with blue hands, gold lettering and contact details",
    width: 1254,
    height: 1254,
  },
  academy: {
    src: "/images/academy/fatima-fashion-workshop.webp",
    alt: "FATU.E.D founder Fatima Mugaro in a fashion design workshop, with the FATU.E.D General Trading logo displayed above her.",
    width: 1086,
    height: 1448,
  },
} as const;

export function DivisionLogo({
  division,
  variant = "page",
}: {
  division: keyof typeof logos;
  variant?: "page" | "card" | "identity";
}) {
  const logo = logos[division];
  return (
    <Image
      className={`${s.logo} ${s[variant]} ${s[division]}`}
      src={withBasePath(logo.src)}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      sizes={variant === "identity" ? "176px" : variant === "card" ? "(max-width: 359px) 75vw, 280px" : division === "trading" ? "(max-width: 639px) 90vw, 560px" : "(max-width: 359px) 85vw, 320px"}
    />
  );
}
