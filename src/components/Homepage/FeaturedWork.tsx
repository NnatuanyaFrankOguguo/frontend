'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

interface ImageItem {
  id: number
  src: string
  title: string
  description: string
  category: string
}

interface Props {
  images: ImageItem[]
  onImageClick: (image: ImageItem) => void
}


const FeaturedWork: React.FC<Props> = ({ onImageClick }) => {
  const photos = [
    {
      id: 1,
      src: "https://readdy.ai/api/search-image?query=professional%20portrait%20photography%20of%20a%20young%20woman%20with%20dramatic%20lighting%20against%20a%20dark%20background%2C%20cinematic%20mood%2C%20shallow%20depth%20of%20field%2C%20high-end%20camera%20quality%2C%20artistic%20composition&width=600&height=800&seq=1&orientation=portrait",
      title: "Dramatic Portrait",
      description: "A cinematic portrait with dramatic lighting and mood",
      category: "portrait"
    },
    {
      id: 2,
      src: "https://readdy.ai/api/search-image?query=stunning%20landscape%20photography%20of%20mountains%20at%20sunset%20with%20dramatic%20clouds%2C%20golden%20hour%20lighting%2C%20panoramic%20view%2C%20ultra%20high%20definition%2C%20professional%20photography%20with%20perfect%20exposure&width=800&height=500&seq=2&orientation=landscape",
      title: "Mountain Sunset",
      description: "Breathtaking mountain landscape captured during golden hour",
      category: "landscape"
    },
    {
      id: 3,
      src: "https://readdy.ai/api/search-image?query=urban%20street%20photography%20in%20black%20and%20white%2C%20capturing%20authentic%20city%20life%2C%20people%20walking%2C%20dramatic%20shadows%2C%20high%20contrast%2C%20professional%20documentary%20style%20photography&width=700&height=700&seq=3&orientation=squarish",
      title: "Urban Life",
      description: "Authentic street photography capturing the essence of city life",
      category: "street"
    },
    {
      id: 4,
      src: "https://readdy.ai/api/search-image?query=abstract%20photography%20with%20colorful%20light%20patterns%2C%20long%20exposure%20photography%2C%20vibrant%20colors%20against%20black%20background%2C%20artistic%20composition%2C%20professional%20studio%20lighting&width=800&height=500&seq=4&orientation=landscape",
      title: "Light Patterns",
      description: "Abstract long exposure photography with vibrant colors",
      category: "abstract"
    },
    {
      id: 5,
      src: "https://readdy.ai/api/search-image?query=modern%20architecture%20photography%20with%20dramatic%20perspective%2C%20geometric%20patterns%2C%20minimalist%20composition%2C%20perfect%20symmetry%2C%20professional%20architectural%20photography%20with%20dramatic%20lighting&width=600&height=800&seq=5&orientation=portrait",
      title: "Geometric Architecture",
      description: "Modern architectural photography highlighting geometric patterns",
      category: "architecture"
    },
    {
      id: 6,
      src: "https://readdy.ai/api/search-image?query=close-up%20portrait%20photography%20with%20perfect%20bokeh%2C%20shallow%20depth%20of%20field%2C%20soft%20natural%20lighting%2C%20emotional%20expression%2C%20professional%20portrait%20with%20cinematic%20color%20grading&width=700&height=700&seq=6&orientation=squarish",
      title: "Emotional Portrait",
      description: "Intimate portrait capturing genuine emotion with beautiful bokeh",
      category: "portrait"
    },
    {
      id: 7,
      src: "https://readdy.ai/api/search-image?query=dramatic%20seascape%20photography%20with%20stormy%20clouds%20and%20crashing%20waves%2C%20long%20exposure%2C%20moody%20atmosphere%2C%20professional%20landscape%20photography%20with%20perfect%20composition&width=800&height=500&seq=7&orientation=landscape",
      title: "Stormy Seascape",
      description: "Dramatic seascape with stormy atmosphere and long exposure",
      category: "landscape"
    },
    {
      id: 8,
      src: "https://readdy.ai/api/search-image?query=candid%20street%20photography%20capturing%20decisive%20moment%2C%20authentic%20human%20interaction%2C%20perfect%20timing%2C%20documentary%20style%2C%20professional%20street%20photography%20with%20beautiful%20light&width=700&height=700&seq=8&orientation=squarish",
      title: "Decisive Moment",
      description: "Candid street photography capturing a perfect moment in time",
      category: "street"
    },
    {
      id: 9,
      src: "https://readdy.ai/api/search-image?query=abstract%20macro%20photography%20of%20water%20droplets%20with%20refraction%2C%20extreme%20close-up%2C%20vibrant%20colors%2C%20perfect%20clarity%2C%20professional%20macro%20photography%20with%20creative%20lighting&width=600&height=800&seq=9&orientation=portrait",
      title: "Water Abstractions",
      description: "Abstract macro photography exploring water and light",
      category: "abstract"
    },
    {
      id: 10,
      src: "https://readdy.ai/api/search-image?query=historic%20architecture%20photography%20in%20dramatic%20black%20and%20white%2C%20perfect%20symmetry%2C%20strong%20contrast%2C%20professional%20architectural%20photography%20with%20beautiful%20composition&width=800&height=500&seq=10&orientation=landscape",
      title: "Historic Symmetry",
      description: "Black and white architectural photography highlighting symmetry",
      category: "architecture"
    },
    {
      id: 11,
      src: "https://readdy.ai/api/search-image?query=environmental%20portrait%20photography%20of%20an%20artist%20in%20their%20studio%2C%20natural%20lighting%20through%20windows%2C%20authentic%20moment%2C%20professional%20documentary%20portrait%20with%20beautiful%20composition&width=600&height=800&seq=11&orientation=portrait",
      title: "The Artist",
      description: "Environmental portrait capturing an artist in their creative space",
      category: "portrait"
    },
    {
      id: 12,
      src: "https://readdy.ai/api/search-image?query=aerial%20landscape%20photography%20of%20winding%20river%20through%20forest%2C%20drone%20perspective%2C%20morning%20mist%2C%20golden%20light%2C%20professional%20landscape%20photography%20with%20perfect%20exposure&width=800&height=500&seq=12&orientation=landscape",
      title: "Aerial Wilderness",
      description: "Breathtaking aerial view of a winding river through misty forest",
      category: "landscape"
    }
  ];
  return (
    <section className="relative bg-[#111111] bg-gradient-to-b from-[#1a1a1a] via-[#111] to-black py-16 px-4 md:px-12">
      {/* Optional background vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/60 to-black opacity-60 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto text-white">
        <h2 className="text-3xl md:text-5xl font-serif font-light mb-8 text-center tracking-wide">
          Featured Works
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-white/30",
            bulletActiveClass: "swiper-pagination-bullet-active !bg-white !shadow-md",
          }}
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 1.2 },
            1024: { slidesPerView: 1.5 },
          }}
          className="group"
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg transition duration-500 hover:shadow-2xl group-hover:scale-[0.98] bg-black/30">
                {/* Image */}
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-[65vh] object-cover object-center transition duration-700 ease-in-out hover:scale-105 rounded-2xl"
                />

                {/* Overlay content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end transition-all duration-700">
                  <span className="text-xs uppercase text-gray-300 tracking-widest mb-2">
                    {photo.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-2 animate-fadeInUp">
                    {photo.title}
                  </h3>
                  <p className="text-sm text-gray-200 mb-4 animate-fadeInUp delay-150">
                    {photo.description}
                  </p>

                  {/* CTA on hover */}
                  <button className="text-sm text-white/70 hover:text-white underline underline-offset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-fadeInUp delay-300">
                    View Details →
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper pagination styling */}
        <div className="swiper-pagination mt-8 flex justify-center gap-2"></div>
      </div>
    </section>
  )
}

export default FeaturedWork