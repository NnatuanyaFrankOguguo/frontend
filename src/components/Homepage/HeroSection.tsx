'use client'
import React from 'react'

const HeroSection = () => {
  return (
    // Hero section with a full-screen background and border
    <div className="relative h-screen overflow-hidden border-[1px] border-blue-500">
        <div className="absolute inset-0 z-0">
            <div className="grid grid-cols-3 grid-rows-2 h-full gap-4 p-4 opacity-80">
                <div className="relative col-span-1 row-span-1 overflow-hidden transform hover:scale-105 transition-transform duration-700">
                    {/* Replace with his cloud image link whether aws or cloudinary */}
                    <img src="https://readdy.ai/api/search-image?query=professional%20portrait%20photography%20of%20a%20woman%20with%20dramatic%20lighting%2C%20moody%20atmosphere%2C%20cinematic%20look%2C%20shallow%20depth%20of%20field%2C%20high-end%20photography%2C%20dark%20background%20with%20subtle%20highlights%2C%20artistic%20composition&width=600&height=800&seq=1&orientation=portrait"  
                    alt="Portrait" 
                    className="w-full h-full object-cover object-top"
                    loading='lazy'/>
                </div>

                <div className="relative col-span-2 row-span-1 overflow-hidden transform hover:scale-105 transition-transform duration-700 delay-100">
                    <img 
                        src="https://readdy.ai/api/search-image?query=cinematic%20wedding%20photography%20with%20elegant%20couple%2C%20dramatic%20lighting%2C%20moody%20atmosphere%2C%20luxury%20setting%2C%20professional%20composition%2C%20emotional%20moment%2C%20dark%20background%20with%20golden%20highlights%2C%20artistic%20photography&width=800&height=500&seq=2&orientation=landscape" 
                        alt="Wedding" 
                        className="w-full h-full object-cover object-top"
                        loading='lazy'/>
                </div>

                <div className="relative col-span-1 row-span-1 overflow-hidden transform hover:scale-105 transition-transform duration-700 delay-200">
                    <img 
                        src="https://readdy.ai/api/search-image?query=high%20fashion%20photography%20with%20model%20in%20elegant%20pose%2C%20studio%20lighting%2C%20professional%20composition%2C%20dark%20background%20with%20dramatic%20shadows%2C%20artistic%20fashion%20photography%2C%20moody%20atmosphere%2C%20cinematic%20look&width=500&height=600&seq=3&orientation=portrait" 
                        alt="Fashion" 
                        className="w-full h-full object-cover object-top"
                        loading='lazy'/>
                </div>

                <div className="relative col-span-1 row-span-1 overflow-hidden transform hover:scale-105 transition-transform duration-700 delay-300">
                    <img 
                        src="https://readdy.ai/api/search-image?query=artistic%20black%20and%20white%20portrait%20photography%2C%20emotional%20expression%2C%20professional%20lighting%2C%20moody%20atmosphere%2C%20cinematic%20composition%2C%20dark%20background%20with%20subtle%20highlights%2C%20high%20contrast%2C%20fine%20art%20photography&width=500&height=600&seq=4&orientation=portrait" 
                        alt="Black and White" 
                        className="w-full h-full object-cover object-top"
                        loading='lazy'/>
                </div>

                <div className="relative col-span-1 row-span-1 overflow-hidden transform hover:scale-105 transition-transform duration-700 delay-400">
                <img 
                    src="https://readdy.ai/api/search-image?query=landscape%20photography%20with%20dramatic%20lighting%2C%20silhouette%2C%20moody%20atmosphere%2C%20cinematic%20look%2C%20professional%20composition%2C%20dark%20sky%20with%20golden%20sunset%2C%20artistic%20nature%20photography%2C%20emotional%20scene&width=600&height=500&seq=5&orientation=landscape" 
                    alt="Landscape" 
                    className="w-full h-full object-cover object-top"
                    loading='lazy'/>
                </div>
            </div>
        </div>

        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <div className="relative h-full flex flex-col justify-center items-center text-center z-20 px-6">
          <h1 className="text-5xl md:text-7xl font-serif mb-4 tracking-wider">Capturing Moments</h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8 opacity-90">Award-winning photography that tells your unique story through a cinematic lens</p>
          <a 
            href="/signup" 
            className="px-8 py-3 bg-[#C4A484] text-black font-medium tracking-wide hover:bg-[#D4B494] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap"
          >
            Start For Free
          </a>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <i className="fas fa-chevron-down text-2xl opacity-70"></i>
        </div>


    </div>
  )
}

export default HeroSection