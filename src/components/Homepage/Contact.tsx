import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[#C4A484]">Get in Touch</h2>
              <p className="text-lg mb-8 opacity-90">
                I'd love to discuss your photography needs and how we can create something extraordinary together. Whether you're planning a wedding, need professional portraits, or have a commercial project in mind, let's start a conversation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-[#C4A484] text-xl mt-1 mr-4">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Studio Address</h3>
                    <p className="opacity-80">123 Artistic Avenue, New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#C4A484] text-xl mt-1 mr-4">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="opacity-80">contact@jameswilsonphotography.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#C4A484] text-xl mt-1 mr-4">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="opacity-80">+1 (212) 555-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#C4A484] text-xl mt-1 mr-4">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Studio Hours</h3>
                    <p className="opacity-80">Monday - Friday: 10am - 6pm</p>
                    <p className="opacity-80">Weekends: By appointment only</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="font-medium mb-4">Follow Me</h3>
                <div className="flex space-x-6">
                  <a href="#" className="text-2xl text-[#F5F5F5] hover:text-[#C4A484] transition-colors cursor-pointer">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-2xl text-[#F5F5F5] hover:text-[#C4A484] transition-colors cursor-pointer">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="text-2xl text-[#F5F5F5] hover:text-[#C4A484] transition-colors cursor-pointer">
                    <i className="fab fa-pinterest"></i>
                  </a>
                  <a href="#" className="text-2xl text-[#F5F5F5] hover:text-[#C4A484] transition-colors cursor-pointer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-2xl text-[#F5F5F5] hover:text-[#C4A484] transition-colors cursor-pointer">
                    <i className="fab fa-behance"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <form className="bg-black/30 p-8">
                <h3 className="text-2xl font-serif mb-6">Send a Message</h3>
                
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 opacity-90">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-black/50 border border-gray-700 p-3 focus:border-[#C4A484] focus:outline-none transition-colors text-sm"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 opacity-90">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-black/50 border border-gray-700 p-3 focus:border-[#C4A484] focus:outline-none transition-colors text-sm"
                    placeholder="Your email address"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="service" className="block mb-2 opacity-90">Service Interest</label>
                  <div className="relative">
                    <select 
                      id="service"
                      className="w-full bg-black/50 border border-gray-700 p-3 focus:border-[#C4A484] focus:outline-none transition-colors appearance-none text-sm"
                    >
                      <option value="">Select a service</option>
                      <option value="wedding">Wedding Photography</option>
                      <option value="portrait">Portrait Session</option>
                      <option value="fashion">Fashion & Editorial</option>
                      <option value="event">Event Coverage</option>
                      <option value="commercial">Commercial Work</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-[#C4A484]">
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 opacity-90">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-black/50 border border-gray-700 p-3 focus:border-[#C4A484] focus:outline-none transition-colors text-sm"
                    placeholder="Tell me about your project or inquiry"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-[#C4A484] text-black py-3 font-medium hover:bg-[#D4B494] transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact