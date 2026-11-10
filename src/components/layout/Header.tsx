import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/navigation/Navigation";
import { withBasePath } from "@/config/paths";
import styles from "./Layout.module.scss";
export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerFabric} aria-hidden="true" />
      <div className={styles.headerInner}>
        <Link href="/" className={styles.headerWordmark} aria-label="FATU.E.D home">
          <Image
            className={styles.headerEmblem}
            src={withBasePath("/images/branding/general-trading-emblem.png")}
            alt=""
            width={288}
            height={240}
            preload
            unoptimized
          />
          <span className={styles.headerBrand}>
            <span className={styles.headerName}>FATU.E.D</span>
            <small>GENERAL TRADING</small>
          </span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
