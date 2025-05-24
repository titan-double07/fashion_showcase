import React from "react";

export default function Footer() {
  return <footer className=" bg-black text-white">
    <div className="flex items-center justify-center text-sm">
      <span>© {new Date().getFullYear()} Design Showcase. All rights reserved.</span>
    </div>
  </footer>;
}
