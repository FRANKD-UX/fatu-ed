import Link from "next/link";
import { site } from "@/config/site";
import { navigation } from "@/content/navigation";
import styles from "./Layout.module.scss";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div>
          <Link href="/" className={styles.wordmark}>
            FATU<span>.</span>E.D
          </Link>
          <p>{site.tagline}</p>
          <p className={styles.muted}>
            Rooted in experience.
            <br />
            Growing through possibility.
          </p>
        </div>
        <div>
          <h2>Explore</h2>
          {navigation.slice(1).map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </div>
        <div>
          <h2>Get in touch</h2>
          <a href={site.contact.telephone}>{site.contact.phone}</a>
          <a href={site.contact.emailUri}>{site.contact.email}</a>
          <a href={site.contact.whatsapp}>WhatsApp us</a>
          <p>
            {site.contact.location}
            <br />
            Hours: {site.contact.hours}
          </p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <span>© {new Date().getFullYear()} FATU.E.D. All rights reserved.</span>
        <span>Registration no. {site.registration}</span>
        <span>Made with purpose in South Africa.</span>
      </div>
    </footer>
  );
}
