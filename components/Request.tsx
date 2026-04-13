'use client'
import React, { useState } from 'react'
import Toast from './ui/Toast'
import { motion } from 'motion/react'
import Image from 'next/image'

const Request = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        liters: '',
        address: '',
    })
    const [loading, setLoading] = useState(false)
    const [toast, setToast] = useState({
        isVisible: false,
        message: '',
        type: 'success' as 'success' | 'error'
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const res = await fetch('/api/request', {
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
                    message: data.message || 'Request submitted successfully!',
                    type: 'success'
                })
                setFormData({ name: '', email: '', phone: '', companyName: '', liters: '', address: '' })
            } else {
                setToast({
                    isVisible: true,
                    message: data.message || 'Failed to submit request.',
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
        <main>
            <Toast
                isVisible={toast.isVisible}
                message={toast.message}
                type={toast.type}
                onClose={() => setToast({ ...toast, isVisible: false })}
            />
            <section className='px-6 md:px-20 lg:px-44 py-10 flex flex-col lg:flex-row items-center justify-between gap-10'>
                <div className='w-full'>
                    <div className='w-max p-1 border-2 border-orange-200 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer hover:shadow' data-cursor="hover">
                        <div className='border-2 w-max font-medium px-6 py-2 text-xs md:text-sm border-orange-300 rounded-full'>Request for Diesel</div>
                    </div>
                    <h2 className='text-3xl md:text-5xl font-medium font-bricolage mt-3 max-w-sm'>Make a diesel delivery request.</h2>

                    <div className='mt-10 w-full'>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-3 max-w-xl'>
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

                            <input
                                type='text'
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder='Full Name'
                                className='border-2 border-gray-200 rounded-lg p-3 w-full focus:border-orange-400 outline-none transition-all'
                            />
                            <input
                                type='email'
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder='Email Address'
                                className='border-2 border-gray-200 rounded-lg p-3 w-full focus:border-orange-400 outline-none transition-all'
                            />
                            <input
                                type='text'
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder='Phone Number'
                                className='border-2 border-gray-200 rounded-lg p-3 w-full focus:border-orange-400 outline-none transition-all'
                            />
                            <input
                                type='text'
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                required
                                placeholder='Company Name'
                                className='border-2 border-gray-200 rounded-lg p-3 w-full focus:border-orange-400 outline-none transition-all'
                            />
                            <input
                                type='text'
                                name="liters"
                                value={formData.liters}
                                onChange={handleChange}
                                required
                                placeholder='Number of Liters'
                                className='border-2 border-gray-200 rounded-lg p-3 w-full focus:border-orange-400 outline-none transition-all'
                            />
                            <input
                                type='text'
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                placeholder='Delivery Address'
                                className='border-2 border-gray-200 rounded-lg p-3 w-full focus:border-orange-400 outline-none transition-all'
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className='bg-orange-400 text-white px-8 py-3 rounded-lg font-medium mt-4 hover:scale-105 transition-all duration-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-orange-200'>
                                {loading ? 'Submitting...' : 'Submit Request'}
                            </button>
                        </form>
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