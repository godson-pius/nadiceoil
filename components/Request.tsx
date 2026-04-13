'use client'
import Image from 'next/image'
import { motion } from 'motion/react'
import React from 'react'

const Request = () => {
    return (
        <main>
            <section className='px-6 md:px-20 lg:px-44 py-10 flex flex-col lg:flex-row items-center justify-between gap-10'>
                <div className='w-full'>
                    <div className='w-max p-1 border-2 border-orange-200 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer hover:shadow' data-cursor="hover">
                        <div className='border-2 w-max font-medium px-6 py-2 text-xs md:text-sm border-orange-300 rounded-full'>Request for Diesel</div>
                    </div>
                    <h2 className='text-3xl md:text-5xl font-medium font-bricolage mt-3 max-w-sm'>Make a diesel delivery request.</h2>

                    <div className='mt-10 w-full'>
                        <div className='flex flex-col gap-3 max-w-xl'>
                            <input type='text' placeholder='Name' className='border-2 border-gray-200 rounded-lg p-3 w-full focus:border-orange-400 outline-none transition-all' />
                            <input type='text' placeholder='Email' className='border-2 border-gray-200 rounded-lg p-3 w-full focus:border-orange-400 outline-none transition-all' />
                            <input type='text' placeholder='Phone' className='border-2 border-gray-200 rounded-lg p-3 w-full focus:border-orange-400 outline-none transition-all' />
                            <input type='text' placeholder='Address' className='border-2 border-gray-200 rounded-lg p-3 w-full focus:border-orange-400 outline-none transition-all' />
                            <div className='grid grid-cols-2 gap-3'>
                                <input type='text' placeholder='City' className='border-2 border-gray-200 rounded-lg p-3 w-full focus:border-orange-400 outline-none transition-all' />
                                <input type='text' placeholder='State' className='border-2 border-gray-200 rounded-lg p-3 w-full focus:border-orange-400 outline-none transition-all' />
                            </div>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ y: 150 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 1.5 }}
                // viewport={{ once: true }}
                className='w-full max-w-md lg:max-w-xl'
                >
                    <Image src={'/Typing-bro.svg'} alt='Type here' width={1250} height={1250} className='w-full h-auto' />
                </motion.div>
            </section>
        </main>
    )
}

export default Request