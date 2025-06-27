'use client'

import React, { useEffect, useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setMobileDropdown(null)
  }

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name))
  }

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdown((prev) => (prev === name ? null : name))
  }

  return (
    <header className="">
      <nav
        className={`fixed w-full z-50 transition-all duration-300 border-[1px] border-green-500 ${
          scrollPosition > 50 ? 'bg-black/70 backdrop-blur-md py-3' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center text-white">
          <a href="/" className="text-2xl font-serif tracking-wider text-[#C4A484]">
            Roy&apos;s Photos
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Portfolio */}
          {/* Portfolio Dropdown */}
            <div className="relative group">
              <button
                className="hover:text-[#C4A484] transition-colors flex items-center gap-1"
                onClick={() => toggleDropdown('portfolio')}
              >
                Portfolio
                <i className={`fas fa-chevron-down transition-transform duration-300 ${openDropdown === 'portfolio' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'portfolio' && (
                <div
                  className="absolute top-full mt-3 w-56 rounded-xl overflow-hidden bg-black/90 backdrop-blur-sm shadow-lg ring-1 ring-white/10 z-40 animate-fade-in"
                >
                  <a href="/portfolio/weddings" className="block px-5 py-3 hover:bg-[#1a1a1a] hover:text-[#C4A484] transition-all duration-200">
                    💍 Weddings
                  </a>
                  <a href="/portfolio/events" className="block px-5 py-3 hover:bg-[#1a1a1a] hover:text-[#C4A484] transition-all duration-200">
                    🎉 Events
                  </a>
                  <a href="/portfolio/nature" className="block px-5 py-3 hover:bg-[#1a1a1a] hover:text-[#C4A484] transition-all duration-200">
                    🌿 Nature
                  </a>
                </div>
              )}
            </div>

            <a href="/about" className="hover:text-[#C4A484] transition-colors">
              About
            </a>

            {/* Services */}
            <div className="relative group">
              <button
                className="hover:text-[#C4A484] transition-colors flex items-center gap-1"
                onClick={() => toggleDropdown('services')}
              >
                Services
                <i className={`fas fa-chevron-down transition-transform duration-300 ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'services' && (
                <div
                  className="absolute top-full mt-3 w-56 rounded-xl overflow-hidden bg-black/90 backdrop-blur-sm shadow-lg ring-1 ring-white/10 z-40 animate-fade-in"
                >
                  <a href="/services/editing" className="block px-5 py-3 hover:bg-[#1a1a1a] hover:text-[#C4A484] transition-all duration-200">
                    ✂️ Editing
                  </a>
                  <a href="/services/prints" className="block px-5 py-3 hover:bg-[#1a1a1a] hover:text-[#C4A484] transition-all duration-200">
                    🖨️ Prints
                  </a>
                  <a href="/services/framing" className="block px-5 py-3 hover:bg-[#1a1a1a] hover:text-[#C4A484] transition-all duration-200">
                    🖼️ Framing
                  </a>
                </div>
              )}
            </div>

            <a href="/contact" className="hover:text-[#C4A484] transition-colors">
              Contact
            </a>
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <a
              href="/login"
              className="bg-[#C4A484] text-black font-semibold py-2 px-4 rounded hover:bg-[#ddb78e]"
            >
              Login / Register
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-black/95 backdrop-blur-lg text-white transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-screen py-6 px-6' : 'max-h-0'
          }`}
        >
          <div className="space-y-4">
            {/* Portfolio with Dropdown */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('portfolio')}
                className="flex justify-between items-center w-full py-2 text-left text-[#C4A484]"
              >
                Portfolio
                <span>{mobileDropdown === 'portfolio' ? '▲' : '▼'}</span>
              </button>
              {mobileDropdown === 'portfolio' && (
                <div className="pl-4 space-y-2 text-white">
                  <a href="/portfolio/weddings" onClick={toggleMenu}>
                    Weddings
                  </a>
                  <a href="/portfolio/events" onClick={toggleMenu}>
                    Events
                  </a>
                  <a href="/portfolio/nature" onClick={toggleMenu}>
                    Nature
                  </a>
                </div>
              )}
            </div>

            <a href="/about" className="block py-2" onClick={toggleMenu}>
              About
            </a>

            {/* Services with Dropdown */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('services')}
                className="flex justify-between items-center w-full py-2 text-left text-[#C4A484]"
              >
                Services
                <span>{mobileDropdown === 'services' ? '▲' : '▼'}</span>
              </button>
              {mobileDropdown === 'services' && (
                <div className="pl-4 space-y-2 text-white">
                  <a href="/services/editing" onClick={toggleMenu}>
                    Editing
                  </a>
                  <a href="/services/prints" onClick={toggleMenu}>
                    Prints
                  </a>
                  <a href="/services/framing" onClick={toggleMenu}>
                    Framing
                  </a>
                </div>
              )}
            </div>

            <a href="/contact" className="block py-2" onClick={toggleMenu}>
              Contact
            </a>

            <a
              href="/login"
              className="block py-2 text-center bg-[#C4A484] text-black rounded font-semibold"
              onClick={toggleMenu}
            >
              Login / Register
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
