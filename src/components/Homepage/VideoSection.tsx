'use client'
import React from 'react'

const VideoSection = () => {

  const features = [
  {
    title: 'Clips Inside Your Gallery',
    desc: 'Show clips of up to 3 minutes alongside your photos for a dynamic experience.',
    img: '/video-clips.jpg',
  },
  {
    title: 'Organize Featured Videos Into Scenes',
    desc: 'Upload up to 90 -minute films with titles and descriptions for easy navigation.',
    img: '/video-scenes.jpg',
  },
  {
    title: 'Enjoy High‑Quality Presentation',
    desc: 'HD and 4K video support for gallery playback.',
    img: '/video-quality.jpg',
  },
  {
    title: 'Boost Your Social Media Presence',
    desc: 'Deliver social‑media‑ready reels for quick download and sharing.',
    img: '/video-social.jpg',
  },
];


  return (
     <section className="bg-[#f6f2ed] py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Side: Video Collage */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 grid-rows-3 gap-4 relative">
          {/* Layered Collage Style */}
          <div className="col-span-2 row-span-2 relative z-10">
            <video
              className="w-full h-full object-cover rounded-lg shadow-lg"
              muted
              autoPlay
              loop
              playsInline
            >
              <source src="/video1.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="relative z-20 transform -translate-y-6 translate-x-4">
            <video
              className="w-full h-40 object-cover rounded-md shadow-md"
              muted
              autoPlay
              loop
              playsInline
            >
              <source src="/video2.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="relative z-0 transform translate-y-4 -translate-x-2">
            <video
              className="w-full h-40 object-cover rounded-md shadow-md"
              muted
              autoPlay
              loop
              playsInline
            >
              <source src="/video3.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="col-span-2 relative z-10">
            <video
              className="w-full h-48 object-cover rounded-lg shadow-lg"
              muted
              autoPlay
              loop
              playsInline
            >
              <source src="/video4.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Right Side: Text Block */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <span className="inline-block bg-[#2f4a3f] text-white text-xs font-semibold uppercase px-4 py-1 rounded-full mb-4 tracking-widest">
            Coming Soon
          </span>
          <h2 className="text-4xl font-serif font-medium text-gray-900 mb-6">
            Video Delivery
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Where We blend photography and film to craft immersive experiences that communicate emotion, artistry, and vision. Our content is more than visual—it's a reflection of your brand’s soul.
          </p>
          <a
            href="/about"
            className="inline-block bg-gray-900 text-white text-sm font-semibold tracking-wide uppercase px-8 py-4 rounded-full hover:bg-gray-800 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

export default VideoSection