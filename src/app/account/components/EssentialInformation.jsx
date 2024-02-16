import React, { useEffect, useState } from 'react'
import useApp from '@/components/context/useApp'
import axios from 'axios'
import { useForm } from "react-hook-form";
import { updateSchema } from '@/components/schema';
import { yupResolver } from '@hookform/resolvers/yup';
const EssentialInformation = () => {
  const [userInfo,setUserInfo] = useState([])

  useEffect(() => {
    axios.get(
      "https://aon-final.onrender.com/user/userView",
      {
        headers: {
          "Content-Type": "application/json",
          "token": accessToken,
        },
        withCredentials: false
      }
    ).then((response) => {
      console.log(response.data.user)
    })
  }, [])
  
    const {accessToken} = useApp()
    const [error, setError] = useState();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        defaultValues: {
          name: "",
          phoneNumber: "",
          location:"",
          email:"",
        },
        resolver: yupResolver(updateSchema),
      });
      const onSubmit = async (data) => {
        try {
          const response = await axios.put(
            "https://aon-final.onrender.com/user/edit",
            data,
            {
              headers: {
                "Content-Type": "application/json",
                "token":accessToken,
              },
              withCredentials: false
            }
          );
          console.log(data)
        } catch (error) {
          if (error?.response?.status === 401) {
            setError("Invalid Credentials");
          } else {
            setError(error?.response?.data?.message);
          }
        } finally {
            console.log('done')
        }
      };
  return (
    <div className='w-full h-full  flex flex-col justify-center items-center '>
        <h1 className='text-3xl text-right mt-4 text-primary-text font-semibold'>معلومات اساسية</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full h-full flex flex-col justify-center items-center  mt-4 px-2'>
            <div className='w-full h-[full] lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-x-8 gap-y-2 '>
            <div className='small:h-[4rem] md:h-[4rem] lg:h-[4rem] text-black lg:text-xl text-right lg:col-start-2 my-8 '>
                <label  htmlFor="name">الاسم</label>
                <input {...register("name")} className='w-full h-full border-[0.1rem] border-primary-100 rounded-lg mt-1 text-right '  type="text" name="name" id="name" />
            </div>

            <div className='small:h-[4rem] md:h-[4rem] lg:h-[4rem] text-black lg:text-xl text-right lg:col-start-1 lg:row-start-1 my-8 '>
                <label  htmlFor="phoneNumber">رقم الهاتف</label>
                <input {...register("phoneNumber")} className='w-full h-full md:h-[4rem] border-[0.1rem] border-primary-100 rounded-lg mt-1 text-right '  type="phone" name="phoneNumber" id="phoneNumber" />
            </div>


            <div className='small:h-[4rem] md:h-[4rem] lg:h-[4rem] text-black lg:text-xl text-right lg:col-start-2 my-8 '>
                <label  htmlFor="location">العنوان</label>
                <input {...register("location")} className='w-full h-full border-[0.1rem] border-primary-100 rounded-lg mt-1 text-right '  type="text" name="location" id="location" />
            </div>


            <div className='small:h-[4rem] md:h-[4rem] lg:h-[4rem] text-black lg:text-xl text-right lg:col-start-1 lg:row-start-2 my-8  '>
                <label  htmlFor="email">الايميل (اختياري)</label>
                <input {...register("email")} className='w-full h-full border-[0.1rem] border-primary-100 rounded-lg mt-1 text-right '  type="email" name="email" id="email" />
            </div>
            </div>

            <button className=' lg:w-[60%] w-full h-[4rem] my-4 mt-14 flex justify-center items-center bg-primary-500 text-white cursor-pointer rounded-lg' type="submit"  >تحديث المعلومات</button>
        </form>
    </div>
  )
}

export default EssentialInformation