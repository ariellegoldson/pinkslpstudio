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
  Cog6ToothIcon,
  Bars3Icon
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-garden-200/50 shadow-soft">
      <div className="container-center">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-garden-400 to-pink-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <h1 className="logo-text text-3xl font-semibold bg-gradient-to-r from-garden-600 via-pink-500 to-garden-500 bg-clip-text text-transparent">
                SLP Pink Studio
              </h1>
            </div>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-1">
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
            <div className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-garden-400" />
                <input
                  type="text"
                  placeholder="Quick search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-12 py-2 w-64 rounded-xl border border-garden-200 bg-white/90 backdrop-blur-sm focus:border-garden-400 focus:outline-none focus:ring-2 focus:ring-garden-200 text-sm transition-all duration-200"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <kbd className="text-xs text-garden-500 bg-garden-100 px-1.5 py-0.5 rounded">
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-ink-700 hover:text-garden-600 hover:bg-garden-50 transition-colors duration-200"
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-garden-200/50">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href || 
                  (item.href !== '/' && pathname.startsWith(item.href))
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={clsx(
                      'flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors duration-200',
                      isActive 
                        ? 'bg-gradient-to-r from-garden-100 to-pink-100 text-garden-700' 
                        : 'text-ink-700 hover:text-garden-600 hover:bg-garden-50'
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}