'use client'
import { Mail, MapPin, PhoneCall } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ContactInfo = () => {
    const [settings, setSettings] = useState({
        address: 'Plot No 2, within 4 corners Enugu, along Enugu-Port Harcourt express road Ozalla, Nkanu west L.G.A Enugu State.',
        phone: '+(234) 903 334 1839',
        email: 'support@nadiceoilltd.com'
    })

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const res = await fetch('/api/admin/settings')
                if (res.ok) {
                    const data = await res.json()
                    if (data) {
                        setSettings(prev => ({
                            address: data.address || prev.address,
                            phone: data.phone || prev.phone,
                            email: data.email || prev.email
                        }))
                    }
                }
            } catch (error) {
                console.error('Failed to fetch settings')
            }
        }
        fetchSettings()
    }, [])

    return (
        <section className='px-6 md:px-20 lg:px-44 py-16 md:py-20 bg-gray-50/50'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10'>
                {/* Address Card */}
                <div className='bg-white px-9 py-12 rounded-3xl flex flex-col gap-4 relative overflow-hidden hover:scale-105 transition-all duration-700 cursor-pointer shadow-sm hover:shadow-2xl border border-gray-100 group'>
                    <div className='w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center group-hover:bg-orange-400 group-hover:text-white transition-all duration-700'>
                        <MapPin size={28} />
                    </div>
                    <h5 className='text-2xl font-medium font-bricolage text-black'>Our Office</h5>
                    <p className='text-gray-600 text-sm leading-relaxed'>{settings.address}</p>
                    
                    <span className='w-32 h-32 bg-orange-400/5 rounded-full absolute -top-16 -right-16 group-hover:bg-orange-400/10 transition-all duration-700'></span>
                </div>

                {/* Phone Card */}
                <div className='bg-white px-9 py-12 rounded-3xl flex flex-col gap-4 relative overflow-hidden hover:scale-105 transition-all duration-700 cursor-pointer shadow-sm hover:shadow-2xl border border-gray-100 group'>
                    <div className='w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center group-hover:bg-orange-400 group-hover:text-white transition-all duration-700'>
                        <PhoneCall size={28} />
                    </div>
                    <h5 className='text-2xl font-medium font-bricolage text-black'>Phone Number</h5>
                    <p className='text-gray-600 text-sm leading-relaxed'>Call us directly for urgent supplies and inquiries.</p>
                    <p className='text-black font-semibold mt-2 text-lg'>{settings.phone}</p>
                    
                    <span className='w-32 h-32 bg-orange-400/5 rounded-full absolute -top-16 -right-16 group-hover:bg-orange-400/10 transition-all duration-700'></span>
                </div>

                {/* Email Card */}
                <div className='bg-white px-9 py-12 rounded-3xl flex flex-col gap-4 relative overflow-hidden hover:scale-105 transition-all duration-700 cursor-pointer shadow-sm hover:shadow-2xl border border-gray-100 group'>
                    <div className='w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center group-hover:bg-orange-400 group-hover:text-white transition-all duration-700'>
                        <Mail size={28} />
                    </div>
                    <h5 className='text-2xl font-medium font-bricolage text-black'>Email Address</h5>
                    <p className='text-gray-600 text-sm leading-relaxed'>Send us an email for quotes and partnerships.</p>
                    <p className='text-black font-semibold mt-2 text-lg'>{settings.email}</p>
                    
                    <span className='w-32 h-32 bg-orange-400/5 rounded-full absolute -top-16 -right-16 group-hover:bg-orange-400/10 transition-all duration-700'></span>
                </div>
            </div>
        </section>
    )
}

export default ContactInfo
