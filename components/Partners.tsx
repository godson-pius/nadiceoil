'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Image as ImageIcon } from 'lucide-react'

const defaultTrust = [
    { icon: "/icons/security.svg", name: "Fidelity Bank", logoUrl: "" },
    { icon: "/icons/security.svg", name: "Genesis", logoUrl: "" },
    { icon: "/icons/security.svg", name: "Chicken Republic", logoUrl: "" },
    { icon: "/icons/security.svg", name: "Ntachiosa", logoUrl: "" },
]

const Partners = () => {
    const [partners, setPartners] = useState(defaultTrust)

    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const res = await fetch('/api/admin/partners')
                if (res.ok) {
                    const data = await res.json()
                    if (data && data.length > 0) {
                        setPartners(data)
                    }
                }
            } catch (error) {
                console.error('Failed to fetch partners')
            }
        }
        fetchPartners()
    }, [])

    return (
        <section className='py-10 overflow-hidden'>
            <div className='mx-4 md:mx-20 p-2 flex items-center justify-center gap-10 mt-10 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
                <motion.div
                    className='flex gap-x-4 w-max px-4'
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        ease: "linear",
                        duration: 70,
                        repeat: Infinity,
                    }}
                >
                    {/* Duplicate the array heavily to create a seamless loop regardless of how few partners there are */}
                    {[...partners, ...partners, ...partners, ...partners, ...partners].map((item, index) => (
                        <div key={index} className='bg-gray-900 w-80 rounded-full p-3 md:p-3 flex flex-none items-center gap-3 border border-white/10'>
                            <div className='bg-white/20 w-10 h-10 md:w-14 md:h-14 flex justify-center items-center rounded-full overflow-hidden shrink-0'>
                                {item.logoUrl ? (
                                    <img src={item.logoUrl} alt={item.name} className="w-full h-full object-cover" />
                                ) : (
                                    <ImageIcon size={20} className="text-white/50" />
                                )}
                            </div>
                            <p className="text-gray-200 truncate">{item.name}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Partners