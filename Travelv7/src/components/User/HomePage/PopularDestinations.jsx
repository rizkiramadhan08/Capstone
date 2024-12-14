import React from "react";

const destinations = [
  {
    title:
      "Chasing the sunrise above the clouds at Mount Bromo. Feel the magic",
    video: "https://www.youtube.com/embed/oHg5SJYRHA0", // Ganti dengan video Anda
  },
  {
    title: "Feel the heat and excitement as flames dance through the night",
    video: "https://www.youtube.com/embed/oHg5SJYRHA0", // Ganti dengan video Anda
  },
  {
    title: "Step into a hidden oasis where cascading waters",
    video: "https://www.youtube.com/embed/oHg5SJYRHA0", // Ganti dengan video Anda
  },
  {
    title: "Feel the waves, the breeze, and golden sands beneath",
    video: "https://www.youtube.com/embed/oHg5SJYRHA0", // Ganti dengan video Anda
  },
  {
    title: "Feel the waves, the breeze, and golden sands beneath",
    video: "https://www.youtube.com/embed/oHg5SJYRHA0", // Ganti dengan video Anda
  },
];

export default function PopularDestinations() {
  return (
    <section className="px-4 py-12 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Popular Destinations
      </h2>
      <div className="flex space-x-6 overflow-x-auto">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="flex-none w-[300px] bg-gray-100 rounded-lg shadow-lg relative group"
          >
            {/* Video Container */}
            <div className="relative overflow-hidden rounded-lg">
              <iframe
                src={destination.video}
                width="100%"
                height="500"
                className="rounded-lg"
                allow="autoplay; encrypted-media"
                title={`video-${index}`}
              />
              {/* Overlay for Text */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent px-4 py-2">
                <p className="text-sm text-white font-semibold">
                  {destination.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
