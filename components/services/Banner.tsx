'use client'
import { CloudCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const Banner = () => {
    return (
        <main className='py-20 md:py-32 -skew-y-3 md:-skew-y-6'>
            <section className='bg-black p-8 md:p-12 flex flex-wrap items-center justify-center gap-3 md:gap-3 lg:gap-10 duration-800 hover:scale-105'>
                <h3 className='text-orange-300 text-center text-2xl md:text-3xl font-medium font-bricolage w-full lg:w-auto mb-4 lg:mb-0'>Why choose us: </h3>

                <motion.p initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className='flex items-center gap-2 px-2'>
                    <CloudCheck className='text-white w-6 h-6 md:w-[25px] md:h-[25px]' />
                    <span className='text-white text-center text-xl md:text-2xl font-medium'>Transparency</span>
                </motion.p>

                <motion.p initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true }} className='flex items-center gap-2 px-2'>
                    <CloudCheck className='text-white w-6 h-6 md:w-[25px] md:h-[25px]' />
                    <span className='text-white text-center text-xl md:text-2xl font-medium'>Swift Delivery</span>
                </motion.p>

                <motion.p initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} viewport={{ once: true }} className='flex items-center gap-2 px-2'>
                    <CloudCheck className='text-white w-6 h-6 md:w-[25px] md:h-[25px]' />
                    <span className='text-white text-center text-xl md:text-2xl font-medium'>Client Support</span>
                </motion.p>

                <motion.p initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }} viewport={{ once: true }} className='flex items-center gap-2 px-2'>
                    <CloudCheck className='text-white w-6 h-6 md:w-[25px] md:h-[25px]' />
                    <span className='text-white text-center text-xl md:text-2xl font-medium'>Expert Drivers</span>
                </motion.p>

                <motion.p initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8 }} viewport={{ once: true }} className='flex items-center gap-2 px-2'>
                    <CloudCheck className='text-white w-6 h-6 md:w-[25px] md:h-[25px]' />
                    <span className='text-white text-center text-xl md:text-2xl font-medium'>AGO Service</span>
                </motion.p>
            </section>
        </main>
    )
}

export default Banner