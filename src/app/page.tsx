'use client'
import React, { useEffect, useState } from 'react'
import HeroSection from '@/components/Homepage/HeroSection'
import VideoSection from '@/components/Homepage/VideoSection'
import AboutUs from '@/components/Homepage/AboutUs'
import FeaturedWork from '@/components/Homepage/FeaturedWork'
import Services from '@/components/Homepage/Services'
import Testimonials from '@/components/Homepage/Testimonials'
import Contact from '@/components/Homepage/Contact'

const page = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div>
      <HeroSection />
      <Services />
      {/* You can add more sections here as needed */}
      {/* For example, you might want to add a Testimonials section, a Gallery section, etc. */}
      {/* Add more sections as needed */}
      <AboutUs />
      <VideoSection />
      <FeaturedWork />
      <Testimonials />
      <Contact />
      {/* You can add more sections here as needed */}
      {/* For example, you might want to add a Blog section, a Contact section, etc. */}
      {/* Add more sections as needed */}
      {/* For example, you might want to add a Portfolio section, a Contact section, etc. */}
      {/* You can also create separate components for each section and import them here */}
      
      {/* You can add more sections here as needed */}
      {/* For example, you might want to add a Testimonials section, a Gallery section, etc. */}
      {/* Add more sections as needed */}
      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed right-6 bottom-6 bg-[#C4A484] text-black w-12 h-12 flex items-center justify-center transition-all duration-300 cursor-pointer rounded-full whitespace-nowrap ${scrollPosition > 300 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  )
}

export default page