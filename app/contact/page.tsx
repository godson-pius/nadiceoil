import ContactForm from '@/components/contact/ContactForm'
import ContactHero from '@/components/contact/ContactHero'
import ContactInfo from '@/components/contact/ContactInfo'
import React from 'react'

const page = () => {
    return (
        <>
            {/* mongodb+srv://godsonazubuike15_db_user:nadiceoilpassword@nadicecluster.5wnfvmt.mongodb.net/?appName=nadiceCluster */}
            <ContactHero />
            <ContactInfo />
            <ContactForm />
        </>
    )
}

export default page