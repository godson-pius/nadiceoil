'use client'
import React, { useEffect, useState } from 'react'
import { Trash2, Plus, Handshake, Pencil } from 'lucide-react'
import Toast from '@/components/ui/Toast'

export default function DashboardPartners() {
    const [partners, setPartners] = useState([])
    const [loading, setLoading] = useState(true)
    const [toast, setToast] = useState({ isVisible: false, message: '', type: 'success' as 'success' | 'error' })
    
    // Add Partner State
    const [isAdding, setIsAdding] = useState(false)
    const [editPartnerId, setEditPartnerId] = useState<string | null>(null)
    const [newPartner, setNewPartner] = useState({ name: '', logoUrl: '' })
    const [saving, setSaving] = useState(false)

    const fetchPartners = async () => {
        try {
            const res = await fetch('/api/admin/partners')
            if (res.ok) {
                const data = await res.json()
                setPartners(data)
            }
        } catch (error) {
            console.error('Error fetching partners')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPartners()
    }, [])

    const handleDelete = async (id: string) => {
        if (!window.confirm('Are you sure you want to remove this partner?')) return
        try {
            const res = await fetch(`/api/admin/partners/${id}`, { method: 'DELETE' })
            if (res.ok) {
                setToast({ isVisible: true, message: 'Partner removed successfully', type: 'success' })
                fetchPartners()
            } else {
                setToast({ isVisible: true, message: 'Failed to remove partner', type: 'error' })
            }
        } catch (error) {
            setToast({ isVisible: true, message: 'An error occurred', type: 'error' })
        }
    }

    const handleEdit = (partner: any) => {
        setNewPartner({ name: partner.name, logoUrl: partner.logoUrl || '' })
        setEditPartnerId(partner._id)
        setIsAdding(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleCancel = () => {
        setIsAdding(false)
        setEditPartnerId(null)
        setNewPartner({ name: '', logoUrl: '' })
    }

    const handleAddPartner = async (e: React.FormEvent) => {
        e.preventDefault()
        setSaving(true)
        try {
            const url = editPartnerId ? `/api/admin/partners/${editPartnerId}` : '/api/admin/partners'
            const method = editPartnerId ? 'PUT' : 'POST'
            
            const payload = { ...newPartner }
            if (!payload.logoUrl || payload.logoUrl.trim() === '') {
                delete (payload as any).logoUrl
            }
            
            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
            if (res.ok) {
                setToast({ isVisible: true, message: editPartnerId ? 'Partner updated successfully' : 'Partner added successfully', type: 'success' })
                handleCancel()
                fetchPartners()
            } else {
                setToast({ isVisible: true, message: 'Failed to save partner', type: 'error' })
            }
        } catch (error) {
            setToast({ isVisible: true, message: 'An error occurred', type: 'error' })
        } finally {
            setSaving(false)
        }
    }

    return (
        <div className="max-w-6xl mx-auto">
            <Toast isVisible={toast.isVisible} message={toast.message} type={toast.type} onClose={() => setToast({...toast, isVisible: false})} />
            
            <div className="mb-8 items-center flex justify-between">
                <div>
                    <h1 className="text-3xl font-bricolage font-bold text-gray-900">Manage Partners</h1>
                    <p className="text-gray-500 mt-2">Add trusted brands and partners to display on the website.</p>
                </div>
                <button 
                    onClick={() => isAdding ? handleCancel() : setIsAdding(true)}
                    className="flex items-center gap-2 bg-orange-400 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-orange-500 transition-all"
                >
                    {isAdding ? 'Cancel' : <><Plus size={18} /> Add Partner</>}
                </button>
            </div>

            {isAdding && (
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-8 animate-in fade-in slide-in-from-top-4">
                    <h3 className="text-xl font-bricolage font-bold text-gray-900 mb-6">
                        {editPartnerId ? 'Edit Partner' : 'Add New Partner'}
                    </h3>
                    <form onSubmit={handleAddPartner} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-sm font-medium text-gray-700">Partner Name / Brand Name</label>
                            <input 
                                type="text"
                                value={newPartner.name}
                                onChange={(e) => setNewPartner({ ...newPartner, name: e.target.value })}
                                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-all"
                                required
                                placeholder="e.g. Fidelity Bank"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700">Logo URL (Optional)</label>
                            <input 
                                type="text"
                                value={newPartner.logoUrl}
                                onChange={(e) => setNewPartner({ ...newPartner, logoUrl: e.target.value })}
                                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-all"
                                placeholder="e.g. https://example.com/logo.png"
                            />
                        </div>
                        <div className="md:col-span-2 flex justify-end">
                            <button 
                                type="submit"
                                disabled={saving}
                                className="bg-black text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all disabled:opacity-50"
                            >
                                {saving ? 'Saving...' : (editPartnerId ? 'Update Partner' : 'Save Partner')}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                    <h3 className="font-medium text-gray-900">Active Partners ({partners.length})</h3>
                </div>
                
                {loading ? (
                    <div className="p-8 text-center text-gray-500 animate-pulse font-medium">Loading partners...</div>
                ) : partners.length === 0 ? (
                    <div className="p-12 text-center text-gray-500">No partners added yet.</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 divide-y md:divide-y-0 text-sm">
                        {partners.map((partner: any) => (
                            <div key={partner._id} className="p-6 flex items-center justify-between border-b md:border-b-0 md:border-r border-gray-100 hover:bg-gray-50 transition-colors group">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0 overflow-hidden border border-gray-200">
                                        {partner.logoUrl ? (
                                            <img src={partner.logoUrl} alt={partner.name} className="w-full h-full object-cover p-1 bg-white" />
                                        ) : (
                                            <Handshake size={20} className="text-gray-400" />
                                        )}
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-900 text-base">{partner.name}</div>
                                        <div className="text-gray-400 text-xs mt-0.5">Added {new Date(partner.createdAt).toLocaleDateString()}</div>
                                    </div>
                                </div>
                                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button 
                                        onClick={() => handleEdit(partner)}
                                        className="p-2 text-blue-400 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all"
                                        title="Edit Partner"
                                    >
                                        <Pencil size={18} />
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(partner._id)}
                                        className="p-2 text-red-300 hover:bg-red-50 hover:text-red-500 rounded-lg transition-all"
                                        title="Remove Partner"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
