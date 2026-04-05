import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <main>
            <header className='backdrop-blur-md fixed w-full z-50'>
                <nav className='px-20 flex justify-between items-center w-full py-2'>
                    <div className='flex items-center gap-20'>
                        <Link href={'/'}>
                            <Image src="/logo.png" alt="Logo" width={80} height={80} />
                        </Link>
                        <ul className='flex items-center gap-14'>
                            <Link href={'#'}>Home</Link>
                            <Link href={'#'}>About</Link>
                            <Link href={'#'}>Products</Link>
                            <Link href={'#'}>Contact</Link>
                        </ul>
                    </div>

                    {/* Request */}
                    <button className='bg-black text-white px-6 py-3 cursor-pointer rounded-lg font-medium'>Get Request</button>
                </nav>
            </header>
            <div className='w-full h-[1.5px] bg-gray-100 mt-28'></div>
        </main>
    )
}

export default Header