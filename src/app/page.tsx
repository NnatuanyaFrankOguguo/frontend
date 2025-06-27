import React from 'react'
import HeroSection from '@/components/Homepage/HeroSection'
import VideoSection from '@/components/Homepage/VideoSection'
import AboutUs from '@/components/Homepage/AboutUs'
import Services from '@/components/Homepage/Services'

const page = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <VideoSection />
      <Services />
      {/* Add more sections as needed */}
      {/* For example, you might want to add a Portfolio section, a Contact section, etc. */}
      {/* You can also create separate components for each section and import them here */}
      
      {/* You can add more sections here as needed */}
      {/* For example, you might want to add a Testimonials section, a Gallery section, etc. */}
      {/* Add more sections as needed */}
    </div>
  )
}

export default page