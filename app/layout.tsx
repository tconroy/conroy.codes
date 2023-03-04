import "./global.css";
import clsx from "clsx";
import type { Metadata } from "next";
// import AnalyticsWrapper from "../components/analytics";
import { Montserrat, Merriweather } from "@next/font/google";
import Navbar from "components/navbar";
import PlausibleProvider from "next-plausible";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-merriweather",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const description = "Thoughts on software, technology and the web";

export const metadata: Metadata = {
  title: {
    default: "Tom Conroy",
    template: "%s | Tom Conroy",
  },
  description,
  openGraph: {
    title: "Tom Conroy",
    description,
    url: "https://conroy.codes",
    siteName: "Tom Conroy",
    images: [
      {
        url: "https://conroy.codes/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Tom Conroy",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  // verification: {
  //   google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
  //   yandex: "14d2e73487fa6c71",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "text-black bg-white dark:text-white dark:bg-[#13141c]",
        merriweather.variable,
        montserrat.variable
      )}
    >
      <head>
        <PlausibleProvider domain="conroy.codes" />
      </head>
      <body className="antialiased max-w-4xl pb-28 flex flex-col px-4 mt-16 md:mt-32 mx-auto scrollbar-thin scrollbar-thumb-neutral-600 scrollbar-track-[#212330]">
        <Navbar />
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 m-auto w-full max-w-[700px]">
          {children}
          {/* <AnalyticsWrapper /> */}
        </main>
      </body>
    </html>
  );
}
