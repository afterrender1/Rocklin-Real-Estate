import { Manrope } from "next/font/google";
import MotionProvider from "./components/MotionProvider";
import Navbar from "./components/Navbar";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: "Skyline Real Estate",
  description: "Your trusted guide to finding your dream home.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <head>
        {/* Without JS, never leave animated content hidden */}
        <noscript>
          <style>{`[data-animate]{opacity:1!important}`}</style>
        </noscript>
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans">
        <MotionProvider>
          <Navbar />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
