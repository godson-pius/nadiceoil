'use client'
import { ChessQueen, SwatchBook } from 'lucide-react'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Mission = () => {
    return (
        <main className='py-10 md:py-20 px-4 md:px-6'>
            <section className='flex flex-col justify-center bg-orange-900 rounded-3xl md:rounded-4xl py-16 md:py-24 px-6 md:px-28 relative overflow-hidden'>
                <span className='absolute w-64 md:w-lg h-64 md:h-96 bg-orange-400 rounded-full -top-20 -left-20 opacity-10'></span>
                <div className='w-full flex flex-col lg:flex-row justify-between items-center px-4 md:px-10 gap-8 lg:gap-0'>
                    <h2 className='text-xl md:text-2xl font-medium font-bricolage text-center lg:text-left md:max-w-md text-white'>Driven by precision, inspired by innovation, and grounded in integrity.</h2>
                    <div className='w-44 md:w-56 text-center p-1 md:p-2 border-2 border-orange-200 rounded-full hover:scale-105 hover:-skew-2 transition-all duration-700 cursor-pointer hover:shadow relative' data-cursor="hover">
                        <TypeAnimation
                            sequence={[
                                'Mission',
                                1000,
                                'Vision',
                                1000,
                                'Core Values',
                                1000,
                            ]}
                            repeat={Infinity}
                            className='font-medium px-6 md:px-10 py-1.5 md:py-2 text-lg md:text-xl rounded-full text-white'
                        />
                        <span className='absolute inset-1 border-2 border-red-300 rounded-full'></span>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-6 md:gap-10 px-4 md:px-10 mt-14'>
                    <div className='bg-white px-6 md:px-9 py-8 md:py-12 rounded-2xl flex flex-col gap-2 relative overflow-hidden hover:scale-105 hover:-skew-2 transition-all duration-700 cursor-pointer hover:shadow-2xl hover:shadow-orange-700 border-[0.1px] border-orange-300'>
                        <SwatchBook size={30} color='black' />
                        <h5 className='text-2xl md:text-3xl font-medium text-black'>Mission</h5>
                        <p className='text-black text-xs md:text-sm'>Cutting costs for our clients by ending the epidemic mentality of high-priced supplies of petroleum products and procurement of energy.</p>

                        <span className='w-36 h-36 bg-orange-400 rounded-full absolute -top-20 -right-10'></span>
                    </div>

                    <div className='bg-white px-6 md:px-9 py-8 md:py-12 rounded-2xl flex flex-col gap-2 relative overflow-hidden hover:scale-105 hover:-skew-2 transition-all duration-700 cursor-pointer hover:shadow-2xl hover:shadow-orange-700 border-[0.1px] border-orange-300'>
                        <SwatchBook size={30} color='black' />
                        <h5 className='text-2xl md:text-3xl font-medium text-black'>Vision</h5>
                        <p className='text-black text-xs md:text-sm'>Committed to being and remaining the leading supplier of premium Diesel Fuel (AGO), ensuring quality, reliability, and value for every customer</p>

                        <span className='w-36 h-36 bg-orange-400 rounded-full absolute -top-20 -right-10'></span>
                    </div>

                    <div className='bg-white px-6 md:px-9 py-8 md:py-12 rounded-2xl flex flex-col gap-2 relative overflow-hidden hover:scale-105 hover:-skew-2 transition-all duration-700 cursor-pointer hover:shadow-2xl hover:shadow-orange-700 border-[0.1px] border-orange-300 md:col-span-2 lg:col-span-1'>
                        <SwatchBook size={30} color='black' />
                        <h5 className='text-2xl md:text-3xl font-medium text-black'>Core Values</h5>
                        <p className='text-black text-xs md:text-sm'>Upholding accountability, ensuring reliability, staying responsive, driving innovation, supporting our clients, and delivering excellence in all we do</p>

                        <span className='w-36 h-36 bg-orange-400 rounded-full absolute -top-20 -right-10'></span>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Mission