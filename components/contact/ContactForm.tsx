"use client"

import React, { useState } from 'react'
import Toast from '../ui/Toast'
import { motion } from 'framer-motion'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [loading, setLoading] = useState(false)
    const [toast, setToast] = useState({
        isVisible: false,
        message: '',
        type: 'success' as 'success' | 'error'
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await res.json()

            if (res.ok) {
                setToast({
                    isVisible: true,
                    message: data.message || 'Message sent successfully!',
                    type: 'success'
                })
                setFormData({ name: '', email: '', subject: '', message: '' })
            } else {
                setToast({
                    isVisible: true,
                    message: data.message || 'Failed to send message.',
                    type: 'error'
                })
            }
        } catch (error) {
            setToast({
                isVisible: true,
                message: 'An error occurred. Please try again later.',
                type: 'error'
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="contact-form" className='px-6 md:px-20 lg:px-44 py-16 md:py-20'>
            <Toast
                isVisible={toast.isVisible}
                message={toast.message}
                type={toast.type}
                onClose={() => setToast({ ...toast, isVisible: false })}
            />

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
                    {toast.isVisible && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`mb-6 p-4 rounded-xl border flex items-center gap-3 ${toast.type === 'success'
                                    ? 'bg-orange-50 border-orange-200 text-orange-800'
                                    : 'bg-red-50 border-red-200 text-red-800'
                                }`}>
                            <div className={`w-2 h-2 rounded-full animate-pulse ${toast.type === 'success' ? 'bg-orange-400' : 'bg-red-500'}`}></div>
                            <p className='text-sm font-medium'>{toast.message}</p>
                        </motion.div>
                    )}
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-sm font-medium text-gray-700'>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                                className='px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:outline-none transition-all duration-300 w-full'
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-sm font-medium text-gray-700'>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="john@example.com"
                                className='px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:outline-none transition-all duration-300 w-full'
                            />
                        </div>
                        <div className='flex flex-col gap-2 col-span-1 md:col-span-2'>
                            <label className='text-sm font-medium text-gray-700'>Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder="How can we help?"
                                className='px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:outline-none transition-all duration-300 w-full'
                            />
                        </div>
                        <div className='flex flex-col gap-2 col-span-1 md:col-span-2'>
                            <label className='text-sm font-medium text-gray-700'>Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                placeholder="Write your message here..."
                                className='px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:outline-none transition-all duration-300 resize-none w-full'
                            />
                        </div>

                        <div className='col-span-1 md:col-span-2 pt-4'>
                            <button
                                type="submit"
                                disabled={loading}
                                className='bg-black text-white px-8 md:px-10 py-3 md:py-4 cursor-pointer rounded-xl font-medium duration-1000 transition-all hover:scale-95 disabled:opacity-50 disabled:cursor-not-allowed hover:rounded-4xl relative group w-full md:w-max'>
                                {loading ? 'Sending...' : 'Send Message'}
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
