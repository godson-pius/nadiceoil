'use client'
import React, { useEffect, useState } from 'react'
import { Trash2, X, Eye } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Toast from '@/components/ui/Toast'

export default function DashboardRequests() {
    const [requests, setRequests] = useState([])
    const [loading, setLoading] = useState(true)
    const [toast, setToast] = useState({ isVisible: false, message: '', type: 'success' as 'success' | 'error' })
    const [selectedRequest, setSelectedRequest] = useState<any>(null)

    const fetchRequests = async () => {
        try {
            const res = await fetch('/api/admin/requests')
            if (res.ok) {
                const data = await res.json()
                setRequests(data)
            }
        } catch (error) {
            console.error('Error fetching requests')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchRequests()
    }, [])

    const handleDelete = async (id: string, e: React.MouseEvent) => {
        e.stopPropagation()
        if (!window.confirm('Are you sure you want to delete this request?')) return
        try {
            const res = await fetch(`/api/admin/requests/${id}`, { method: 'DELETE' })
            if (res.ok) {
                setToast({ isVisible: true, message: 'Request deleted successfully', type: 'success' })
                setSelectedRequest(null)
                fetchRequests()
            } else {
                setToast({ isVisible: true, message: 'Failed to delete request', type: 'error' })
            }
        } catch (error) {
            setToast({ isVisible: true, message: 'An error occurred', type: 'error' })
        }
    }

    return (
        <div className="max-w-6xl mx-auto">
            <Toast isVisible={toast.isVisible} message={toast.message} type={toast.type} onClose={() => setToast({...toast, isVisible: false})} />
            
            <div className="mb-8 items-center flex justify-between">
                <div>
                    <h1 className="text-3xl font-bricolage font-bold text-gray-900">Diesel Delivery Requests</h1>
                    <p className="text-gray-500 mt-2">Manage all customer diesel delivery requests here.</p>
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Customer</th>
                                <th className="px-6 py-4">Company</th>
                                <th className="px-6 py-4">Liters</th>
                                <th className="px-6 py-4">Address</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {loading ? (
                                <tr><td colSpan={6} className="px-6 py-8 text-center text-gray-500 animate-pulse font-medium">Loading requests...</td></tr>
                            ) : requests.length === 0 ? (
                                <tr><td colSpan={6} className="px-6 py-8 text-center text-gray-500">No requests found.</td></tr>
                            ) : (
                                requests.map((req: any) => (
                                    <tr 
                                        key={req._id} 
                                        onClick={() => setSelectedRequest(req)}
                                        className="hover:bg-gray-50/50 transition-colors cursor-pointer group"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                                            {new Date(req.createdAt).toLocaleDateString()}
                                            <div className="text-xs text-gray-400">{new Date(req.createdAt).toLocaleTimeString()}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-gray-900 group-hover:text-orange-500 transition-colors">{req.name}</div>
                                            <div className="text-gray-500 text-xs mt-1">{req.phone}</div>
                                            <div className="text-gray-500 text-xs">{req.email}</div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-700">{req.companyName}</td>
                                        <td className="px-6 py-4 font-medium text-orange-600">
                                            <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full">{req.liters} L</span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600 max-w-xs truncate" title={req.address}>{req.address}</td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button 
                                                    className="p-2 text-gray-400 hover:bg-gray-50 hover:text-black rounded-lg transition-all"
                                                    title="View Request"
                                                >
                                                    <Eye size={18} />
                                                </button>
                                                <button 
                                                    onClick={(e) => handleDelete(req._id, e)}
                                                    className="p-2 text-red-300 hover:bg-red-50 hover:text-red-500 rounded-lg transition-all"
                                                    title="Delete Request"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Request View Modal */}
            <AnimatePresence>
                {selectedRequest && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedRequest(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                        >
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                                <h3 className="font-bricolage text-xl font-bold text-gray-900">Request Details</h3>
                                <button 
                                    onClick={() => setSelectedRequest(null)}
                                    className="p-2 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-full transition-all"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="p-6 space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Customer Name</p>
                                        <p className="text-gray-900 font-medium">{selectedRequest.name}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Company</p>
                                        <p className="text-gray-900 font-medium">{selectedRequest.companyName}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Email</p>
                                        <p className="text-gray-900">{selectedRequest.email}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Phone</p>
                                        <p className="text-gray-900">{selectedRequest.phone}</p>
                                    </div>
                                </div>
                                <div className="bg-orange-50 border border-orange-100 p-4 rounded-2xl">
                                    <p className="text-xs font-medium text-orange-400 uppercase tracking-wider mb-1">Requested Volume</p>
                                    <p className="text-orange-700 text-2xl font-bold font-bricolage">{selectedRequest.liters} Liters</p>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Delivery Address</p>
                                    <p className="text-gray-900 p-3 bg-gray-50 rounded-xl border border-gray-100">{selectedRequest.address}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Date Submitted</p>
                                    <p className="text-gray-600">{new Date(selectedRequest.createdAt).toLocaleString()}</p>
                                </div>
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end">
                                <button 
                                    onClick={() => setSelectedRequest(null)}
                                    className="px-6 py-2 bg-black text-white rounded-xl font-medium"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}

