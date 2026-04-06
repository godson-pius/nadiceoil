import { FileSymlink, Link2, MailCheck, Map, MonitorSmartphone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-gray-100 pt-24'>
            <section className='px-44 flex justify-between items-start border-b-[1.5px] border-gray-300 mx-10 pb-10'>
                <div>
                    <Image src={'/logo.png'} alt='Logo' width={100} height={100} />
                    <p className='text-gray-700 font-normal mt-2 w-100'>Nadice Oil & Gas Ltd, was born out of curiosity to bridge the overdue gap between the end-users of energy products and the manufacturers using our best in class customer services.</p>
                </div>

                <div className='flex gap-44'>
                    <div>
                        <h3 className='text-xl font-medium font-bricolage'>Useful Links</h3>
                        <ul className='mt-5 flex flex-col gap-2'>
                            <div className='flex items-center gap-2 hover:text-orange-400 transition-all duration-700 hover:-skew-2'>
                                <Link2 size={20} />
                                <Link href={'/'} className='cursor-pointer'>Home</Link>
                            </div>
                            <div className='flex items-center gap-2 hover:text-orange-400 transition-all duration-700 hover:-skew-2'>
                                <Link2 size={20} />
                                <Link href={'/about'} className='cursor-pointer hover:text-orange-400 transition-all duration-700 hover:-skew-2'>About</Link>
                            </div>
                            <div className='flex items-center gap-2 hover:text-orange-400 transition-all duration-700 hover:-skew-2'>
                                <Link2 size={20} />
                                <Link href={'/services'} className='cursor-pointer hover:text-orange-400 transition-all duration-700 hover:-skew-2'>Services</Link>
                            </div>
                            <div className='flex items-center gap-2 hover:text-orange-400 transition-all duration-700 hover:-skew-2'>
                                <Link2 size={20} />
                                <Link href={'/contact'} className='cursor-pointer hover:text-orange-400 transition-all duration-700 hover:-skew-2'>Contact</Link>
                            </div>
                            <div className='flex items-center gap-2 hover:text-orange-400 transition-all duration-700 hover:-skew-2'>
                                <Link2 size={20} />
                                <Link href={'/request'} className='cursor-pointer hover:text-orange-400 transition-all duration-700 hover:-skew-2'>Request Delivery</Link>
                            </div>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-xl font-medium font-bricolage'>Contact Details</h3>
                        <ul className='mt-5 flex flex-col gap-3'>
                            <div className='flex items-start gap-2 hover:text-orange-400 transition-all duration-700 hover:-skew-2'>
                                <Map size={20} />
                                <li className='w-100'>Plot No 2, within 4 corners Enugu, along Enugu-Port Harcourt express road Ozalla, Nkanu west L.G.A Enugu State.</li>
                            </div>

                            <div className='flex items-start gap-2 hover:text-orange-400 transition-all duration-700 hover:-skew-2'>
                                <MonitorSmartphone size={20} />
                                <li className='w-100'>+(234) 903 334 1839.</li>
                            </div>

                            <div className='flex items-start gap-2 hover:text-orange-400 transition-all duration-700 hover:-skew-2'>
                                <MailCheck size={20} />
                                <li className='w-100'>support@nadiceoilltd.com</li>
                            </div>

                        </ul>
                    </div>
                </div>
            </section>

            {/* Social Media */}
            <section className='flex items-center justify-between mx-44 py-10'>
                <p className='text-sm'>Copyrights © {new Date().getFullYear()} All Rights Reserved.</p>
                <div className='flex flex-col gap-[0.5px] items-end duration-700 hover:scale-105' data-cursor="brand">
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