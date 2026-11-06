import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reduan Ahmed | Web Developer",
  description: "Portfolio of Reduan Ahmed, a junior web developer from Sylhet, Bangladesh.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
