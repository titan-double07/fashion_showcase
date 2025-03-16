import type { Metadata } from "next";
import "./globals.css";
// const SplashScreen = dynamic(() => import("@/components/base/SplashScreen"), {
//   ssr: false,
// }); // makes

import Navbar from "@/components/base/Navbar";
import Footer from "@/components/base/Footer";
import SplashScreen from "@/components/base/SplashScreen";
import LazyMotionProvider from "@/lib/motion/LazyMotionProvider";
import { Work_Sans, Libre_Baskerville } from "next/font/google";
// import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Design Showcase",
  description: "Where elegance meets creativity",
};

export const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});
export const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`antialiased `}>
        <LazyMotionProvider>
          <SplashScreen>
            <Navbar />
            <main className="min-h-screen overflow-x-hidden scroll-smooth snap-y ">
              {children}
            </main>
            <Footer />
          </SplashScreen>
        </LazyMotionProvider>
      </body>
    </html>
  );
}
