import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SiteScripts } from "@/components/SiteScripts";
import { plusJakartaSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kaya Holding",
    template: "%s | Kaya Holding",
  },
  icons: {
    icon: [{ url: "/favicon.jpg", type: "image/jpeg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={plusJakartaSans.variable}
      suppressHydrationWarning
    >
      <body className={plusJakartaSans.className} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <SiteScripts />
      </body>
    </html>
  );
}
