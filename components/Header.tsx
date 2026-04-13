'use client'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <main>
            <header className='backdrop-blur-md backdrop-grayscale backdrop-contrast-100 fixed w-full z-50'>
                <nav className='px-6 md:px-20 flex justify-between items-center w-full py-2'>
                    <div className='flex items-center gap-6 md:gap-20'>
                        <Link href={'/'}>
                            <Image src="/logo.png" alt="Logo" width={80} height={80} className='w-16 md:w-20' />
                        </Link>
                        <ul className='hidden lg:flex items-center gap-14'>
                            <Link href={'/'} className='hover:text-orange-400 transition-all duration-700 hover:-skew-2 mix-blend-difference'>Home</Link>
                            <Link href={'/about'} className='hover:text-orange-400 transition-all duration-700 hover:-skew-2 mix-blend-difference'>About</Link>
                            <Link href={'/services'} className='hover:text-orange-400 transition-all duration-700 hover:-skew-2 mix-blend-difference'>Services</Link>
                            <Link href={'/contact'} className='hover:text-orange-400 transition-all duration-700 hover:-skew-2 mix-blend-difference'>Contact</Link>
                        </ul>
                    </div>

                    <div className='flex items-center gap-4'>
                        {/* Request Button */}
                        <button className='bg-black text-white px-4 md:px-6 py-3 md:py-4 cursor-pointer rounded-xl font-medium duration-1000 transition-all hover:scale-90 hover:rounded-4xl relative group text-sm md:text-base'>
                            Make Request
                            <span className='absolute -inset-px group-hover:border duration-700 transition-all border-black hidden animate-ping group-hover:border-orange-400 rounded-4xl group-hover:block'></span>
                        </button>

                        {/* Hamburger Icon */}
                        <button 
                            className='lg:hidden text-black p-2'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div className={`lg:hidden fixed inset-0 top-20 bg-white/95 backdrop-blur-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out z-40 h-screen`}>
                    <ul className='flex flex-col items-center gap-10 pt-20 text-2xl font-medium font-bricolage'>
                        <Link href={'/'} onClick={() => setIsOpen(false)} className='hover:text-orange-400 transition-all'>Home</Link>
                        <Link href={'/about'} onClick={() => setIsOpen(false)} className='hover:text-orange-400 transition-all'>About</Link>
                        <Link href={'/services'} onClick={() => setIsOpen(false)} className='hover:text-orange-400 transition-all'>Services</Link>
                        <Link href={'/contact'} onClick={() => setIsOpen(false)} className='hover:text-orange-400 transition-all'>Contact</Link>
                    </ul>
                </div>
            </header>
            <div className='w-full h-[1.5px] bg-gray-100 mt-28'></div>
        </main>
    )
}

export default Header