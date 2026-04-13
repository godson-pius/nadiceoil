'use client'
import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, XCircle, X } from 'lucide-react'

interface ToastProps {
    message: string
    type: 'success' | 'error'
    isVisible: boolean
    onClose: () => void
}

const Toast: React.FC<ToastProps> = ({ message, type, isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose()
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [isVisible, onClose])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                    className="fixed bottom-10 right-6 md:right-10 z-[100] flex items-center gap-3 p-4 rounded-2xl shadow-2xl backdrop-blur-md border min-w-[300px] max-w-md"
                    style={{
                        backgroundColor: type === 'success' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.9)',
                        borderColor: type === 'success' ? '#fb923c' : '#ef4444' // orange-400 or red-500
                    }}
                >
                    <div className={`p-2 rounded-xl ${type === 'success' ? 'bg-orange-100 text-orange-500' : 'bg-red-100 text-red-500'}`}>
                        {type === 'success' ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
                    </div>
                    
                    <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900 font-bricolage">
                            {type === 'success' ? 'Success!' : 'Something went wrong'}
                        </p>
                        <p className="text-xs text-gray-600 mt-0.5">{message}</p>
                    </div>

                    <button 
                        onClick={onClose}
                        className="p-1 hover:bg-gray-100 rounded-lg transition-colors text-gray-400"
                    >
                        <X size={18} />
                    </button>

                    {/* Progress bar */}
                    <motion.div 
                        initial={{ width: '100%' }}
                        animate={{ width: '0%' }}
                        transition={{ duration: 5, ease: 'linear' }}
                        className={`absolute bottom-0 left-0 h-1 rounded-full ${type === 'success' ? 'bg-orange-400' : 'bg-red-500'}`}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Toast
