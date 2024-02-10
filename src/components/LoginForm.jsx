
'use client'
import { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { LuLoader } from "react-icons/lu";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Register from "./Register";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./schema";
import Cookies from 'js-cookie';
import { redirect } from 'next/navigation'
import useApp from "./context/useApp";
const LoginForm = ({ setIsLoggedIn }) => {
  const {setAccessToken} = useApp()
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const buttonRef = useRef(null);
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
      const response = await axios.post("https://aon-final.onrender.com/user/login", data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.data.success === false) {
        setError("Invalid Credentials")
        console.log("Invalid Credentials")
        return
      }
      const accessToken = response.data.token;
      Cookies.set('authToken', accessToken, { expires: 7 })
      setAccessToken(accessToken)
      setUserInfo(response.data.userLogin)
      console.log(accessToken)

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

  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
    {!alreadyRegister?
     <div>
     <div className="fixed inset-0 bg-black bg-opacity-25 " />
 
     <div className={`fixed inset-0 w-full overflow-y-auto`}>
         
         <div className="flex items-center justify-center w-full h-full p-4 text-center">
 
             <div className="h-[90%] w-[90%] md:w-[60%] bg-white lg:w-[45%] p-6 space-y-4 overflow-hidden text-left text-black align-middle transition-all transform shadow-xl rounded-2xl bg-primary overflow-y-auto">
                 
                 <form
                     onSubmit={handleSubmit(onSubmit)}
                     className="z-10 flex flex-col items-center justify-center w-full space-y-4 h-fit"
                 >
                     <div className={`relative flex flex-col items-end justify-center w-full shadow-base space-y-1`}>
                         <label
                             htmlFor="phoneNumber"
                             className="text-[#333F51] font-metropolis font-medium"
                         >
                             رقم الهاتف
                         </label>
                         <input
                             {...register("phoneNumber")}
                             type="text"
                             id="phoneNumber"
                             placeholder="رقم الهاتف"
                             className="w-full text-base outline-none border border-[#D5DAE1] font-metropolis font-medium rounded-lg py-2 px-3"
                         />
                         <p className="text-base font-semibold text-red-300 ">
                             {errors.phoneNumber?.message}
                         </p>
                     </div>
 
                     <div className={`relative flex flex-col items-end justify-center w-full shadow-base space-y-1`}>
                         <label
                             htmlFor="password"
                             className="text-[#333F51] font-metropolis font-medium"
                         >
                             الباسورد
                         </label>
                         <input
                             {...register("password")}
                             type="text"
                             id="password"
                             placeholder="الباسورد"
                             className="w-full text-base outline-none border border-[#D5DAE1] font-metropolis font-medium rounded-lg py-2 px-3"
                         />
                         <p className="text-base font-semibold text-red-300 ">
                             {errors.password?.message}
                         </p>
                     </div>
 
                     {isLoading ? (
                         <LuLoader size={25} className="animate-spin" />
                     ) : (
                         <button
                             className="flex items-center justify-center w-full p-3 space-x-4 capitalize rounded shadow-sm bg-[#3F6F7F] hover:shadow-2xl disabled:text-gray-300 disabled:bg-violet-500"
                             type="submit"
                         >
                             <span className="text-base text-white capitalize font-metropolis">
                                 Send
                             </span>
                         </button>
                     )}
                 </form>
                 <button onClick={()=>setAlreadyRegister(true)} className="text-[#04364A]">Don't have an Account?</button>
             </div>
         </div>
     </div>
 </div>:
<Register />
 }
   
</>
  );
};

export default LoginForm;
