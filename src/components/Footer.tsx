import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between mb-12">
            <div className="mb-10 md:mb-0">
              <h2 className="text-2xl font-serif text-[#C4A484] mb-6">Roy's Photos Studio</h2>
              <p className="max-w-md opacity-70 mb-6">
                Creating timeless imagery that captures the essence of moments, emotions, and stories through a cinematic lens.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-[#F5F5F5] hover:text-[#C4A484] transition-colors cursor-pointer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-[#F5F5F5] hover:text-[#C4A484] transition-colors cursor-pointer">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-[#F5F5F5] hover:text-[#C4A484] transition-colors cursor-pointer">
                  <i className="fab fa-pinterest"></i>
                </a>
                <a href="#" className="text-[#F5F5F5] hover:text-[#C4A484] transition-colors cursor-pointer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Navigation</h3>
                <ul className="space-y-2 opacity-70">
                  <li><a href="#" className="hover:text-[#C4A484] transition-colors">Home</a></li>
                  <li><a href="#about" className="hover:text-[#C4A484] transition-colors">About</a></li>
                  <li><a href="#portfolio" className="hover:text-[#C4A484] transition-colors">Portfolio</a></li>
                  <li><a href="#services" className="hover:text-[#C4A484] transition-colors">Services</a></li>
                  <li><a href="#contact" className="hover:text-[#C4A484] transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Services</h3>
                <ul className="space-y-2 opacity-70">
                  <li><a href="#" className="hover:text-[#C4A484] transition-colors">Wedding</a></li>
                  <li><a href="#" className="hover:text-[#C4A484] transition-colors">Portrait</a></li>
                  <li><a href="#" className="hover:text-[#C4A484] transition-colors">Fashion</a></li>
                  <li><a href="#" className="hover:text-[#C4A484] transition-colors">Events</a></li>
                  <li><a href="#" className="hover:text-[#C4A484] transition-colors">Commercial</a></li>
                </ul>
              </div>
              
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-lg font-medium mb-4">Newsletter</h3>
                <p className="opacity-70 mb-4">Subscribe to receive updates on new work and exclusive offers.</p>
                <form className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-white/10 border-none px-4 py-2 flex-grow focus:outline-none focus:ring-1 focus:ring-[#C4A484] text-sm"
                  />
                  <button 
                    type="submit" 
                    className="bg-[#C4A484] text-black px-4 hover:bg-[#D4B494] transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="opacity-60 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Roy's Photos Studio. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Terms of Service</a>
              <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer