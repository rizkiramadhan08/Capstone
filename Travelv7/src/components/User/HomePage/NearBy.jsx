import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom"; // Tambahkan Link untuk navigasi
import destinations from "../../../data/destinationData"; // Import data dari file

const NearByDestinations = () => {
  const [startIndex, setStartIndex] = useState(0); // Index awal untuk carousel
  const itemsToShow = 4; // Jumlah item yang ingin ditampilkan

  const nextItem = () => {
    setStartIndex(
      (prevIndex) => (prevIndex + 1) % destinations.length // Geser 1 item ke depan
    );
  };

  const prevItem = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + destinations.length) % destinations.length // Geser 1 item ke belakang
    );
  };

  // Ambil 4 kartu berdasarkan startIndex
  const carouselItems = Array.from({ length: itemsToShow }, (_, i) => {
    const index = (startIndex + i) % destinations.length;
    return destinations[index];
  });

  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-6">Near By Destinations</h2>
      <div className="relative flex items-center">
        {/* Tombol Previous */}
        <button
          onClick={prevItem}
          className="mr-2 left-0 bg-gray-800 text-white p-2 rounded-full z-10"
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Konten Carousel */}
        <div className="flex gap-4 overflow-hidden justify-center w-full">
          {carouselItems.map((destination) => (
            <div key={destination.id}>
              <div className="border border-x-gray-100 rounded-lg shadow-lg p-4 bg-white">
                {/* Tautan pada gambar */}
                <Link to={`/home/${destination.id}`}>
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-[330px] h-[180px] rounded-md hover:opacity-90 transition"
                  />
                </Link>
                <div className="mt-2">
                  {/* Tautan pada nama destinasi */}
                  <h5 className="text-md font-bold leading-tight line-clamp-1 text-sky-900 dark:text-white mb-1">
                    <Link to={`/home/${destination.id}`}>
                      {destination.name}
                    </Link>
                  </h5>
                  <p className="text-sm leading-tight text-gray-700 dark:text-gray-400">
                    {destination.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Next */}
        <button
          onClick={nextItem}
          className="ml-2 right-0 bg-gray-800 text-white p-2 rounded-full z-10"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default NearByDestinations;
