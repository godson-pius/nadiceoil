import ContactForm from '@/components/contact/ContactForm'
import ContactHero from '@/components/contact/ContactHero'
import ContactInfo from '@/components/contact/ContactInfo'
import React from 'react'

const page = () => {
    return (
        <>
            <ContactHero />
            <ContactInfo />
            <ContactForm />
        </>
    )
}

export default page