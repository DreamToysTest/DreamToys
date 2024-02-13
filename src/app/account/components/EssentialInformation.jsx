import React from 'react'

const EssentialInformation = () => {
  return (
    <div className='w-full h-full  flex flex-col justify-center '>
        <h1 className='text-3xl text-right mt-4 text-primary-text font-semibold'>معلومات اساسية</h1>
        <form className='w-full h-full  grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-8 mt-4'>

            <div className='w-full h-[3rem] text-black lg:text-xl text-right col-start-2'>
                <label  htmlFor="name">الاسم</label>
                <input className='w-full h-full border-[0.1rem] border-primary-100 rounded-lg mt-1 '  type="text" name="name" id="name" />
            </div>

            <div className='w-full h-[3rem] text-black lg:text-xl text-right col-start-1 row-start-1'>
                <label  htmlFor="name">رقم الهاتف</label>
                <input className='w-full h-full border-[0.1rem] border-primary-100 rounded-lg mt-1 '  type="text" name="name" id="name" />
            </div>


            <div className='w-full h-[3rem] text-black lg:text-xl text-right col-start-2 mt-2'>
                <label  htmlFor="name">العنوان</label>
                <input className='w-full h-full border-[0.1rem] border-primary-100 rounded-lg mt-1 '  type="text" name="name" id="name" />
            </div>


            <div className='w-full h-[3rem] text-black lg:text-xl text-right col-start-1 row-start-2 mt-2 '>
                <label  htmlFor="name">الايميل (اختياري)</label>
                <input className='w-full h-full border-[0.1rem] border-primary-100 rounded-lg mt-1 '  type="text" name="name" id="name" />
            </div>

        </form>
    </div>
  )
}

export default EssentialInformation