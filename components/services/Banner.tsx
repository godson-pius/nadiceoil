'use client'
import { CloudCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const Banner = () => {
    return (
        <main className='py-32 -skew-y-6'>
            <section className='bg-black p-12 flex items-center justify-center gap-10 duration-800 hover:scale-105'>
                <h3 className='text-orange-300 text-center text-3xl font-medium font-bricolage'>Why choose us: </h3>

                <motion.p initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className='flex items-center gap-2'>
                    <CloudCheck className='text-white' size={30} />
                    <span className='text-white text-center text-2xl font-medium'>Transparency</span>
                </motion.p>

                <motion.p initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} className='flex items-center gap-2'>
                    <CloudCheck className='text-white' size={30} />
                    <span className='text-white text-center text-2xl font-medium'>Swift Delivery</span>
                </motion.p>

                <motion.p initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }} viewport={{ once: true }} className='flex items-center gap-2'>
                    <CloudCheck className='text-white' size={30} />
                    <span className='text-white text-center text-2xl font-medium'>Client Support</span>
                </motion.p>

                <motion.p initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.5 }} viewport={{ once: true }} className='flex items-center gap-2'>
                    <CloudCheck className='text-white' size={30} />
                    <span className='text-white text-center text-2xl font-medium'>Expert Drivers</span>
                </motion.p>

                <motion.p initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 2 }} viewport={{ once: true }} className='flex items-center gap-2'>
                    <CloudCheck className='text-white' size={30} />
                    <span className='text-white text-center text-2xl font-medium'>Technical Know-How</span>
                </motion.p>
            </section>
        </main>
    )
}

export default Banner