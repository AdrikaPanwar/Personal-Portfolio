import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adrika Panwar - Backend Developer & Tech Enthuthiast💖",
  description:
    "Portfolio of Adrika Panwar, a passionate Backend Developer with a love for technology✨",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` text-gray-800 min-h-screen`}>{children}</body>
    </html>
  );
}
