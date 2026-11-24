import Image from "next/image";
import { withBasePath } from "@/config/paths";
import s from "./AcademyMedia.module.scss";

export function AcademyPortrait() {
  return (
    <Image
      src={withBasePath("/images/academy/fatima-fashion-workshop.webp")}
      alt="FATU.E.D founder Fatima Mugaro in a fashion design workshop, with the FATU.E.D General Trading logo displayed above her."
      width={1086}
      height={1448}
      sizes="(max-width: 528px) calc(100vw - 48px), 480px"
      loading="lazy"
      className={s.portrait}
    />
  );
}

export function AcademySettings() {
  return (
    <div className={s.settings}>
      <section aria-labelledby="classroom-title">
        <h3 id="classroom-title">Proposed classroom</h3>
        <div className={s.panel}>
          <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            <rect x="18" y="16" width="84" height="46" rx="3" />
            <path d="M30 30h32M30 41h50M60 62v12M44 74h32M16 88h32v12H16zM72 88h32v12H72zM21 100v10M43 100v10M77 100v10M99 100v10" />
          </svg>
          <p>A future space for practical learning. No existing academy facility is represented.</p>
        </div>
      </section>
      <section aria-labelledby="training-space-title">
        <h3 id="training-space-title">Practical training space</h3>
        <div className={s.panel}>
          <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            <path d="M18 91h84v10H18zM27 91V42h19v20h35V42h14v49M27 42V31h68v11M46 62v16h35V62M35 31v-9h13v9M87 42v24M83 76h12M17 101v9M103 101v9" />
            <circle cx="62" cy="44" r="5" />
          </svg>
          <p>A future setting for sewing and garment-making. No current classes or training facilities are represented.</p>
        </div>
      </section>
    </div>
  );
}
