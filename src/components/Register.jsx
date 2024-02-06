'use client'
import React from 'react'
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';

import { registerSchema } from './schema';
const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
  
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
          closeModal();
        }
      };

    const [isOpen, setIsOpen] = useState(false);

    function closeModal() {
      setIsOpen(false);
    }
  
    function openModal() {
      setIsOpen(true);
    }
  return (
    <div>
              <button
        type="button"
        onClick={openModal}
        className="w-[20rem] h-[20rem]"
      >
        Add Experience
      </button>

        <Transition appear show={isOpen} as={Fragment} className="">
        <Dialog as="div" className="relative z-10 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 " />
          </Transition.Child>

          <div className="fixed inset-0 w-full overflow-y-auto">
            <div className="flex items-center justify-center w-full h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="h-[90%] w-[90%] md:w-[60%]  bg-white lg:w-[40%] p-6 space-y-4 overflow-hidden text-left text-black align-middle transition-all transform shadow-xl rounded-2xl bg-primary overflow-y-auto">
                  <Dialog.Title
                    as="h3"
                    className="flex items-center justify-between w-full "
                  >
                    <p className="text-lg font-medium leading-6 text-gray-900 ">
                      Add
                    </p>
                    <button
                      onClick={closeModal}
                      type="button"
                      className="inline-flex justify-center px-2 py-2 text-sm font-medium text-white border border-transparent rounded-full bg-[#3F6F7F] bg-button focus:outline-none "
                    >
                      <IoCloseOutline />
                    </button>
                  </Dialog.Title>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="z-10 flex flex-col items-center justify-center w-full space-y-4 h-fit"
                  >
                    <div
                      className={` relative flex flex-col items-end justify-center w-full   shadow-base space-y-1 `}
                    >
                      <label
                        htmlFor="name"
                        className="text-[#333F51] font-metropolis font-medium"
                      >
                        الاسم
                      </label>
                      <input
                        {...register("name")}
                        type="text"
                        id="name"
                        placeholder="الاسم"
                        className="w-full   text-base outline-none border border-[#D5DAE1] font-metropolis font-medium rounded-lg py-2 px-3"
                      />
                      <p className="text-base font-semibold text-red-300 ">
                        {errors.name?.message}
                      </p>
                    </div>
                    <div
                      className={` relative flex flex-col items-end justify-center w-full   shadow-base space-y-1 `}
                    >
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
                        className="w-full   text-base outline-none border border-[#D5DAE1] font-metropolis font-medium rounded-lg py-2 px-3"
                      />
                      <p className="text-base font-semibold text-red-300 ">
                        {errors.phoneNumber?.message}
                      </p>
                    </div>
                    
                    <div
                      className={` relative flex flex-col items-end justify-center w-full   shadow-base space-y-1 `}
                    >
                      <label
                        htmlFor="email"
                        className="text-[#333F51] font-metropolis font-medium"
                      >
                        الايميل
                      </label>
                      <input
                        {...register("email")}
                        type="text"
                        id="email"
                        placeholder="الايميل"
                        className="w-full   text-base outline-none border border-[#D5DAE1] font-metropolis font-medium rounded-lg py-2 px-3"
                      />
                      <p className="text-base font-semibold text-red-300 ">
                        {errors.email?.message}
                      </p>
                    </div>
                    <div
                      className={` relative flex flex-col items-end justify-center w-full   shadow-base space-y-1 `}
                    >
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
                        className="w-full   text-base outline-none border border-[#D5DAE1] font-metropolis font-medium rounded-lg py-2 px-3"
                      />
                      <p className="text-base font-semibold text-red-300 ">
                        {errors.password?.message}
                      </p>
                    </div>
                    <div className={`relative flex flex-col items-start justify-center w-full shadow-base space-y-1`}>
  <label htmlFor="location" className="text-[#333F51] font-metropolis font-medium">
    العنوان
  </label>
  <select
    {...register("location")}
    id="location"
    className="w-full max-h-40 text-base outline-none border border-[#D5DAE1] font-metropolis font-medium rounded-lg py-2 px-3"
  >
    <option value="">Select an option</option>
    <option value="بغداد">بغداد</option>
    <option value="بصرة">بصرة</option>
    <option value="ديالى">ديالى</option>
  </select>
  <p className="text-base font-semibold text-red-300">
    {errors.location?.message}
  </p>
</div>

                    {isLoading ? (
                      <IoCloseOutline />
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default Register