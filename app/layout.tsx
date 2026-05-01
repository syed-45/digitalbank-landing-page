import type { Metadata } from "next";
import { Public_Sans } from "next/font/google"; 
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digitalbank",
  description: "Landing page for Digitalbank, Frontend Mentor challenge",
};  


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} h-full antialiased`}
    >
      <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png"></link>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
