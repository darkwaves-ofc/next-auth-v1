import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Auth v1 – Authentication Service Example with Next.js",
  description:
    "Next Auth v1 is a robust authentication example built with Next.js and NextAuth.js, showcasing secure user login, session management, and OAuth integration. Created by Dark Waves.",
  openGraph: {
    title: "Next Auth v1 – Authentication Service Example with Next.js",
    description:
      "Explore Next Auth v1, a powerful authentication solution example built with Next.js and NextAuth.js. Perfect for modern web apps.",
    url: "https://github.com/darkwaves-ofc/next-auth-v1",
    siteName: "Next Auth v1",
    images: [
      {
        url: "/next-auth-banner.png", // Replace with the actual banner image URL
        width: 1200,
        height: 630,
        alt: "Next Auth v1 Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Auth v1 – Authentication Service Example with Next.js",
    description:
      "Discover Next Auth v1, a modern Next.js authentication example featuring secure login and OAuth integration.",
    images: ["/next-auth-banner.png"], // Replace with the actual image URL
  },
};


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <Toaster />
          {children}
        </body>
    </html>
  );
}
