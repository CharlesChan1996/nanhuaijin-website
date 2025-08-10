'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search, BookOpen, Users, Compass } from 'lucide-react'

const navigation = [
  { name: '首页', href: '/', icon: BookOpen },
  { name: '文化介绍', href: '/culture', icon: Compass },
  { name: '经典著作', href: '/books', icon: BookOpen },
  { name: '学习指导', href: '/learning', icon: Users },
  { name: '实修工具', href: '/tools', icon: Compass },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-primary-200/50 sticky top-0 z-50">
      <nav className="container-custom" aria-label="Global">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">南</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-gradient">南怀瑾文化传承网</h1>
                  <p className="text-xs text-primary-600">传统智慧的现代传播</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link flex items-center space-x-1"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Search and Mobile menu button */}
          <div className="flex lg:flex-1 lg:justify-end items-center space-x-4">
            <button className="p-2 text-primary-600 hover:text-primary-800 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-primary-900/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">南</span>
                    </div>
                    <span className="text-lg font-bold text-gradient">南怀瑾文化</span>
                  </div>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-primary-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-primary-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary-900 hover:bg-primary-50 flex items-center space-x-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}