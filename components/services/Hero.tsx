import { BookText } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <main className='flex items-center px-44 py-10 gap-10'>
            <section className='flex flex-col'>
                <div className='w-max p-1 border-2 border-orange-200 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer hover:shadow' data-cursor="hover">
                    <div className='border-2 w-max font-medium px-6 py-2 text-sm border-orange-300 rounded-full'>Nadice services</div>
                </div>
                <h2 className='text-5xl font-medium w-150 font-bricolage mt-5'>Reliable Diesel Supply & Energy Solutions</h2>
                <p className='text-gray-500 mt-5 w-170'>Nadice Oil & Gas Ltd, was born out of curiosity to bridge the overdue gap between the end-users of energy products and the manufacturers using our best in class customer services.</p>

                <p className='text-gray-500 mt-5 w-170'>We cover commercial Diesel services. Supplies to corporate organizations, residences, government establishments, offices, estates, etc. Our AGO service delivery is strictly NNPC/DPR required for the day-to-day operations. We leverage our high-quality Diesel delivery networks, standard metering trucks, up-to-date innovative technologies, expert drivers and our haulage expertise in delivering excellence to our esteem clients.</p>

                <div className='flex items-center gap-5 mt-8'>
                    <Link href={'/docs/NADICEBRONCHURE.pdf'} target='_blank' className='w-sm bg-orange-400 text-white px-6 py-3 cursor-pointer rounded-lg font-medium flex items-center gap-2 hover:scale-105 transition-all duration-700 hover:shadow hover:-skew-2 relative'>
                        <BookText />
                        Nadice Bronchure

                        <span className='absolute -inset-1 border-2 border-orange-200 rounded-xl animate-pulse'></span>
                    </Link>
                </div>
            </section>

            <section className='w-full relative group'>
                <video src="/nadiceads2.mp4" autoPlay loop muted playsInline className='w-full h-[450px] rounded-r-full border-l-8 border-gray-200 object-cover shadow-2xl' />
                <div className='absolute border-l-2 right-0 border-white inset-1 rounded-r-full group-hover:left-4 transition-all duration-700 group-hover:shadow-2xl'></div>
                <div className='absolute border-l-2 right-0 border-white inset-2 rounded-r-full group-hover:left-8 transition-all duration-700 group-hover:shadow-2xl'></div>
                <div className='absolute border-l-2 right-0 border-white inset-3 rounded-r-full group-hover:left-12 transition-all duration-700 group-hover:shadow-2xl'></div>
                <div className='absolute border-l-2 right-0 border-white inset-4 rounded-r-full group-hover:left-16 transition-all duration-700 group-hover:shadow-2xl'></div>
            </section>
        </main>
    )
}

export default Hero