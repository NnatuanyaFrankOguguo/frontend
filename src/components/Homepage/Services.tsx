'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {

  const services = [
    {
    title: "Corporate Events",
    description: "Elegant documentation of corporate gatherings, ensuring your brand is represented with sophistication and style.",
    images: ["/images/corporate1.jpg", "/images/corporate2.jpg", "/images/corporate3.jpg"],
    cta: "Inquire Now",
  },
  {
    title: "Wedding Photography",
    description:
      "Capture your most precious moments with our artistic wedding photography.",
    images: ["/images/wedding1.jpg", "/images/wedding2.jpg", "/images/wedding3.jpg"],
    cta: "Book Now",
  },
  {
    title: "Studio Portraits",
    description:
      "Stylized studio sessions for professionals, families, and creatives.",
    images: ["/images/portrait1.jpg", "/images/portrait2.jpg", "/images/portrait3.jpg"],
    cta: "Schedule Session",
  },
  {
    title: "Event Photography",
    description:
      "Dynamic coverage of events, from concerts to conferences, capturing the energy and essence of the moment.",
    images: ["/images/event1.jpg", "/images/event2.jpg", "/images/event3.jpg"],
    cta: "Get a Quote",
  },
  {
    title: "Product Photography",
    description:
      "High-quality product shots that enhance your brand's visual appeal and drive sales.",
    images: ["/images/product1.jpg", "/images/product2.jpg", "/images/product3.jpg"],
    cta: "Contact Us",
  },
  // Add more service slides as needed
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % services.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [services.length]);

  return (
    <section className="relative w-full bg-[#f6f2ed] py-15 overflow-hidden">
      <div className="flex justify-center space-x-2 mb-6">
        {/* Navigation Buttons */}
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-black scale-110" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>


      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12"
        >
          {/* Alternating layout */}
          {current % 2 === 0 ? (
            <>
              <ImageGallery images={services[current].images} />
              <TextContent service={services[current]} />
            </>
          ) : (
            <>
              <TextContent service={services[current]} />
              <ImageGallery images={services[current].images} />
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function ImageGallery({ images }: { images: string[] }) {
  return (
    <div className="relative w-full md:w-1/2 h-[400px] flex justify-center items-center mb-8 md:mb-0">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt="Service Preview"
          className={`absolute w-40 h-56 object-cover rounded-xl shadow-lg transition-transform duration-500 ease-in-out 
            ${idx === 0 ? "z-30 transform -rotate-6 -translate-x-20" : ""}
            ${idx === 1 ? "z-20 transform rotate-3 translate-x-4" : ""}
            ${idx === 2 ? "z-10 transform -rotate-2 translate-x-24" : "hidden md:block"}`}
        />
      ))}
    </div>
  );
}

function TextContent({
  service,
}: {
  service: { title: string; description: string; cta: string };
}) {
  return (
    <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
        {service.title}
      </h2>
      <p className="text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
        {service.description}
      </p>
      <button className="inline-block bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition duration-300">
        {service.cta}
      </button>
    </div>
  );
}


export default Services