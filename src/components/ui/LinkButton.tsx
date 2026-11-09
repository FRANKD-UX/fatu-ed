import Link from "next/link";
import styles from "./ui.module.scss";
export function LinkButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  className?: string;
}) {
  return (
    <Link
      className={`${styles.button} ${styles[variant]} ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
}
