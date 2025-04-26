import { Afacad, Akatab } from "next/font/google";
import "./globals.css";

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Import Akatab
const akatab = Akatab({
  variable: "--font-akatab",
  subsets: ["latin"],
  weight: ["400"], // Or whatever weight you want
  display: "swap",
});


export const metadata = {
  title: "Nudgr - Smart Task Management",
  description: "Nudgr helps you assign, track, and analyze tasks efficiently. Made by KB.",
  openGraph: {
    title: "Nudgr - Smart Task Management",
    description: "Assign, track, and ensure timely task completion with Nudgr.",
    url: "https://nudgr.vercel.app/", // replace with your deployed domain
    siteName: "Nudgr",
    images: [
      {
        url: "https://yourwebsite.com/og-image.png", // put your OG image URL here
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
    images: ["https://yourwebsite.com/og-image.png"], // same OG image
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body className={`${afacad.variable} ${akatab.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
