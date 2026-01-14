import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import Nav from "../components/Nav";

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
      <body>
        <main className="min-h-screen px-6 py-10">
          <Nav />
          {children}
          <footer className="mx-auto mt-16 max-w-5xl border-t border-mist pt-6 text-xs text-slate flex items-center justify-between">
            <span>HISAGEN partnership dossier</span>
            <div className="flex items-center gap-2">
              <span>Prepared by</span>
              <Image
                src="/pandion-logo.png"
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
