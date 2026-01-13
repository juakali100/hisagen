import type { Metadata } from "next";
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
          <footer className="mx-auto mt-16 max-w-5xl border-t border-mist pt-6 text-xs text-slate">
            HISAGEN partnership dossier • Prepared by Pandion
          </footer>
        </main>
      </body>
    </html>
  );
}
