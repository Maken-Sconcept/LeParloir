import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M Parloir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
