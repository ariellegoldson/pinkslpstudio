'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  MagnifyingGlassIcon, 
  PlusIcon,
  HomeIcon,
  UserGroupIcon,
  CalendarIcon,
  ChartBarIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline'
import { clsx } from 'clsx'

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Students', href: '/students', icon: UserGroupIcon },
  { name: 'Schedule', href: '/schedule', icon: CalendarIcon },
  { name: 'Reports', href: '/reports', icon: ChartBarIcon },
  { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
]

export default function Navigation() {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-sage-200 shadow-soft">
      <div className="container-center">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-display font-bold text-pink-600">
              SLP Pink Studio
            </h1>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href || 
                (item.href !== '/' && pathname.startsWith(item.href))
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'nav-link flex items-center space-x-2',
                    isActive && 'nav-link-active'
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>

          {/* Search & Actions */}
          <div className="flex items-center space-x-4">
            {/* Quick Search */}
            <div className="hidden sm:flex items-center space-x-2">
              <div className="relative">
                <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-sage-400" />
                <input
                  type="text"
                  placeholder="Quick search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-64 rounded-xl border border-sage-200 bg-white/80 backdrop-blur-sm focus:border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-100 text-sm"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <kbd className="text-xs text-sage-500 bg-sage-100 px-1.5 py-0.5 rounded">
                    ⌘K
                  </kbd>
                </div>
              </div>
            </div>

            {/* New Session Button */}
            <Link
              href="/sessions/new"
              className="btn-primary flex items-center space-x-2"
            >
              <PlusIcon className="w-5 h-5" />
              <span className="hidden sm:inline">New Session</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}