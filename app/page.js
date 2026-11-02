import Link from "next/link";

export default function Home() {
  return (
    <section className="hero">
      <span className="badge">⚡ Delivery in 10 min</span>
      <h1>Groceries at your door, before you finish scrolling.</h1>
      <p>Milk, bread, snacks and more, delivered fast.</p>
      <Link href="/products" className="btn btn-primary">Start Shopping</Link>
    </section>
  );
}