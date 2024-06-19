import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://siemba.works"),
  alternates: {
    canonical: "https://siemba.works",
  },
  title: "Simba Mahlaulo",
  description:
    "Simba Mahlaulo is a Front-End Software Engineer, founder, and Quality nerd.",
  keywords:
    "Simba Mahlaulo, Front-end Engineer, Project Leader, Web Development, Web3, Decentralized Applications, Quality Assurance, Software Engineering, Blockchain, Cryptography",
  openGraph: {
    locale: "en_US",
    siteName: "Simba Mahlaulo",
    type: "website",
    title: "Simba Mahlaulo",
    description:
      "Simba Mahlaulo is a Front-End Software Engineer, founder, and Quality nerd.",
    url: "https://siemba.works",
    images: [
      {
        url: "./og-large-meik.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simba Mahlaulo",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
