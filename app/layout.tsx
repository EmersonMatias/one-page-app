import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import SessionProviders from "@/components/providers/session-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "One Page",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <SessionProviders>{children}</SessionProviders>
      </body>
    </html>
  );
}
