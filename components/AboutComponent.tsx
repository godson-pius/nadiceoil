import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const AboutComponent = () => {
    return (
        <main className='py-20 px-3'>
            <section className='bg-black rounded-3xl p-20'>
                <h2 className='text-5xl font-medium font-bricolage text-center text-white'>Nadice Oil & Gas Limited</h2>
                <div className='w-max p-1 border-2 border-orange-200 rounded-full hover:scale-105 hover:-skew-2 transition-all duration-700 cursor-pointer hover:shadow mx-auto mt-4'>
                    <div className='border-2 w-max font-medium px-10 py-2 text-lg border-orange-300 rounded-full text-orange-100'>Read more about us</div>
                </div>

                <p className='text-gray-200 mt-10 text-center w-250 mx-auto text-2xl leading-9'>
                    We are the leading Diesel (AGO) supplier, ranging from various Diesel products, industrial equipments, to electrical energy generating plant supplies, regardless of your industry. We cater to a wide range of industries which include but not limited to Financial sectors, Banking, Real Estate, Government, Lifestyle, Media, Construction, Communication, Manufacturing, Education, Residence, Restaurants, Entertainment, etc.
                </p>

            </section>
        </main>
    )
}

export default AboutComponent