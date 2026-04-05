'use client'
import Image from 'next/image'
import { motion } from 'motion/react'
import React from 'react'

const Request = () => {
    return (
        <main>
            <section className='px-44 py-10 flex items-center justify-between'>
                <div className='w-full'>
                    <div className='w-max p-1 border-2 border-orange-200 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer hover:shadow'>
                        <div className='border-2 w-max font-medium px-6 py-2 text-sm border-orange-300 rounded-full'>Request for Diesel</div>
                    </div>
                    <h2 className='text-5xl font-medium font-bricolage mt-3 w-sm'>Make a diesel delivery request.</h2>

                    <div className='mt-10 w-full'>
                        <div className='flex flex-col gap-3 w-150'>
                            <input type='text' placeholder='Name' className='border-2 border-gray-200 rounded-lg p-3 w-full' />
                            <input type='text' placeholder='Email' className='border-2 border-gray-200 rounded-lg p-3 w-full' />
                            <input type='text' placeholder='Phone' className='border-2 border-gray-200 rounded-lg p-3 w-full' />
                            <input type='text' placeholder='Address' className='border-2 border-gray-200 rounded-lg p-3 w-full' />
                            <input type='text' placeholder='City' className='border-2 border-gray-200 rounded-lg p-3 w-full' />
                            <input type='text' placeholder='State' className='border-2 border-gray-200 rounded-lg p-3 w-full' />
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ y: 150 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 3 }}
                // viewport={{ once: true }}
                >
                    <Image src={'/Typing-bro.svg'} alt='Type here' width={1250} height={1250} />
                </motion.div>
            </section>
        </main>
    )
}

export default Request