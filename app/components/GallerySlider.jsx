"use client";
import { useRef } from "react";

const galleryItems = [
  {
    title: "Kitchen",
    image: "/gallery.png",
  },
  {
    title: "Bedroom",
    image: "/gallery.png",
  },
  {
    title: "Bathroom",
     image: "/gallery.png",
  },
  {
    title: "Living Room",
    image: "/gallery.png",
  },
];

export default function GallerySlider() {
  const scrollRef = useRef();

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-12 items-start">
        {/* Left Text */}
        <div>
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4">
            Gallery
          </p>
          <h3 className="text-2xl font-semibold text-gray-900 leading-snug">
            Check out our blog<br />to get inspired.
          </h3>
        </div>

        {/* Scrollable image slider */}
        <div className="overflow-x-auto">
          <div
            ref={scrollRef}
            className="flex gap-8 scroll-smooth overflow-x-auto snap-x snap-mandatory pb-4"
          >
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="snap-start shrink-0 w-[280px] sm:w-[300px] md:w-[340px] transition-transform"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[320px] object-cover rounded"
                />
                <p className="text-center mt-3 text-base font-medium text-black">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {/* Active bar (mocked as static underline under 1st item) */}
          <div className="mt-4 flex justify-start gap-1 px-1">
            <div className="h-[2px] w-16 bg-black" />
            <div className="h-[2px] w-16 bg-gray-200" />
            <div className="h-[2px] w-16 bg-gray-200" />
          </div>
        </div>
      </div>
    </section>
  );
}
