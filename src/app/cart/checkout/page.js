"use client";
import AppProvider from "@/components/context/AppProvider.jsx";
import CartProducts from "@/components/CartProducts";
import Checkout from "@/components/Checkout";
export default function Home() {
  return (
    <main className="h-full w-full  flex justify-center items-center pt-12 box-border	scroll-smooth	overflow-x-hidden">
      <AppProvider>
      <Checkout /> 
      </AppProvider>
    </main>
  );
}
