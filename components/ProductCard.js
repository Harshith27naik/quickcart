"use client";

import { useCart } from "@/context/CartContext";
import Button from "./Button";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const outOfStock = product.status === "Out of stock";

  return (
    <div className="card">
      <div className="card-emoji">{product.emoji}</div>
      <h3>{product.name}</h3>
      <p className="small">{product.category}</p>
      <p className="price">₹{product.price}</p>
      <Button onClick={() => addToCart(product)} disabled={outOfStock}>
        {outOfStock ? "Out of stock" : "Add"}
      </Button>
    </div>
  );
}