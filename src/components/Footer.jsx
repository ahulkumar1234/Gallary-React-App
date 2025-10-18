import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-sm md:text-lg font-semibold text-white">
          © {new Date().getFullYear()} My Gallery. All rights reserved.
        </h2>

        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-amber-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-amber-400 transition">Terms of Service</a>
          <a href="#" className="hover:text-amber-400 transition">Contact Us</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
