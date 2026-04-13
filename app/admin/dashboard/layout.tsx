'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LayoutDashboard, Settings, LogOut, Users } from 'lucide-react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const router = useRouter()

    const handleLogout = async () => {
        await fetch('/api/admin/logout', { method: 'POST' })
        router.push('/admin/login')
    }

    const navItems = [
        { name: 'Requests', href: '/admin/dashboard', icon: LayoutDashboard },
        { name: 'Partners', href: '/admin/dashboard/partners', icon: Users },
        { name: 'Settings', href: '/admin/dashboard/settings', icon: Settings },
    ]

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="w-full md:w-64 bg-black text-white p-6 flex flex-col gap-8 md:min-h-screen shrink-0 relative overflow-hidden">
                <span className='absolute w-44 h-44 bg-orange-400 rounded-full -bottom-10 -right-10 opacity-10 blur-3xl'></span>
                
                <div className="flex items-center gap-3 relative z-10">
                    <div className="w-10 h-10 bg-orange-400 rounded-xl flex items-center justify-center font-bricolage font-bold text-lg">
                        N
                    </div>
                    <span className="font-bricolage text-xl font-medium tracking-wide">Admin</span>
                </div>

                <nav className="flex-1 flex flex-col gap-2 relative z-10">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link 
                                key={item.name} 
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                                    isActive ? 'bg-orange-400 text-white font-medium shadow-lg shadow-orange-400/20' : 'text-gray-400 hover:bg-gray-900 hover:text-white'
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
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 md:p-10 overflow-y-auto w-full h-screen">
                {children}
            </main>
        </div>
    )
}
