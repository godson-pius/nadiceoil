'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LayoutDashboard, Settings, LogOut, Users, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const router = useRouter()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const handleLogout = async () => {
        await fetch('/api/admin/logout', { method: 'POST' })
        router.push('/admin/login')
    }

    const navItems = [
        { name: 'Requests', href: '/admin/dashboard', icon: LayoutDashboard },
        { name: 'Partners', href: '/admin/dashboard/partners', icon: Users },
        { name: 'Settings', href: '/admin/dashboard/settings', icon: Settings },
    ]

    const SidebarContent = () => (
        <>
            <span className='absolute w-44 h-44 bg-orange-400 rounded-full -bottom-10 -right-10 opacity-10 blur-3xl'></span>

            <div className="flex items-center gap-3 relative z-10 mb-8">
                <div className="w-10 h-10 bg-orange-400 rounded-xl flex items-center justify-center text-white font-bricolage font-bold text-lg shadow-lg">
                    N
                </div>
                <span className="font-bricolage text-xl font-medium tracking-wide text-white">Admin</span>
            </div>

            <nav className="flex-1 flex flex-col gap-2 relative z-10">
                {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-orange-400 text-white font-medium shadow-lg shadow-orange-400/20' : 'text-gray-400 hover:bg-gray-900 hover:text-white'
                                }`}
                        >
                            <item.icon size={20} />
                            {item.name}
                        </Link>
                    )
                })}
            </nav>

            <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-all mt-auto relative z-10"
            >
                <LogOut size={20} />
                Logout
            </button>
        </>
    )

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row relative">
            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between bg-black p-4 sticky top-0 z-40 border-b border-gray-800">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-400 rounded-lg flex items-center justify-center text-white font-bricolage font-bold text-sm shadow-lg">
                        N
                    </div>
                    <span className="font-bricolage text-lg font-medium tracking-wide text-white">Admin</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(true)} className="text-white p-2 bg-gray-900 rounded-lg">
                    <Menu size={24} />
                </button>
            </div>

            {/* Desktop Sidebar */}
            <aside className="hidden md:flex flex-col gap-8 w-64 bg-black text-white p-6 min-h-screen shrink-0 relative overflow-hidden top-0">
                <SidebarContent />
            </aside>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/60 z-50 md:hidden backdrop-blur-sm"
                        />
                        <motion.aside
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 left-0 w-64 bg-black p-6 flex flex-col z-50 md:hidden overflow-hidden shadow-2xl"
                        >
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 bg-gray-900 rounded-full z-20 transition-colors"
                            >
                                <X size={20} />
                            </button>
                            <SidebarContent />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="flex-1 p-4 md:p-8 w-full max-w-[100vw] overflow-y-auto md:h-screen bg-gray-50/50 pb-20 md:pb-8">
                {children}
            </main>
        </div>
    )
}
