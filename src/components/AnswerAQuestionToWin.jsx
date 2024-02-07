import React from 'react'

const AnswerAQuestionToWin = () => {
  return (
    <section className='w-full h-full flex flex-col justify-center items-center  mx-auto my-2 '>
        <h1 className='lg:text-[3rem] md:text-[2rem] small:text-[2rem] text-[#04364A] text-center'>اجب عن السؤال التالي لتربح معنا</h1>

        <div className='w-full lg:h-[30rem] md:h-[30rem] small:h-[32rem]  bg-[#BACBD1] rounded-[1rem] mt-2 flex flex-col justify-center items-center p-4'>
            <h1 className='lg:text-[2.2rem] md:text-[2rem] small:text-[1.5rem] text-[#04364A] text-center mt-2'>ماهو الشيء الذي يقوى حمل السفينة، ولا يقوى على حمل مسمار ؟</h1>
            <div className='lg:w-[40rem]  md:w-[20rem]  lg:h-[12rem] md:h-full small:h-full flex flex-col justify-between items-center mt-6'>
                <div className='w-full lg:h-[50%] md:h-[50%] small:h-[50%] flex lg:flex-row md:flex-col small:flex-col justify-between items-center'>
                    <button className='lg:w-[12rem] lg:h-[4rem] md:w-[10rem] md:h-[4rem] small:w-[8rem] small:h-[4rem] bg-[#3F6F7F] text-white flex justify-center items-center rounded-lg text-[1.5rem]'>
                        ب-الهواء
                    </button>
                    <button className='lg:w-[12rem] lg:h-[4rem] md:w-[10rem] md:h-[4rem] small:w-[8rem] small:h-[4rem] bg-[#3F6F7F] text-white flex justify-center items-center rounded-lg text-[1.5rem] mt-2'>
                        ب-الهواء
                    </button>
                </div>
                <div className='w-full lg:h-[50%] md:h-[50%] small:h-[50%] flex lg:flex-row md:flex-col small:flex-col justify-between items-center mb-2 small:mt-6 md:mt-12'>
                    <button className='lg:w-[12rem] lg:h-[4rem] md:w-[10rem] md:h-[4rem] small:w-[8rem] small:h-[4rem] bg-[#3F6F7F] text-white flex justify-center items-center rounded-lg text-[1.5rem]'>
                        ب-الهواء
                    </button>
                    <button className='lg:w-[12rem] lg:h-[4rem] md:w-[10rem] md:h-[4rem] small:w-[8rem] small:h-[4rem] bg-[#3F6F7F] text-white flex justify-center items-center rounded-lg text-[1.5rem] mt-2'>
                        ب-الهواء
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AnswerAQuestionToWin