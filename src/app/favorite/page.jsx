import React from 'react'
import Header from '@/components/header/Header'
import { Footer } from '@/components/footer/footer'
import FavoriteList from '@/components/FavoriteList'
import AppProvider from '@/components/context/AppProvider'
const page = () => {
  return (
    <main className='w-full h-full flex  flex-col items-center  justify-between px-8 box-border	scroll-smooth	overflow-x-hidden'>
      <AppProvider>
      <FavoriteList />
      <Footer />
      </AppProvider>
    </main>
  )
}

export default page