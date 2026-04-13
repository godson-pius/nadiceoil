'use client'
import React, { useEffect, useState } from 'react'
import Toast from '@/components/ui/Toast'

export default function SettingsPage() {
    const [settings, setSettings] = useState({
        dieselPrice: 0,
        phone: '',
        email: '',
        address: '',
        mission: '',
        vision: '',
        coreValues: ''
    })
    const [activeTab, setActiveTab] = useState<'pricing' | 'contact' | 'company'>('pricing')
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [toast, setToast] = useState({ isVisible: false, message: '', type: 'success' as 'success' | 'error' })

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const res = await fetch('/api/admin/settings')
                if (res.ok) {
                    const data = await res.json()
                    if (data) {
                        setSettings({
                            dieselPrice: data.dieselPrice || 0,
                            phone: data.phone || '',
                            email: data.email || '',
                            address: data.address || '',
                            mission: data.mission || '',
                            vision: data.vision || '',
                            coreValues: data.coreValues || ''
                        })
                    }
                }
            } catch (error) {
                console.error('Error fetching settings')
            } finally {
                setLoading(false)
            }
        }
        fetchSettings()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSettings({
            ...settings,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSaving(true)
        try {
            const res = await fetch('/api/admin/settings', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(settings)
            })
            if (res.ok) {
                setToast({ isVisible: true, message: 'Settings saved successfully', type: 'success' })
            } else {
                setToast({ isVisible: true, message: 'Failed to save settings', type: 'error' })
            }
        } catch (error) {
            setToast({ isVisible: true, message: 'An error occurred', type: 'error' })
        } finally {
            setSaving(false)
        }
    }

    if (loading) return <div className="animate-pulse p-8 font-medium text-gray-500">Loading settings...</div>

    return (
        <div className="max-w-4xl mx-auto">
            <Toast isVisible={toast.isVisible} message={toast.message} type={toast.type} onClose={() => setToast({...toast, isVisible: false})} />
            
            <div className="mb-8">
                <h1 className="text-3xl font-bricolage font-bold text-gray-900">Site Settings</h1>
                <p className="text-gray-500 mt-2">Manage global text, pricing, and contact information.</p>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                {/* Tabs */}
                <div className="flex gap-6 mb-8 border-b border-gray-100 pb-px">
                    <button 
                        type="button"
                        onClick={() => setActiveTab('pricing')}
                        className={`pb-3 px-1 text-sm font-medium transition-all border-b-2 -mb-px ${activeTab === 'pricing' ? 'border-orange-400 text-orange-500' : 'border-transparent text-gray-400 hover:text-gray-700'}`}
                    >Pricing</button>
                    <button 
                        type="button"
                        onClick={() => setActiveTab('contact')}
                        className={`pb-3 px-1 text-sm font-medium transition-all border-b-2 -mb-px ${activeTab === 'contact' ? 'border-orange-400 text-orange-500' : 'border-transparent text-gray-400 hover:text-gray-700'}`}
                    >Contact Details</button>
                    <button 
                        type="button"
                        onClick={() => setActiveTab('company')}
                        className={`pb-3 px-1 text-sm font-medium transition-all border-b-2 -mb-px ${activeTab === 'company' ? 'border-orange-400 text-orange-500' : 'border-transparent text-gray-400 hover:text-gray-700'}`}
                    >Company Profile</button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    
                    {/* Pricing Section */}
                    {activeTab === 'pricing' && (
                        <section className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                            <h3 className="text-lg font-medium text-gray-900 mb-4 border-b pb-2">Pricing</h3>
                            <div>
                                <label className="text-sm font-medium text-gray-700">Diesel Price per Liter (₦)</label>
                                <input 
                                    type="number"
                                    name="dieselPrice"
                                    value={settings.dieselPrice}
                                    onChange={handleChange}
                                    className="w-full max-w-sm mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-all"
                                />
                            </div>
                        </section>
                    )}

                    {/* Contact Section */}
                    {activeTab === 'contact' && (
                        <section className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                            <h3 className="text-lg font-medium text-gray-900 mb-4 border-b pb-2">Contact Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Phone Number</label>
                                    <input 
                                        type="text"
                                        name="phone"
                                        value={settings.phone}
                                        onChange={handleChange}
                                        className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                                    <input 
                                        type="email"
                                        name="email"
                                        value={settings.email}
                                        onChange={handleChange}
                                        className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-all"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="text-sm font-medium text-gray-700">Physical Address</label>
                                    <input 
                                        type="text"
                                        name="address"
                                        value={settings.address}
                                        onChange={handleChange}
                                        className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-all"
                                    />
                                </div>
                            </div>
                        </section>
                    )}

                    {/* About Section */}
                    {activeTab === 'company' && (
                        <section className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                            <h3 className="text-lg font-medium text-gray-900 mb-4 border-b pb-2">Company Information</h3>
                            <div className="space-y-6">
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Mission Statement</label>
                                    <textarea 
                                        name="mission"
                                        value={settings.mission}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-all resize-none"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Vision Statement</label>
                                    <textarea 
                                        name="vision"
                                        value={settings.vision}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-all resize-none"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Core Values</label>
                                    <textarea 
                                        name="coreValues"
                                        value={settings.coreValues}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-all resize-none"
                                    />
                                </div>
                            </div>
                        </section>
                    )}

                    <div className="pt-4 border-t border-gray-100 flex justify-end">
                        <button 
                            type="submit"
                            disabled={saving}
                            className="bg-orange-400 text-white px-8 py-3 rounded-xl font-medium hover:bg-orange-500 transition-all disabled:opacity-50"
                        >
                            {saving ? 'Saving...' : 'Save Settings'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

