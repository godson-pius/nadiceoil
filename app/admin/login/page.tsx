'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function AdminLogin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            })

            if (res.ok) {
                router.push('/admin/dashboard')
            } else {
                const data = await res.json()
                setError(data.message || 'Login failed')
            }
        } catch (err) {
            setError('An error occurred. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-black p-8 text-center relative overflow-hidden">
                    <span className='absolute w-32 h-32 bg-orange-400 rounded-full -bottom-10 -right-10 opacity-20 blur-2xl'></span>
                    <h2 className="text-2xl font-bricolage text-white font-medium relative z-10">Admin Portal</h2>
                    <p className="text-gray-400 text-sm mt-2 relative z-10">Sign in to manage Nadice Oil</p>
                </div>
                <div className="p-8">
                    {error && (
                        <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100">
                            {error}
                        </div>
                    )}
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="text-sm font-medium text-gray-700">Username</label>
                            <input 
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-all"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700">Password</label>
                            <input 
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-all"
                                required
                            />
                        </div>
                        <button 
                            type="submit"
                            disabled={loading}
                            className="w-full bg-orange-400 text-white font-medium py-3 rounded-xl mt-6 hover:bg-orange-500 transition-all disabled:opacity-50"
                        >
                            {loading ? 'Authenticating...' : 'Login'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
