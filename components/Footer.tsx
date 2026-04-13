import { FileSymlink, Link2, MailCheck, Map, MonitorSmartphone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-gray-100 pt-16 md:pt-24 mt-20'>
            <section className='px-6 md:px-20 flex flex-col lg:flex-row justify-between items-start border-b-[1.5px] border-gray-300 pb-10 gap-10 lg:gap-0'>
                <div className='max-w-md'>
                    <Image src={'/logo.png'} alt='Logo' width={100} height={100} />
                    <p className='text-gray-700 font-normal mt-4 leading-relaxed'>Nadice Oil & Gas Ltd was established with a vision to bridge the long-standing gap between end-users of energy products and suppliers, delivering exceptional customer service and dependable diesel supply solutions.</p>
                </div>

                <div className='flex flex-col md:flex-row gap-10 md:gap-20 lg:gap-44 w-full lg:w-auto'>
                    <div>
                        <h3 className='text-xl font-medium font-bricolage'>Useful Links</h3>
                        <ul className='mt-5 flex flex-col gap-2'>
                            <div className='flex items-center gap-2 hover:text-orange-400 transition-all duration-700 hover:-skew-2'>
                                <Link2 size={20} />
                                <Link href={'/'} className='cursor-pointer'>Home</Link>
                            </div>
                            <div className='flex items-center gap-2 hover:text-orange-400 transition-all duration-700 hover:-skew-2'>
                                <Link2 size={20} />
                                <Link href={'/about'} className='cursor-pointer'>About</Link>
                            </div>
                            <div className='flex items-center gap-2 hover:text-orange-400 transition-all duration-700 hover:-skew-2'>
                                <Link2 size={20} />
                                <Link href={'/services'} className='cursor-pointer'>Services</Link>
                            </div>
                            <div className='flex items-center gap-2 hover:text-orange-400 transition-all duration-700 hover:-skew-2'>
                                <Link2 size={20} />
                                <Link href={'/contact'} className='cursor-pointer'>Contact</Link>
                            </div>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-xl font-medium font-bricolage'>Contact Details</h3>
                        <ul className='mt-5 flex flex-col gap-4'>
                            <div className='flex items-start gap-2 hover:text-orange-400 transition-all duration-700 hover:-skew-2 max-w-xs md:max-w-md'>
                                <Map size={20} className='shrink-0 mt-1' />
                                <li className='list-none'>Plot No 2, within 4 corners Enugu, along Enugu-Port Harcourt express road Ozalla, Nkanu west L.G.A Enugu State.</li>
                            </div>

                            <div className='flex items-start gap-2 hover:text-orange-400 transition-all duration-700 hover:-skew-2'>
                                <MonitorSmartphone size={20} className='shrink-0' />
                                <li className='list-none'>+(234) 903 334 1839.</li>
                            </div>

                            <div className='flex items-start gap-2 hover:text-orange-400 transition-all duration-700 hover:-skew-2'>
                                <MailCheck size={20} className='shrink-0' />
                                <li className='list-none'>support@nadiceoilltd.com</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Social Media */}
            <section className='flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 gap-6 md:gap-0'>
                <p className='text-sm text-center md:text-left'>Copyrights © {new Date().getFullYear()} All Rights Reserved.</p>
                <div className='flex flex-col gap-[0.5px] items-center md:items-end duration-700 hover:scale-105' data-cursor="brand">
                    <p className='text-xs'>Developed by</p>
                    <Link href={'#'}>
                        <Image src={'/wbt.png'} alt='WBT' width={120} height={120} />
                    </Link>
                </div>
            </section>
        </footer>
    )
}

export default Footer