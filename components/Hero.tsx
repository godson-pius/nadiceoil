import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <main className='flex items-center px-44 py-10 gap-10'>
            <section className='flex flex-col'>
                <div className='w-max p-1 border-2 border-orange-200 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer hover:shadow' data-cursor="hover">
                    <div className='border-2 w-max font-medium px-6 py-2 text-sm border-orange-300 rounded-full'>Nadice Oil and Gas Limited</div>
                </div>
                <h2 className='text-5xl font-medium w-150 font-bricolage mt-5'>Nadice, the Leading Bulk Diesel Supplier in Enugu </h2>
                <p className='text-gray-500 mt-5 w-120'>Nadice oil and gas limited is the leading Diesel (AGO) supplier, ranging from various Diesel products, industrial equipments, to electrical energy generating plant supplies, regardless of your industry.</p>

                <div className='flex items-center gap-5 mt-5'>
                    <button className='bg-orange-400 text-white px-6 py-3 cursor-pointer rounded-lg font-medium'>₦1,300 / litre</button>
                    <button className='bg-transparent border-[1.5px] border-gray-200 text-gray-700 px-6 py-3 cursor-pointer rounded-lg font-medium'>Read more</button>
                </div>

                <div className='mt-5 flex items-center gap-2'>
                    <div className='bg-black rounded-full w-6 h-6'></div>
                    <p className='text-black'>3,500+ happy clients <span className='text-gray-500 ml-3'>⭐️ ⭐️ ⭐️ ⭐️ 4.8</span></p>
                </div>
            </section>

            <section className='w-full'>
                <div className="w-full h-[450px] bg-blue-500 rounded-3xl bg-[url('/nadicebg2.png')] bg-cover bg-center shadow-2xl"></div>
            </section>
        </main>
    )
}

export default Hero