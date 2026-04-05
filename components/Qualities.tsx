'use client'
import { Building2, DatabaseZap, ShieldCheck } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'

const Qualities = () => {
    return (
        <main className='py-20 px-3'>
            <section className='flex flex-col justify-center bg-gray-100 rounded-xl pt-24'>
                <h2 className='text-5xl font-medium font-bricolage text-center'>Nadice Oil & Gas</h2>
                <div className='w-max p-1 border-2 border-orange-200 rounded-full hover:scale-105 hover:-skew-2 transition-all duration-700 cursor-pointer hover:shadow mx-auto mt-2'>
                    <div className='border-2 w-max font-medium px-10 py-2 text-lg border-orange-300 rounded-full'>Leading company in oil & gas</div>
                </div>

                <div className='grid grid-cols-2 items-center justify-center my-10 gap-5 px-10'>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: true }}

                        className='flex flex-col items-center bg-white rounded-3xl p-24 duration-700 hover:-skew-2 transition-all'>
                        <ShieldCheck size={80} />
                        <h5 className='text-4xl font-medium mt-3'>Licensed & Insured</h5>
                        <p className='text-gray-500 text-lg'>RC 34533</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: true }}


                        className='flex flex-col items-center bg-white rounded-3xl p-24 duration-700 hover:-skew-2 transition-all'>
                        <DatabaseZap size={80} />
                        <h5 className='text-4xl font-medium mt-3'>Well Structured</h5>
                        <p className='text-gray-500 text-lg'>Organization</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: true }}

                        className='flex flex-col items-center bg-white rounded-3xl p-24 duration-700 hover:-skew-2 transition-all col-span-2'>
                        <Building2 size={80} />
                        <h5 className='text-4xl font-medium mt-3'>Leading Company</h5>
                        <p className='text-gray-500 text-lg'>In Diesel Supply</p>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}

export default Qualities