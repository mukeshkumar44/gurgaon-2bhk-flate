import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { PropertyProvider } from "@/contextapi/propertycontext";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import { BlogProvider } from "@/contextapi/BlogContext";
import { LocalityProvider } from "@/contextapi/LocalityContext";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
 title: "2BHK Flats for Sale  in Gurgaon | Affordable 2 Bedroom Flats for Sale",

description:
"Find verified 2BHK flats for Sale in Gurgaon including apartments, builder floors, and ready-to-move homes. Explore affordable 2 bedroom flats in prime locations with modern amenities and excellent connectivity at best prices.",

keywords: [
  "2bhk flat gurgaon",
  "2 bhk flat for sale in gurgaon",
  "2bhk apartments gurgaon",
  "2 bedroom flat gurgaon",
  "2bhk builder floor gurgaon",
  "2bhk ready to move gurgaon",
  "buy 2bhk flat gurgaon",
  "affordable 2bhk gurgaon",
  "2bhk property in gurgaon",
  "2bhk resale flat in gurgaon"
],

  alternates: {
    canonical: "https://www.2bhkflatsforsaleingurgaon.com/",
  },
  verification: {
    google: "N-2Bsi7AstXJhxg1bv46xA2T3q4UU551Z_rpYTP4W-0",
  },
   icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* ✅ Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TRFM69G2');
            `,
          }}
        />

        {/* ✅ Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DZP82DQP8H"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DZP82DQP8H');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ GTM NoScript */}
        
 <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TRFM69G2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>


        {/* ✅ Providers */}
        <PropertyProvider>
          <BlogProvider>
            <LocalityProvider>
            <Navbar />
            {children}
            <ScrollToTop />
            <Footer />
            {/* <Toaster position="top-right" reverseOrder={false} /> */}
            </LocalityProvider>
          </BlogProvider>
        </PropertyProvider>
      </body>
    </html>
  );
}