import type { Metadata } from "next";
import "./globals.css";
// const SplashScreen = dynamic(() => import("@/components/base/SplashScreen"), {
//   ssr: false,
// }); // makes

import Navbar from "@/components/base/Navbar";
import Footer from "@/components/base/Footer";
import SplashScreen from "@/components/base/SplashScreen";
import LazyMotionProvider from "@/lib/motion/LazyMotionProvider";
// import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Design Showcase",
  description: "Where elegance meets creativity",
};


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
