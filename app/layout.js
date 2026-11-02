import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "QuickCart – 10-Minute Grocery Delivery",
  description: "Front-end prototype of a quick-commerce grocery app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main className="container">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}