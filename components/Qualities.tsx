'use client'
import { Building2, DatabaseZap, ShieldCheck } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'

const Qualities = () => {
    return (
        <main className='py-20 px-3'>
            <section className='flex flex-col justify-center bg-gray-100 rounded-3xl md:rounded-4xl pt-16 md:pt-24 pb-10'>
                <h2 className='text-3xl md:text-5xl font-medium font-bricolage text-center px-6'>Nadice Oil & Gas</h2>
                <div className='w-max p-1 border-2 border-orange-200 rounded-full hover:scale-105 hover:-skew-2 transition-all duration-700 cursor-pointer hover:shadow mx-auto mt-4' data-cursor="hover">
                    <div className='border-2 w-max font-medium px-6 md:px-10 py-1.5 md:py-2 text-sm md:text-lg border-orange-300 rounded-full'>Leading company in oil & gas</div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center my-10 gap-5 px-4 md:px-10'>
                    <div
                        className='flex flex-col items-center bg-white rounded-3xl p-12 md:p-24 duration-700 hover:-skew-2 transition-all'>
                        <ShieldCheck size={60} className='md:w-20 md:h-20' />
                        <h5 className='text-3xl md:text-4xl font-medium mt-3 text-center'>Licensed & Insured</h5>
                        <p className='text-gray-500 text-base md:text-lg'>RC 34533</p>
                    </div>

                    <div
                        className='flex flex-col items-center bg-white rounded-3xl p-12 md:p-24 duration-700 hover:-skew-2 transition-all'>
                        <DatabaseZap size={60} className='md:w-20 md:h-20' />
                        <h5 className='text-3xl md:text-4xl font-medium mt-3 text-center'>Well Structured</h5>
                        <p className='text-gray-500 text-base md:text-lg'>Organization</p>
                    </div>

                    <div
                        className='flex flex-col items-center bg-white rounded-3xl p-12 md:p-24 duration-700 hover:-skew-2 transition-all md:col-span-2'>
                        <Building2 size={60} className='md:w-20 md:h-20' />
                        <h5 className='text-3xl md:text-4xl font-medium mt-3 text-center'>Leading Company</h5>
                        <p className='text-gray-500 text-base md:text-lg'>In Diesel Supply</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Qualities