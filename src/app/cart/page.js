"use client"

import AppProvider from "@/components/context/AppProvider.jsx";
import CartProducts from "@/components/CartProducts";
export default function Home() {
  return (
    <main className="h-full w-full  flex justify-center items-center pt-12 box-border	scroll-smooth	overflow-x-hidden">
      <AppProvider>
      <CartProducts />
      </AppProvider>
    </main>
  );
}
