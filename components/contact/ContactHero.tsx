import Image from 'next/image'
import React from 'react'

const ContactHero = () => {
    return (
        <main className='flex flex-col lg:flex-row items-center px-6 md:px-20 lg:px-44 py-10 gap-10'>
            <section className='flex flex-col items-center lg:items-start text-center lg:text-left'>
                <div className='w-max p-1 border-2 border-orange-200 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer hover:shadow' data-cursor="hover">
                    <div className='border-2 w-max font-medium px-4 md:px-6 py-2 text-xs md:text-sm border-orange-300 rounded-full'>Contact us</div>
                </div>
                <h2 className='text-3xl md:text-5xl font-medium max-w-xl font-bricolage mt-5 leading-tight'>Get in Touch with Nadice Oil & Gas</h2>
                <p className='text-gray-500 mt-5 max-w-2xl'>We are here to assist you with all your diesel supply and energy procurement needs. Whether you have questions about our services, pricing, or delivery schedules, our team is ready to provide the answers you need.</p>

                <p className='text-gray-500 mt-2 max-w-2xl text-sm md:text-base'>Reach out to us today and experience the reliability and professionalism that defines Nadice Oil and Gas Limited. Your satisfaction is our priority, and we are committed to delivering excellence every step of the way.</p>

                <div className='flex flex-col md:flex-row items-center gap-5 mt-8'>
                    <a href="#contact-form" className='bg-orange-400 text-white px-6 py-3 cursor-pointer rounded-lg font-medium text-sm md:text-base w-full md:w-auto text-center'>Send a Message</a>
                    <div className='flex items-center gap-2'>
                        <div className='bg-black rounded-full w-5 h-5 md:w-6 md:h-6'></div>
                        <p className='text-black text-sm md:text-base'>24/7 Customer Support <span className='text-gray-500 ml-3'>⭐️ ⭐️ ⭐️ ⭐️ 5.0</span></p>
                    </div>
                </div>
            </section>

            <section className='w-full lg:w-1/2'>
                <div className="w-full h-[300px] md:h-[450px] rounded-3xl lg:rounded-l-full lg:rounded-r-none border-l-2 border-white bg-[url('/contact_hero.png')] bg-cover bg-center shadow-2xl relative group overflow-hidden">
                    <div className='absolute border-l-2 border-white inset-1 rounded-3xl lg:rounded-l-full lg:rounded-r-none group-hover:left-2 transition-all duration-700 group-hover:shadow-2xl'></div>
                    <div className='absolute border-l-2 border-white inset-2 rounded-3xl lg:rounded-l-full lg:rounded-r-none group-hover:left-4 transition-all duration-700 group-hover:shadow-2xl'></div>
                    <div className='absolute border-l-2 border-white inset-3 rounded-3xl lg:rounded-l-full lg:rounded-r-none group-hover:left-6 transition-all duration-700 group-hover:shadow-2xl'></div>
                    <div className='absolute border-l-2 border-white inset-4 rounded-3xl lg:rounded-l-full lg:rounded-r-none group-hover:left-8 transition-all duration-700 group-hover:shadow-2xl'></div>
                </div>
            </section>
        </main>
    )
}

export default ContactHero
