'use client'
import { ChessQueen, SwatchBook } from 'lucide-react'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Mission = () => {
    return (
        <main className='py-20 px-3'>
            <section className='flex flex-col justify-center bg-orange-900 rounded-4xl py-24 px-28 relative overflow-hidden'>
                <span className='absolute w-lg h-96 bg-orange-400 rounded-full -top-20 -left-20 opacity-10'></span>
                <div className='w-full flex justify-between items-center px-10'>
                    <h2 className='text-2xl font-medium font-bricolage text-left w-120 text-white'>Driven by precision, inspired by innovation, and grounded in integrity.</h2>
                    <div className='w-60 text-center p-2 border-2 border-orange-200 rounded-full hover:scale-105 hover:-skew-2 transition-all duration-700 cursor-pointer hover:shadow relative' data-cursor="hover">
                        <TypeAnimation
                            sequence={[
                                'Mission',
                                2000,
                                'Vision',
                                2000,
                                'Core Values',
                                2000,
                            ]}
                            repeat={Infinity}
                            className='font-medium px-10 py-2 text-xl border-red-300 rounded-full text-white'
                        />
                        <span className='absolute inset-1 border-2 border-red-300 rounded-full'></span>
                    </div>
                </div>

                <div className='grid grid-cols-3 items-center justify-center gap-10 px-10 mt-14'>
                    <div className='bg-white px-9 py-12 rounded-2xl flex flex-col gap-2 relative overflow-hidden hover:scale-105 hover:-skew-2 transition-all duration-700 cursor-pointer hover:shadow-2xl hover:shadow-orange-700 border-[0.1px] border-orange-300'>
                        <SwatchBook size={30} color='black' />
                        <h5 className='text-3xl font-medium text-black'>Mission</h5>
                        <p className='text-black text-sm'>Cutting costs for our clients by ending the epidemic mentality of high-priced supplies of petroleum products and procurement of energy.</p>

                        <span className='w-36 h-36 bg-orange-400 rounded-full absolute -top-20 -right-10'></span>
                    </div>

                    <div className='bg-white px-9 py-12 rounded-2xl flex flex-col gap-2 relative overflow-hidden hover:scale-105 hover:-skew-2 transition-all duration-700 cursor-pointer hover:shadow-2xl hover:shadow-orange-700 border-[0.1px] border-orange-300'>
                        <SwatchBook size={30} color='black' />
                        <h5 className='text-3xl font-medium text-black'>Vision</h5>
                        <p className='text-black text-sm'>Committed to being and remaining the leading supplier of premium Diesel Fuel (AGO), ensuring quality, reliability, and value for every customer</p>

                        <span className='w-36 h-36 bg-orange-400 rounded-full absolute -top-20 -right-10'></span>
                    </div>

                    <div className='bg-white px-9 py-12 rounded-2xl flex flex-col gap-2 relative overflow-hidden hover:scale-105 hover:-skew-2 transition-all duration-700 cursor-pointer hover:shadow-2xl hover:shadow-orange-700 border-[0.1px] border-orange-300'>
                        <SwatchBook size={30} color='black' />
                        <h5 className='text-3xl font-medium text-black'>Core Values</h5>
                        <p className='text-black text-sm'>Upholding accountability, ensuring reliability, staying responsive, driving innovation, supporting our clients, and delivering excellence in all we do</p>

                        <span className='w-36 h-36 bg-orange-400 rounded-full absolute -top-20 -right-10'></span>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Mission