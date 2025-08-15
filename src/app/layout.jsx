import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Alpha Developers",
  description: "The Alpha Developers",
  keywords: "The Alpha Developers",
  author: "The Alpha Developers",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thealphadevs.xyz",
    title: "The Alpha Developers",
    description: "The Alpha Developers",
    site_name: "The Alpha Developers",
    images: [
      {
        url: "https://thealphadevs.xyz/alpha.png",
        alt: "The Alpha Developers",
      },
    ],
    site_name: "The Alpha Developers",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
