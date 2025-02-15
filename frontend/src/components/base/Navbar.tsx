import React from 'react'

export default function Navbar() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "#collections" },
    { name: "Contact", href: "/contact" },
  ]
  return <nav className="h-12 bg-red-500">Navbar</nav>;
}
