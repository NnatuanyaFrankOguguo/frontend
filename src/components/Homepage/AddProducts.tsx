import React from 'react'

const AddProducts = () => {
    const products = [
  {
    title: "Prints",
    image: "/images/prints.jpg",
  },
  {
    title: "Print Box",
    image: "/images/print-box.jpg",
  },
  {
    title: "Greeting Cards",
    image: "/images/greeting-cards.jpg",
  },
  {
    title: "Matted Frames",
    image: "/images/matted-frames.jpg",
  },
  {
    title: "Lay Flat Albums",
    image: "/images/lay-flat-albums.jpg",
  },
  {
    title: "Calendars",
    image: "/images/calendars.jpg",
  },
];
   return (
    <section className="py-20 px-6 bg-[#f6f2ed] text-center">
      <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Smart Store</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-8">
        Beautiful keepsakes and thoughtful add-ons for your photography experience.
      </p>
      <button className="mb-12 px-6 py-2 bg-black text-white rounded-full hover:scale-105 transition-transform">
        Learn More
      </button>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl p-2 sm:p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={product.image}
              alt={product.title}
              className="rounded-lg w-full h-28 sm:h-40 object-cover mb-2 sm:mb-4"
            />
            <h3 className="text-sm sm:text-base font-serif text-gray-800">{product.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AddProducts