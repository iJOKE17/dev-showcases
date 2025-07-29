import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import {Header} from '@/components/ui/header';

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Showcase",
  description: "Discover, share, and explore side projects built by developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable}`}
      >
        <header className="header">
          <Header />
        </header>
        <main className="content">
        {children}
        </main>
      </body>
    </html>
  );
}
