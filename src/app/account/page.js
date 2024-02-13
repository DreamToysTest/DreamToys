"use client"
import AppProvider from "@/components/context/AppProvider.jsx";
import AccountPage from "./components/AccountPage";
export default function Page() {
  return (
    <>
    <div className="w-full h-full flex flex-col justify-center items-center  box-border scroll-smooth">
    <main className="xl:w-[80rem] lg:w-[60rem]  md:w-full small:w-full h-full flex flex-col justify-center items-center">
      <AppProvider>
        <AccountPage />
      </AppProvider>
    </main>
    </div>
    </>
  );
}
