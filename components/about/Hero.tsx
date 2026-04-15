import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <main className='flex flex-col lg:flex-row items-center px-6 md:px-20 lg:px-44 md:py-10 gap-10'>
            <section className='flex flex-col items-center lg:items-start text-center lg:text-left'>
                <div className='w-max p-1 border-2 border-orange-200 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer hover:shadow' data-cursor="hover">
                    <div className='border-2 w-max font-medium px-4 md:px-6 py-2 text-xs md:text-sm border-orange-300 rounded-full'>About us</div>
                </div>
                <h2 className='text-3xl md:text-5xl font-medium max-w-xl font-bricolage mt-5 leading-tight'>We are the Leading Bulk Diesel Supplier in Enugu.</h2>
                <p className='text-gray-500 mt-5 max-w-2xl'>We are a leading Diesel (AGO) supplier, focused solely on the procurement and delivery of high-quality diesel products across various sectors. We serve a wide range of industries including, but not limited to, Financial Services, Banking, Real Estate, Government, Construction, Manufacturing, Education, Residential, Hospitality, and Entertainment.</p>

                <p className='text-gray-500 mt-2 max-w-2xl'>Our experience in diesel supply and delivery spans both residential and commercial clients. We are committed to keeping businesses, homes, corporate organizations, and government operations running smoothly, ensuring uninterrupted power through our reliable and efficient diesel delivery network. </p>

                <p className='text-gray-500 mt-2 max-w-2xl'>Beyond supply, we pride ourselves on delivering quality products at competitive prices, backed by professionalism and industry expertise. We are accountable, reliable, and responsive — delivering exactly what you need, when you need it, and wherever you need it</p>

                <div className='flex flex-col md:flex-row items-center gap-5 mt-8'>
                    <button className='bg-orange-400 text-white px-6 py-3 cursor-pointer rounded-lg font-medium text-sm md:text-base'>Request Delivery</button>
                    <div className='flex items-center gap-2'>
                        <div className='bg-black rounded-full w-5 h-5 md:w-6 md:h-6'></div>
                        <p className='text-black text-sm md:text-base'>3,500+ happy clients <span className='text-gray-500 ml-3'>⭐️ ⭐️ ⭐️ ⭐️ 4.8</span></p>
                    </div>
                </div>
            </section>

            <section className='w-full lg:w-1/2'>
                <div className="w-full h-[300px] md:h-[450px] rounded-3xl lg:rounded-l-full lg:rounded-r-none border-l-2 border-white bg-[url('/nadicebg2.png')] bg-cover bg-center shadow-2xl relative group overflow-hidden">
                    <div className='absolute border-l-2 border-white inset-1 rounded-3xl lg:rounded-l-full lg:rounded-r-none group-hover:left-2 transition-all duration-700 group-hover:shadow-2xl'></div>
                    <div className='absolute border-l-2 border-white inset-2 rounded-3xl lg:rounded-l-full lg:rounded-r-none group-hover:left-4 transition-all duration-700 group-hover:shadow-2xl'></div>
                    <div className='absolute border-l-2 border-white inset-3 rounded-3xl lg:rounded-l-full lg:rounded-r-none group-hover:left-6 transition-all duration-700 group-hover:shadow-2xl'></div>
                    <div className='absolute border-l-2 border-white inset-4 rounded-3xl lg:rounded-l-full lg:rounded-r-none group-hover:left-8 transition-all duration-700 group-hover:shadow-2xl'></div>
                </div>
            </section>
        </main>
    )
}

export default Hero