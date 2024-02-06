import { Footer } from "../components/footer/footer.jsx";
import HomeBanner from "../components/HomeBanner.jsx";
import Header from "../components/header/Header.jsx"
import ShopAccordingToTheCategory from "../components/header/ShopAccordingToTheCategory.jsx";
import ShopAccordingToTheGender from "@/components/header/ShopAccordingToTheGender.jsx";
import ShopAccordingToTheCharacters from "@/components/header/ShopAccordingToTheCharacters.jsx";
import DifferentProducts from "@/components/DifferentProducts.jsx";
import AnswerAQuestionToWin from "@/components/AnswerAQuestionToWin.jsx";
import AppProvider from "@/components/context/AppProvider.jsx";
import Register from "@/components/Register.jsx";
export default function Home() {
  return (
    <main className="h-full w-full flex  flex-col justify-center items-center  mt-5  ">
      <AppProvider>
      <div className="xl:w-[80rem] lg:w-[60rem] md:w-full small:w-full  h-full flex flex-col justify-center items-center">
      <HomeBanner />
      <Register /> 
      <ShopAccordingToTheCategory />
      <ShopAccordingToTheGender />
      <ShopAccordingToTheCharacters />
      <DifferentProducts />
      <AnswerAQuestionToWin /> 
      </div>
      <Footer />
      </AppProvider>
    </main>
  );
}
