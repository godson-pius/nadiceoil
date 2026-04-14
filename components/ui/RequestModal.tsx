'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, Mail, Building, Droplets, MapPin, User } from 'lucide-react'

interface RequestModalProps {
    isOpen: boolean
    onClose: () => void
}

const RequestModal = ({ isOpen, onClose }: RequestModalProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        liters: '',
        address: '',
    })
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState({
        isVisible: false,
        message: '',
        type: 'success' as 'success' | 'error'
    })

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

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
                setStatus({
                    isVisible: true,
                    message: data.message || 'Request submitted successfully!',
                    type: 'success'
                })
                setFormData({ name: '', email: '', phone: '', companyName: '', liters: '', address: '' })

                // Auto close after 3 seconds on success
                setTimeout(() => {
                    onClose()
                    setStatus({ isVisible: false, message: '', type: 'success' })
                }, 3000)
            } else {
                setStatus({
                    isVisible: true,
                    message: data.message || 'Failed to submit request.',
                    type: 'error'
                })
            }
        } catch (error) {
            setStatus({
                isVisible: true,
                message: 'An error occurred. Please try again later.',
                type: 'error'
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                    >
                        {/* Header bg decoration */}
                        <div className="absolute top-0 left-0 w-full h-32 bg-orange-400 -translate-y-16 skew-y-3 opacity-10"></div>

                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-all text-gray-500 z-10"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-8 md:p-12 overflow-y-auto">
                            <div className="relative z-10 mb-8">
                                <h3 className="text-3xl font-bricolage font-bold text-gray-900 mb-2">Make Request</h3>
                                <p className="text-gray-500">Provide details for your diesel delivery.</p>
                            </div>

                            {status.isVisible && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`mb-8 p-4 rounded-xl border flex items-center gap-3 ${status.type === 'success'
                                        ? 'bg-orange-50 border-orange-200 text-orange-800'
                                        : 'bg-red-50 border-red-200 text-red-800'
                                        }`}
                                >
                                    <div className={`w-2 h-2 rounded-full animate-pulse ${status.type === 'success' ? 'bg-orange-400' : 'bg-red-500'}`}></div>
                                    <p className="text-sm font-medium">{status.message}</p>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <User size={14} className="text-orange-400" /> Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 outline-none transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Mail size={14} className="text-orange-400" /> Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 outline-none transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Phone size={14} className="text-orange-400" /> Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="+234..."
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 outline-none transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Building size={14} className="text-orange-400" /> Company Name
                                    </label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Company Ltd"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 outline-none transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Droplets size={14} className="text-orange-400" /> Number of Liters
                                    </label>
                                    <input
                                        type="text"
                                        name="liters"
                                        value={formData.liters}
                                        onChange={handleChange}
                                        required
                                        placeholder="e.g. 1000"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 outline-none transition-all"
                                    />
                                </div>

                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <MapPin size={14} className="text-orange-400" /> Delivery Address
                                    </label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter full delivery address"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 outline-none transition-all"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="md:col-span-2 mt-4 w-full bg-black text-white py-4 rounded-xl font-medium text-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-gray-200 hover:bg-orange-400"
                                >
                                    {loading ? 'Processing...' : 'Submit Request'}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default RequestModal
