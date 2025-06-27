import React from 'react'

const AboutUs = () => {
  return (
    <section id="about" className="py-20 md:py-32 border-[1px] border-Yellow-500">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/5 mb-10 md:mb-0">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border border-[#C4A484]"></div>
                <img 
                  src="https://readdy.ai/api/search-image?query=professional%20photographer%20portrait%2C%20artistic%2C%20moody%20lighting%2C%20sophisticated%20look%2C%20dark%20background%20with%20subtle%20highlights%2C%20cinematic%20style%2C%20person%20with%20camera%2C%20creative%20professional%2C%20stylish%20outfit%2C%20confident%20pose&width=600&height=800&seq=6&orientation=portrait" 
                  alt="Photographer Portrait" 
                  className="relative z-10 w-full h-auto"
                />
              </div>
            </div>
            
            <div className="md:w-3/5 md:pl-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[#C4A484]">About Me</h2>
              <p className="text-lg mb-6 opacity-90">
                With over 15 years of experience capturing life's most precious moments, I've developed a distinctive style that blends cinematic aesthetics with emotional storytelling.
              </p>
              <p className="text-lg mb-6 opacity-90">
                My journey began in documentary photography, which taught me the art of authentic storytelling. Today, I specialize in creating timeless images that evoke emotion and preserve memories with artistic precision.
              </p>
              <p className="text-lg mb-8 opacity-90">
                Every shoot is approached with meticulous attention to detail, from lighting and composition to the subtle nuances that make each subject unique. My work has been featured in Vogue, Harper's Bazaar, and numerous international exhibitions.
              </p>
              <div className="border-l-4 border-[#C4A484] pl-6 italic text-xl opacity-80">
                "Photography is the art of freezing emotions and capturing stories that words cannot express."
              </div>
              <div className="mt-8">
                <img 
                  src="https://readdy.ai/api/search-image?query=elegant%20signature%20on%20dark%20background%2C%20artistic%20handwritten%20text%2C%20professional%20calligraphy%2C%20subtle%20gold%20ink%2C%20minimalist%20design%2C%20sophisticated%20look%2C%20personal%20branding%20element&width=300&height=100&seq=7&orientation=landscape" 
                  alt="Signature" 
                  className="h-16 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default AboutUs