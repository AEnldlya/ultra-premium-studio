import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navigation } from "@/components/Navigation";
import { PageTransition } from "@/components/PageTransition";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio Aureum | Premium Digital Experiences",
  description: "We craft cinematic digital experiences that elevate brands and captivate audiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-void text-platinum antialiased overflow-x-hidden">
        <SmoothScroll>
          <Navigation />
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
