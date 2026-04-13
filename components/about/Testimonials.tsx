import { UserStar } from 'lucide-react'
import React from 'react'

const Testimonials = () => {
    return (
        <main className='py-12 md:py-16'>
            <section className='flex flex-col justify-center items-center px-4 md:px-6'>
                <h2 className='text-3xl md:text-5xl font-medium font-bricolage text-center'>Testimonials</h2>
                <div className='w-max p-1 border-2 border-orange-200 rounded-full hover:scale-105 hover:-skew-2 transition-all duration-700 cursor-pointer hover:shadow mx-auto mt-4' data-cursor="hover">
                    <div className='border-2 w-max font-medium px-6 md:px-10 py-1.5 md:py-2 text-sm md:text-lg border-orange-300 rounded-full'>What our clients say about us</div>
                </div>
                <hr className='w-1/2 my-10 border border-gray-200' />

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-20 lg:px-44'>
                    {/* testimony 1 */}
                    <div className='flex flex-col gap-3 duration-800 transition-all hover:scale-105 relative group p-4 border border-gray-50 rounded-2xl md:border-none md:p-3'>
                        <span className='absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-orange-300 rounded-br-3xl opacity-0 transition-all duration-800 group-hover:opacity-100 group-hover:w-12 group-hover:h-12'></span>
                        <span className='absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-orange-300 rounded-tl-3xl opacity-0 transition-all duration-800 group-hover:opacity-100 group-hover:w-12 group-hover:h-12'></span>

                        <div className='flex items-center gap-2'>
                            <UserStar className='duration-800 transition-colors group-hover:text-orange-400 shrink-0' />
                            <h2 className='font-bricolage font-medium text-xl md:text-2xl'>PetroNova Energy Ltd</h2>
                        </div>
                        <p className='font-medium text-sm md:text-base leading-relaxed line-clamp-5'>Operational excellence is central to Nadice Oil and Gas Limited. As we grow, having partners who understand the energy sector is key to maintaining safe and efficient operations. Nadice continues to support our commitment to reliability and strong performance.</p>

                        <div className='flex items-center gap-2 mt-2'>
                            <div className='w-3 h-3 bg-black rounded-full relative'>
                                <span className='absolute -inset-1 border-2 border-orange-300 rounded-full animate-pulse'></span>
                            </div>
                            <p className='text-xs md:text-sm font-medium'>Daniel Okafor <span className='text-gray-500 block md:inline duration-800 transition-colors group-hover:text-orange-400'>Manager, PetroNova Energy Ltd.</span></p>
                        </div>
                    </div>

                    {/* testimony 2 */}
                    <div className='flex flex-col gap-3 duration-800 transition-all hover:scale-105 relative group p-4 border border-gray-50 rounded-2xl md:border-none md:p-3'>
                        <span className='absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-orange-300 rounded-br-3xl opacity-0 transition-all duration-800 group-hover:opacity-100 group-hover:w-12 group-hover:h-12'></span>
                        <span className='absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-orange-300 rounded-tl-3xl opacity-0 transition-all duration-800 group-hover:opacity-100 group-hover:w-12 group-hover:h-12'></span>

                        <div className='flex items-center gap-2'>
                            <UserStar className='duration-800 transition-colors group-hover:text-orange-400 shrink-0' />
                            <h2 className='font-bricolage font-medium text-xl md:text-2xl'>Meridian Drilling Services</h2>
                        </div>
                        <p className='font-medium text-sm md:text-base leading-relaxed line-clamp-5'>Efficiency and sustainability guide Nadice Oil and Gas Limited. As we scale, we rely on trusted partners to ensure compliance and deliver innovative solutions. Nadice has strengthened our ability to maintain high standards in a changing industry.</p>

                        <div className='flex items-center gap-2 mt-2'>
                            <div className='w-3 h-3 bg-black rounded-full relative'>
                                <span className='absolute -inset-1 border-2 border-orange-300 rounded-full animate-pulse'></span>
                            </div>
                            <p className='text-xs md:text-sm font-medium'>Aisha Bello <span className='text-gray-500 block md:inline duration-800 transition-colors group-hover:text-orange-400'>HOC, Meridian Drilling Services</span></p>
                        </div>
                    </div>

                    {/* testimony 3 */}
                    <div className='flex flex-col gap-3 duration-800 transition-all hover:scale-105 relative group p-4 border border-gray-50 rounded-2xl md:border-none md:p-3'>
                        <span className='absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-orange-300 rounded-br-3xl opacity-0 transition-all duration-800 group-hover:opacity-100 group-hover:w-12 group-hover:h-12'></span>
                        <span className='absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-orange-300 rounded-tl-3xl opacity-0 transition-all duration-800 group-hover:opacity-100 group-hover:w-12 group-hover:h-12'></span>

                        <div className='flex items-center gap-2'>
                            <UserStar className='duration-800 transition-colors group-hover:text-orange-400 shrink-0' />
                            <h2 className='font-bricolage font-medium text-xl md:text-2xl'>Crestfield Petroleum Group</h2>
                        </div>
                        <p className='font-medium text-sm md:text-base leading-relaxed line-clamp-5'>Safety and long-term value remain priorities at Nadice Oil and Gas Limited. In a fast-paced industry, dependable partners are essential. Nadice provides the expertise needed to operate responsibly and stay competitive.</p>

                        <div className='flex items-center gap-2 mt-2'>
                            <div className='w-3 h-3 bg-black rounded-full relative'>
                                <span className='absolute -inset-1 border-2 border-orange-300 rounded-full animate-pulse'></span>
                            </div>
                            <p className='text-xs md:text-sm font-medium'>Tunde Adeyemi <span className='text-gray-500 block md:inline duration-800 transition-colors group-hover:text-orange-400'>CTO, Crestfield Petroleum Group</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Testimonials