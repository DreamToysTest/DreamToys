'use client'
import AppProvider from "@/components/context/AppProvider.jsx";
import LoginForm from "@/components/LoginForm.jsx";
export default function Page() {

  return (
    <main className="h-full w-full flex flex-col justify-center items-center mt-5">
      <AppProvider>
        <div className="xl:w-[80rem] lg:w-[60rem]  md:w-full small:w-full h-full flex flex-col justify-center items-center">
            <LoginForm />
        </div>
      </AppProvider>
    </main>
  );
}
