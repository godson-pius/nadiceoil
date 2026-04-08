import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <main>
            <header className='backdrop-blur-md backdrop-grayscale backdrop-contrast-100 fixed w-full z-50'>
                <nav className='px-20 flex justify-between items-center w-full py-2'>
                    <div className='flex items-center gap-20'>
                        <Link href={'/'}>
                            <Image src="/logo.png" alt="Logo" width={80} height={80} />
                        </Link>
                        <ul className='flex items-center gap-14'>
                            <Link href={'/'} className='hover:text-orange-400 transition-all duration-700 hover:-skew-2 mix-blend-difference'>Home</Link>
                            <Link href={'/about'} className='hover:text-orange-400 transition-all duration-700 hover:-skew-2 mix-blend-difference'>About</Link>
                            <Link href={'#'} className='hover:text-orange-400 transition-all duration-700 hover:-skew-2 mix-blend-difference'>Services</Link>
                            <Link href={'#'} className='hover:text-orange-400 transition-all duration-700 hover:-skew-2 mix-blend-difference'>Contact</Link>
                        </ul>
                    </div>

                    {/* Request */}
                    <button className='bg-black text-white px-6 py-4 cursor-pointer rounded-xl font-medium duration-1000 transition-all hover:scale-90 hover:rounded-4xl relative group'>
                        Make Request
                        <span className='absolute -inset-px group-hover:border duration-700 transition-all border-black hidden animate-ping group-hover:border-orange-400 rounded-4xl group-hover:block'></span>
                    </button>
                </nav>
            </header>
            <div className='w-full h-[1.5px] bg-gray-100 mt-28'></div>
        </main>
    )
}

export default Header