'use client'
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import { registerSchema } from './schema';
import LoginForm from './LoginForm';
import { FaSpinner } from "react-icons/fa";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [alreadyLoggedIn, setAlreadyLoggedIn] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phoneNumber: "",
      password: "",
      email: "",
      location: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);

      const response = await axios.post("https://aon-final.onrender.com/user/register", data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(data);

      if (!response.status === 200) {
        throw new Error("Failed to register user");
      }

      console.log('User registered successfully');
    } catch (errorMessage) {
      setError(errorMessage.message);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <>
      {!alreadyLoggedIn ? (
        <div className="relative z-50">
          <div className="fixed inset-0 w-full bg-black bg-opacity-25 flex items-center justify-center">
            <div className="h-[90%] w-[90%] md:w-[60%]  bg-white lg:w-[40%] p-6 space-y-4 overflow-hidden text-left text-black align-middle transition-all transform shadow-xl rounded-2xl bg-primary overflow-y-auto">
              <form onSubmit={handleSubmit(onSubmit)} className="z-10 flex flex-col items-center justify-center w-full space-y-4 h-fit">

                <div className='w-full'>
                  <label htmlFor="name" className="block text-right text-primary-800 font-bold pb-2">
                    الاسم
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    placeholder="الاسم"
                    className="w-full text-base outline-none border border-[#D5DAE1] rounded-lg py-2 px-3 text-right"
                  />
                  <p className="text-base font-semibold text-red-300 ">{errors.name?.message}</p>
                </div>

                <div className="w-full">
                  <label htmlFor="phoneNumber" className="block text-right text-primary-800 font-bold pb-2">
                    رقم الهاتف
                  </label>
                  <input
                    {...register("phoneNumber")}
                    type="text"
                    id="phoneNumber"
                    placeholder="رقم الهاتف"
                    className="w-full text-base outline-none border border-[#D5DAE1] rounded-lg py-2 px-3 text-right"
                  />
                  <p className="text-base font-semibold text-red-300 ">{errors.phoneNumber?.message}</p>
                </div>

                <div className="w-full">
                  <label htmlFor="email" className="block text-right text-primary-800 font-bold pb-2">
                    الايميل
                  </label>
                  <input
                    {...register("email")}
                    type="text"
                    id="email"
                    placeholder="الايميل"
                    className="w-full  text-base outline-none border border-[#D5DAE1] rounded-lg py-2 px-3 text-right"
                  />
                  <p className="text-base font-semibold text-red-300 ">{errors.email?.message}</p>
                </div>

                <div className="w-full">
                  <label htmlFor="password"className="block text-right text-primary-800 font-bold pb-2">
                    الباسورد
                  </label>
                  <input
                    {...register("password")}
                    type="text"
                    id="password"
                    placeholder="الباسورد"
                    className="w-full text-base outline-none border border-[#D5DAE1] rounded-lg py-2 px-3 text-right"
                  />
                  <p className="text-base font-semibold text-red-300 ">{errors.password?.message}</p>
                </div>
                
                <div className="w-full pb-6">
                  <label htmlFor="location" className="block text-right text-primary-800 font-bold pb-2">
                    العنوان
                  </label>
                  <select
                    {...register("location")}
                    id="location"
                    className="w-full max-h-40 text-base outline-none border border-[#D5DAE1] rounded-lg py-2 px-3 text-right"
                  >
                    <option value="">أختر محافظتك</option>
                    <option value="بغداد">بغداد</option>
                    <option value="بصرة">بصرة</option>
                    <option value="ديالى">ديالى</option>
                  </select>
                  <p className="text-base font-semibold text-red-300">{errors.location?.message}</p>
                </div>

                {isLoading ? (
                  <FaSpinner className="animate-spin" />
                ) : (
                  <button
                    className="w-full p-3 rounded-lg shadow-sm bg-[#3F6F7F] hover:shadow-xl disabled:text-gray-300 disabled:bg-violet-500"
                    type="submit"
                  >
                    <span className="text-base text-white">أرسال</span>
                  </button>
                )}
              </form>
              <button onClick={() => setAlreadyLoggedIn(true)} className="text-primary-500">لديك حساب مسبقا؟</button>
            </div>
          </div>
        </div>
      ) :
        <LoginForm />
      }

    </>
  )
}

export default Register