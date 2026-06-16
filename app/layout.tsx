import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Adeel Iqbal — WordPress Developer",
  description: "Reference-style portfolio homepage for a WordPress Performance and WooCommerce Specialist.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
