'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Hero = () => {
    const [dieselPrice, setDieselPrice] = useState('1,300')

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const res = await fetch('/api/admin/settings')
                if (res.ok) {
                    const data = await res.json()
                    if (data && data.dieselPrice) {
                        setDieselPrice(Number(data.dieselPrice).toLocaleString())
                    }
                }
            } catch (error) {
                console.error('Failed to fetch settings')
            }
        }
        fetchSettings()
    }, [])

    return (
        <main className='flex flex-col lg:flex-row items-center px-6 md:px-20 lg:px-44 py-10 gap-10'>
            <section className='flex flex-col items-center lg:items-start text-center lg:text-left'>
                <div className='w-max p-1 border-2 border-orange-200 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer hover:shadow' data-cursor="hover">
                    <div className='border-2 w-max font-medium px-4 md:px-6 py-2 text-xs md:text-sm border-orange-300 rounded-full'>Nadice Oil and Gas Limited</div>
                </div>
                <h2 className='text-3xl md:text-5xl font-medium max-w-xl font-bricolage mt-5 leading-tight'>Nadice, the Leading Bulk Diesel Supplier in Enugu </h2>
                <p className='text-gray-500 mt-5 max-w-md'>Nadice Oil and Gas Limited is a trusted Diesel (AGO) supplier, delivering high-quality diesel solutions tailored to meet the needs of various industries with reliability and efficiency.</p>

                <div className='flex items-center gap-5 mt-8'>
                    <button className='bg-orange-400 text-white px-6 py-3 cursor-pointer rounded-lg font-medium text-sm md:text-base'>₦{dieselPrice} / litre</button>
                    <Link href="/about" className='bg-transparent border-[1.5px] border-gray-200 text-gray-700 px-6 py-3 cursor-pointer rounded-lg font-medium text-sm md:text-base'>Read more</Link>

                </div>

                <div className='mt-8 flex items-center gap-2'>
                    <div className='bg-black rounded-full w-5 h-5 md:w-6 md:h-6'></div>
                    <p className='text-black text-sm md:text-base'>3,500+ happy clients <span className='text-gray-500 ml-3'>⭐️ ⭐️ ⭐️ ⭐️ 4.8</span></p>
                </div>
            </section>

            <section className='w-full lg:w-1/2'>
                <video src="/nadiceads.mp4" autoPlay loop muted playsInline className='w-full h-[300px] md:h-[450px] object-cover rounded-3xl shadow-2xl' />
            </section>
        </main>
    )
}

export default Hero