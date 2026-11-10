import Link from "next/link";
import { Navigation } from "@/components/navigation/Navigation";
import { FashionMark } from "./FashionMark";
import styles from "./Layout.module.scss";
export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerFabric} aria-hidden="true" />
      <div className={styles.headerInner}>
        <Link href="/" className={styles.headerWordmark} aria-label="FATU.E.D home">
          <FashionMark className={styles.fashionMark} />
          <span className={styles.headerBrand}>
            <span className={styles.headerName}>FATU<span>.</span>E<span>.</span>D</span>
            <small>CREATIVITY. PURPOSE. POSSIBILITY.</small>
            <span className={styles.brandFlourish} aria-hidden="true" />
          </span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
