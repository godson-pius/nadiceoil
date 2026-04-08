import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <main className='flex items-center px-44 py-10 gap-10'>
            <section className='flex flex-col'>
                <div className='w-max p-1 border-2 border-orange-200 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer hover:shadow' data-cursor="hover">
                    <div className='border-2 w-max font-medium px-6 py-2 text-sm border-orange-300 rounded-full'>About us</div>
                </div>
                <h2 className='text-5xl font-medium w-150 font-bricolage mt-5'>We are the Leading Bulk Diesel Supplier in Enugu.</h2>
                <p className='text-gray-500 mt-5 w-170'>We are the leading Diesel (AGO) supplier, ranging from various Diesel products, industrial equipments, to electrical energy generating plant supplies, regardless of your industry. We cater to a wide range of industries which include but not limited to Financial sectors, Banking, Real Estate, Government, Lifestyle, Media, Construction, Communication, Manufacturing, Education, Residence, Restaurants, Entertainment, etc.</p>

                <p className='text-gray-500 mt-5 w-170'>Our experience in diesel delivery services cut across Residentials and Commercials.
                    We are committed to keeping businesses, homes, corporate and government bodies afloat without light-outs with our state-of-the-art premium diesel delivery networks.
                    We do not only bring exceptional diesel supply services to you but we also serve you with industry-leading expertise alongside quality products at competitive pricing through our best-in-class technologies.
                    We are accountable, reliable and responsive. We deliver what you need, when you need it, and wherever you need it.</p>

                <div className='flex items-center gap-5 mt-8'>
                    <button className='bg-orange-400 text-white px-6 py-3 cursor-pointer rounded-lg font-medium'>Request Delivery</button>
                    <div className='flex items-center gap-2'>
                        <div className='bg-black rounded-full w-6 h-6'></div>
                        <p className='text-black'>3,500+ happy clients <span className='text-gray-500 ml-3'>⭐️ ⭐️ ⭐️ ⭐️ 4.8</span></p>
                    </div>
                </div>
            </section>

            <section className='w-full'>
                <div className="w-full h-[450px] rounded-l-full border-l-2 border-white bg-[url('/nadicebg2.png')] bg-cover bg-center shadow-2xl relative group overflow-hidden">
                    <div className='absolute border-l-2 border-white inset-1 rounded-l-full group-hover:left-2 transition-all duration-700 group-hover:shadow-2xl'></div>
                    <div className='absolute border-l-2 border-white inset-2 rounded-l-full group-hover:left-4 transition-all duration-700 group-hover:shadow-2xl'></div>
                    <div className='absolute border-l-2 border-white inset-3 rounded-l-full group-hover:left-6 transition-all duration-700 group-hover:shadow-2xl'></div>
                    <div className='absolute border-l-2 border-white inset-4 rounded-l-full group-hover:left-8 transition-all duration-700 group-hover:shadow-2xl'></div>
                </div>
            </section>
        </main>
    )
}

export default Hero