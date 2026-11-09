import type { ReactNode } from "react";
import { LinkButton } from "@/components/ui/LinkButton";
import { site, whatsappEnquiry } from "@/config/site";
import s from "./Pages.module.scss";
export function PageHero({
  eyebrow,
  title,
  children,
  tone = "navy",
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  tone?: "navy" | "blue" | "warm";
}) {
  return (
    <section className={`${s.hero} ${s[tone]}`}>
      <div className={s.container}>
        <span className={s.eyebrow}>{eyebrow}</span>
        <h1>{title}</h1>
        <div className={s.intro}>{children}</div>
      </div>
    </section>
  );
}
export function ContentSection({
  label,
  title,
  children,
  id,
  wide = false,
}: {
  label?: string;
  title: string;
  children: ReactNode;
  id?: string;
  wide?: boolean;
}) {
  return (
    <section id={id} className={`${s.section} ${wide ? s.wide : ""}`}>
      <div>
        {label && <span className={s.eyebrow}>{label}</span>}
        <h2>{title}</h2>
      </div>
      <div className={s.prose}>{children}</div>
    </section>
  );
}
export function ContactBand({
  title = "Let’s start a conversation",
  text = "Tell us what you have in mind. We would love to hear from you.",
  primaryLabel = "WhatsApp Us",
  whatsappMessage,
}: {
  title?: string;
  text?: string;
  primaryLabel?: string;
  whatsappMessage?: string;
}) {
  return (
    <section className={s.contactBand}>
      <div className={s.container}>
        <div>
          <span className={s.eyebrow}>Your next step</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className={s.actions}>
          <LinkButton
            href={
              whatsappMessage
                ? whatsappEnquiry(whatsappMessage)
                : site.contact.whatsapp
            }
          >
            {primaryLabel}
          </LinkButton>
          <LinkButton href="/contact" variant="secondary">
            Contact Us
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
