"use client";
import React, { useEffect, useState } from "react";

export default function SplashScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Check if the splash screen has been shown before
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");

    if (hasSeenSplash) {
      setShowSplash(false); // Hide splash if already seen
    } else {
      sessionStorage.setItem("hasSeenSplash", "true"); // Mark splash as seen
      setTimeout(() => setShowSplash(false), 2000); // Hide after 2 seconds
    }
  }, []);

  return showSplash ? (
    <div className="h-screen bg-black text-white flex justify-center items-center">
      SplashScreen displays for some time
    </div>
  ) : (
    children
  );
}
