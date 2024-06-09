import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./font-face.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A piece of AI",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
