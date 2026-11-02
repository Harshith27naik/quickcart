"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      <Link href="/" className="logo">⚡ QuickCart</Link>
      <div className="nav-links">
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart ({totalItems})</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}