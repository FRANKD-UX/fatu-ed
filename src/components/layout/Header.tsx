import Link from "next/link";
import { Navigation } from "@/components/navigation/Navigation";
import styles from "./Layout.module.scss";
export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.wordmark} aria-label="FATU.E.D home">
          FATU<span>.</span>E.D<small>CREATIVITY. PURPOSE. POSSIBILITY.</small>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
