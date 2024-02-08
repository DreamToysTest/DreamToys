import React from 'react'
import FavoriteList from '@/components/FavoriteList'
import AppProvider from '@/components/context/AppProvider'
const page = () => {
  return (
    <main className='w-full h-full flex  flex-col items-center  justify-between px-8 box-border	scroll-smooth	overflow-x-hidden'>
      <AppProvider>
      <FavoriteList />
      </AppProvider>
    </main>
  )
}

export default page