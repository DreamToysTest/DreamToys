"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { LuLoader } from "react-icons/lu";
import Register from "./Register";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./schema";
import Cookies from "js-cookie";
import useApp from "./context/useApp";
const LoginForm = () => {
  const { setAccessToken } = useApp();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [alreadyRegister, setAlreadyRegister] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneNumber: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://aon-final.onrender.com/user/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: false
        }
      );
      if (response.data.success === false) {
        setError("Invalid Credentials");
        console.log("Invalid Credentials")
        return;
      }
      const accessToken = response.data.token
      Cookies.set("authToken", accessToken, { expires: 7 })
      setAccessToken(accessToken)
      setUserInfo(response.data.userLogin)
    } catch (error) {
      if (error?.response?.status === 401) {
        setError("Invalid Credentials");
      } else {
        setError(error?.response?.data?.message);
      }
    } finally {
      router.push("/");
      setIsLoading(false);
    }
  };


  return (
    <>
      {!alreadyRegister ? (
        <div className="relative z-50">
          <div className="fixed inset-0 w-full bg-black bg-opacity-25 flex items-center justify-center">
            <div className="h-[90%] w-[90%] md:w-[60%]  bg-white lg:w-[40%] p-6 space-y-4 overflow-hidden text-left text-black align-middle transition-all transform shadow-xl rounded-2xl bg-primary overflow-y-auto">
              <form onSubmit={handleSubmit(onSubmit)} className="z-10 flex flex-col items-center justify-center w-full space-y-4 h-fit">
                <div className="w-full">
                  <label htmlFor="phoneNumber" className="block text-right text-primary-800 font-bold pb-2" >
                    رقم الهاتف
                  </label>
                  <input
                    {...register("phoneNumber")}
                    type="text"
                    id="phoneNumber"
                    placeholder="رقم الهاتف"
                    className="w-full text-base outline-none border border-[#D5DAE1] rounded-lg py-2 px-3 text-right"
                  />
                  <p className="text-base font-semibold text-red-300 ">
                    {errors.phoneNumber?.message}
                  </p>
                </div>

                <div className="w-full">
                  <label htmlFor="password" className="block text-right text-primary-800 font-bold pb-2">
                    الباسورد
                  </label>
                  <input
                    {...register("password")}
                    type="text"
                    id="password"
                    placeholder="الباسورد"
                    className="w-full text-base outline-none border border-[#D5DAE1] rounded-lg py-2 px-3 text-right"
                  />
                  <p className="text-base font-semibold text-red-300 ">
                    {errors.password?.message}
                  </p>
                </div>

                {isLoading ? (
                  <LuLoader size={25} className="animate-spin" />
                ) : (
                  <button
                    className="w-full p-3 rounded-lg shadow-sm bg-[#3F6F7F] hover:shadow-xl disabled:text-gray-300 disabled:bg-violet-500"
                    type="submit"
                  >
                    <span className="text-base text-white">أرسال</span>
                  </button>
                )}
              </form>
              <button
                onClick={() => setAlreadyRegister(true)}
                className="text-[#04364A]"
              >
                ليس لديك حساب ؟
              </button>
            </div>
          </div>
        </div>

      ) : (
        <Register />
      )}
    </>
  );
};

export default LoginForm;
