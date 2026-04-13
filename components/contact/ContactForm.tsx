'use client'
import React from 'react'

const ContactForm = () => {
    return (
        <section id="contact-form" className='px-6 md:px-20 lg:px-44 py-16 md:py-20'>
            <div className='bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden flex flex-col lg:flex-row'>
                <div className='w-full lg:w-1/3 bg-black p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden min-h-[300px] lg:min-h-auto'>
                    <span className='absolute w-64 h-64 bg-orange-400 rounded-full -bottom-20 -right-20 opacity-20 blur-3xl'></span>
                    <div>
                        <h2 className='text-3xl md:text-4xl font-medium font-bricolage mb-6'>Send us a message</h2>
                        <p className='text-gray-400 text-sm md:text-base'>Fill out the form and our team will get back to you within 24 hours.</p>
                    </div>

                    <div className='flex flex-col gap-8 mt-10 lg:mt-0'>
                        <div className='flex items-center gap-4'>
                            <div className='w-12 h-12 bg-orange-400/10 rounded-full flex items-center justify-center border border-orange-400/20'>
                                <div className='w-2 h-2 bg-orange-400 rounded-full animate-pulse'></div>
                            </div>
                            <p className='font-medium text-sm md:text-base'>Fast Response Guaranteed</p>
                        </div>
                    </div>
                </div>

                <div className='w-full lg:w-2/3 p-8 md:p-12'>
                    <form className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-sm font-medium text-gray-700'>Full Name</label>
                            <input 
                                type="text" 
                                placeholder="John Doe" 
                                className='px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:outline-none transition-all duration-300 w-full'
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-sm font-medium text-gray-700'>Email Address</label>
                            <input 
                                type="email" 
                                placeholder="john@example.com" 
                                className='px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:outline-none transition-all duration-300 w-full'
                            />
                        </div>
                        <div className='flex flex-col gap-2 col-span-1 md:col-span-2'>
                            <label className='text-sm font-medium text-gray-700'>Subject</label>
                            <input 
                                type="text" 
                                placeholder="How can we help?" 
                                className='px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:outline-none transition-all duration-300 w-full'
                            />
                        </div>
                        <div className='flex flex-col gap-2 col-span-1 md:col-span-2'>
                            <label className='text-sm font-medium text-gray-700'>Message</label>
                            <textarea 
                                rows={4}
                                placeholder="Write your message here..." 
                                className='px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:outline-none transition-all duration-300 resize-none w-full'
                            />
                        </div>

                        <div className='col-span-1 md:col-span-2 pt-4'>
                            <button className='bg-black text-white px-8 md:px-10 py-3 md:py-4 cursor-pointer rounded-xl font-medium duration-1000 transition-all hover:scale-95 hover:rounded-4xl relative group w-full md:w-max'>
                                Send Message
                                <span className='absolute -inset-px group-hover:border duration-700 transition-all border-black hidden animate-ping group-hover:border-orange-400 rounded-4xl group-hover:block'></span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
