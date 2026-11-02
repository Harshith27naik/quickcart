"use client";

import { useState } from "react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const [selected, setSelected] = useState("All");

  const visible =
    selected === "All" ? products : products.filter((p) => p.category === selected);

  return (
    <>
      <h1>Products</h1>
      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`chip ${selected === cat ? "chip-active" : ""}`}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid">
        {visible.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}