'use client'
import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const isAdmin = pathname?.startsWith('/admin')

    if (isAdmin) {
        return <>{children}</>
    }

    return (
        <>
            <Header />
            <section className="pt-24">
                {children}
            </section>
            <Footer />
        </>
    )
}
