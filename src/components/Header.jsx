import React from 'react'

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold text-amber-400 tracking-wide">
          My<span className="text-white">Gallery</span>
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6">
          <a href="#" className="hover:text-amber-400 transition">Home</a>
          <a href="#" className="hover:text-amber-400 transition">Gallery</a>
          <a href="#" className="hover:text-amber-400 transition">About</a>
          <a href="#" className="hover:text-amber-400 transition">Contact</a>
        </nav>

        {/* Mobile Menu Icon (for small screens) */}
        <div className="md:hidden cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M3.75 5.75h16.5M3.75 12h16.5m-16.5 6.25h16.5" />
          </svg>
        </div>
      </div>
    </header>
  )
}

export default Header
