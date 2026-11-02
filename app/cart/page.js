"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import Button from "@/components/Button";
import EmptyState from "@/components/EmptyState";

export default function CartPage() {
  const { cart, addToCart, decreaseQty, removeFromCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return <EmptyState message="Your cart is empty 🛒" linkText="Browse products" href="/products" />;
  }

  return (
    <>
      <h1>Your Cart</h1>
      {cart.map((item) => (
        <div key={item.id} className="cart-row">
          <span>{item.emoji} {item.name}</span>
          <div className="qty">
            <Button variant="outline" onClick={() => decreaseQty(item.id)}>−</Button>
            <span>{item.qty}</span>
            <Button variant="outline" onClick={() => addToCart(item)}>+</Button>
          </div>
          <span>₹{item.price * item.qty}</span>
          <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
        </div>
      ))}
      <h2>Total: ₹{totalPrice}</h2>
      <Link href="/login" className="btn btn-primary">Proceed to Login</Link>
    </>
  );
}