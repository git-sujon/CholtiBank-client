import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/lib/Providers";
import Header from "@/components/Layout/Header/Header";

export const metadata: Metadata = {
  title: "CholtiBank",
  description: "Bangladesh's first digital bank experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers> {children}</Providers>
      </body>
    </html>
  );
}
