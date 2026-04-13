'use client'
import React from 'react'
import { motion } from 'motion/react'

const trust = [
    { icon: "/icons/security.svg", text: "Fidelity Bank" },
    { icon: "/icons/security.svg", text: "Fidelity Bank" },
    { icon: "/icons/security.svg", text: "Fidelity Bank" },
    { icon: "/icons/security.svg", text: "Fidelity Bank" },
    { icon: "/icons/security.svg", text: "Fidelity Bank" },
    { icon: "/icons/security.svg", text: "Fidelity Bank" },
    { icon: "/icons/security.svg", text: "Fidelity Bank" },
    { icon: "/icons/security.svg", text: "Genesis" },
    { icon: "/icons/security.svg", text: "Chicken Republic" },
    { icon: "/icons/security.svg", text: "Ntachiosa" },
]

const Partners = () => {
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
                    {/* Duplicate the array to create a seamless loop */}
                    {[...trust, ...trust, ...trust].map((item, index) => (
                        <div key={index} className='bg-gray-900 w-80 rounded-full p-3 md:p-3 flex flex-none items-center gap-3 border border-white/10'>
                            <div className='bg-white/20 w-10 h-10 md:w-14 md:h-14 flex justify-center items-center rounded-full'>

                            </div>
                            <p className="text-gray-200">{item.text}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Partners