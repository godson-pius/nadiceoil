import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const AboutComponent = () => {
    return (
        <main className='py-10 md:py-20 px-4 md:px-6'>
            <section className='bg-black rounded-3xl p-8 md:p-20'>
                <h2 className='text-3xl md:text-5xl font-medium font-bricolage text-center text-white'>Nadice Oil & Gas Limited</h2>
                <div className='w-max p-1 border-2 border-orange-200 rounded-full hover:scale-105 hover:-skew-2 transition-all duration-700 cursor-pointer hover:shadow mx-auto mt-6' data-cursor="hover">
                    <div className='border-2 w-max font-medium px-6 md:px-10 py-1.5 md:py-2 text-sm md:text-lg border-orange-300 rounded-full text-orange-100'>Read more about us</div>
                </div>

                <p className='text-gray-200 mt-10 text-center max-w-5xl mx-auto text-lg md:text-2xl leading-relaxed md:leading-9'>
                    We are a leading Diesel (AGO) supplier, providing high-quality diesel solutions tailored to meet the energy needs of businesses across all sectors with efficiency and reliability. We serve a wide range of industries, including Financial Services, Banking, Real Estate, Government, Media, Construction, Telecommunications, Manufacturing, Education, Residential, Hospitality, and more.
                </p>
            </section>
        </main>
    )
}

export default AboutComponent