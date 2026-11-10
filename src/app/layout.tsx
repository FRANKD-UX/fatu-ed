import type { Metadata } from "next";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteUrl } from "@/config/site";
import "@/styles/globals.scss";
export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "FATU.E.D | Your Vision. Our Creativity. Your Future.",
    template: "%s | FATU.E.D",
  },
  description:
    "A South African enterprise bringing together General Trading, Fashion & Design, and a vision for Empowerment & Development.",
  applicationName: "FATU.E.D",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
