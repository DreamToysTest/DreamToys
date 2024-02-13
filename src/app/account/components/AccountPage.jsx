import React,{ useEffect } from 'react'
import useApp from '@/components/context/useApp'
import axios from 'axios'
import EssentialInformation from './EssentialInformation'
const AccountPage = () => {
    const {accessToken, userInfo} = useApp()  
    console.log()
    // useEffect(() => {
    //     axios.get(
    //         ""
    //     )
    // })
    console.log(userInfo)
  return (
    <>
    <main className='w-full h-full flex flex-col justify-center items-center'>
    <h1 className='lg:text-[3rem] md:text-[2rem] small:text-[2rem] text-primary-text text-center my-2'>الحساب</h1>
    <div className='w-full h-full flex flex-col justify-end items-end'>

    <h1 className='lg:text-3xl md:xl font-semibold text-primary-text'>hussian ali</h1>
    <h1 className='lg:text-2xl md:lg mt-2'>iraq baghdad</h1>
    <div className='w-full border-b-[0.1rem] border-primary-300 mt-4'></div>

    <EssentialInformation />
    </div>


    </main>
    </>
  )
}

export default AccountPage