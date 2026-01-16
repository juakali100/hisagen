import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import NavEnhanced from "../components/NavEnhanced";

export const metadata: Metadata = {
  title: "HISAGEN Portal",
  description: "Client-facing partnership portal for HISAGEN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-parchment text-ink font-sans antialiased selection:bg-accent/30 selection:text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-secondary focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2"
        >
          Skip to content
        </a>
        <main id="main" className="min-h-screen px-6 py-10">
          <NavEnhanced />
          {children}
          <footer className="mx-auto mt-16 max-w-5xl border-t border-mist pt-6 text-xs text-slate flex items-center justify-between">
            <span>HISAGEN partnership dossier</span>
            <div className="flex items-center gap-2">
              <span>Prepared by</span>
              <Image
                src="/logos/pandion-logo.png"
                alt="Pandion Studio"
                width={20}
                height={20}
                className="inline-block"
              />
              <span className="font-medium">Pandion Studio</span>
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}
