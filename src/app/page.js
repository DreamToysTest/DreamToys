'use client'
import { Footer } from "../components/footer.jsx";
import HomeBanner from "../components/HomeBanner.jsx";
import Header from "../components/header.jsx"
import ShopAccordingToTheCategory from "../components/ShopAccordingToTheCategory.jsx";
import ShopAccordingToTheGender from "@/components/ShopAccordingToTheGender.jsx";
import ShopAccordingToTheCharacters from "@/components/ShopAccordingToTheCharacters.jsx";
import DifferentProducts from "@/components/DifferentProducts.jsx";
import AnswerAQuestionToWin from "@/components/AnswerAQuestionToWin.jsx";
import AppProvider from "@/components/context/AppProvider.jsx";
import Register from "@/components/Register.jsx";
import LoginForm from "@/components/LoginForm.jsx";
import { useState, useEffect } from "react";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authToken = sessionStorage.getItem('authToken');
    if(authToken){
      setIsLoggedIn(true);
    }
    setIsLoading(false); 
  }, []); 

  if (isLoading || (!isLoggedIn && isLoading)) {
    return null; 
  }
  return (
    <main className="h-full w-full flex flex-col justify-center items-center mt-5">
      <AppProvider>
        <div className="xl:w-[80rem] lg:w-[60rem]  md:w-full small:w-full h-full flex flex-col justify-center items-center">
          {!isLoggedIn && <LoginForm  setIsLoggedIn={setIsLoggedIn} />}
          {isLoggedIn && (
            <>
              <HomeBanner />
              <ShopAccordingToTheCategory />
              <ShopAccordingToTheGender />
              <ShopAccordingToTheCharacters />
              <DifferentProducts />
              <AnswerAQuestionToWin />
              <Footer />
            </>
          )}
        </div>
      </AppProvider>
    </main>
  );
}
