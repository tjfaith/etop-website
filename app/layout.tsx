import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";



const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-top",
  description: "Making payments easier",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
