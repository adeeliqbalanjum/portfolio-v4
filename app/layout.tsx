import type { Metadata } from "next";
import "./globals.css";
import "./motion-fixes.css";
import "./conversion.css";

export const metadata: Metadata = {
  title: "Muhammad Adeel Iqbal — WordPress & Elementor Developer",
  description: "Portfolio for a WordPress and Elementor developer specializing in WooCommerce, bug fixing, redesign, speed optimization and maintenance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
