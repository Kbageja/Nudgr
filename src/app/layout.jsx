import { Afacad, Akatab } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import * as gtag from "../lib/gtag"; // Adjust path if needed
import Analytics from "../components/Analytics"; // We will create this file

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const akatab = Akatab({
  variable: "--font-akatab",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  title: "Nudgr - Smart Task Management",
  description: "Nudgr helps you assign, track, and analyze tasks efficiently. Made by KB.",
  openGraph: {
    title: "Nudgr - Smart Task Management",
    description: "Assign, track, and ensure timely task completion with Nudgr.",
    url: "https://nudgr.vercel.app/",
    siteName: "Nudgr",
    images: [
      {
        url: "https://yourwebsite.com/og-image.png", // Replace this URL
        width: 1200,
        height: 630,
        alt: "Nudgr - Smart Task Management",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nudgr - Smart Task Management",
    description: "Assign, track, and analyze tasks efficiently with Nudgr.",
    images: ["https://yourwebsite.com/og-image.png"], // Replace this URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${afacad.variable} ${akatab.variable} antialiased`}>
        {/* Google Analytics Scripts */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Analytics Route Tracker */}
        <Analytics />

        {children}
      </body>
    </html>
  );
}
