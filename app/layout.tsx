import type { Metadata } from "next";
import { Geist, Geist_Mono, Jersey_15_Charted } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jersey_Charted = Jersey_15_Charted({
  variable: '--font-jersey-15-charted',
  weight: "400",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Agents of Akash",
  description: "Join Akash Network’s Pioneer Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <link href="https://fonts.cdnfonts.com/css/beyonders" rel="stylesheet" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jersey_Charted.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
