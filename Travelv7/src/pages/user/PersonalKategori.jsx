import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react"; // Import button dari Flowbite
import { FaArrowLeft } from "react-icons/fa";
const categories = [
  {
    name: "Nature",
    image: "/Category/nature.jpg",
  },
  {
    name: "Culture & Historical",
    image: "/Category/culture.jpg",
  },
  {
    name: "Ecotourism",
    image: "/Category/Ecotourism.jpg",
  },
];

const CategoryPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null); // State untuk melacak kategori aktif

  // const setCategory = useRecommendationStore((state) => state.setCategory);

  const handleCategorySelect = (category) => {
    if (selectedCategory === category.name) {
      // Jika kategori yang diklik sama dengan kategori yang dipilih, hapus seleksi
      setSelectedCategory(null);
    } else {
      // Jika kategori berbeda, pilih kategori tersebut
      setSelectedCategory(category.name);
    }

    // setCategory(category.name); // Simpan kategori di Zustand
    // navigate("/select-city"); // Redirect ke halaman pilih kota
  };

  return (
    <div className="min-h-screen bg-white px-6 sm:px-10 flex flex-col items-center">
      {/* Header */}
      <div className="flex items-center justify-between w-full max-w-full mt-6">
        <button
          className="text-black hover:text-blue-500 w"
          onClick={() => navigate(-1)} // Kembali ke halaman sebelumnya
        >
          <FaArrowLeft size={30} />
        </button>
        <h1 className="text-xl sm:text-2xl font-bold text-center">
          Choose Your Style of Adventure!
        </h1>
        <div className="w-6" /> {/* Spacer untuk keseimbangan */}
      </div>

      <p className="text-gray-600 text-center mt-2 max-w-lg">
        Everyone's got their own vibe, and so do you! Select what suits you, and
        we'll offer tailored recommendations.
      </p>

      {/* Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-8 w-full">
        {categories.map((category) => (
          <div
            key={category.name}
            onClick={() => handleCategorySelect(category)}
            className={`relative cursor-pointer group rounded-lg overflow-hidden transition ease-in-out duration-150 ${
              selectedCategory === category.name
                ? "bg-black bg-opacity-50"
                : "hover:shadow-lg"
            }`}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-40 sm:h-96 object-cover object-center"
            />
            <div
              className={`absolute inset-0 bg-black ${
                selectedCategory === category.name
                  ? "bg-opacity-50"
                  : "bg-opacity-25 group-hover:bg-opacity-50"
              } transition-opacity flex items-center justify-center`}
            >
              <h2 className="text-white text-lg sm:text-2xl font-poppins font-semibold">
                {category.name.toUpperCase()}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Ready Button */}
      <Button
        color="customBlue"
        size="xl"
        className="my-10 px-32 py-1"
        onClick={() => navigate("/home")}
      >
        I'm Ready to Explore!
      </Button>
    </div>
  );
};

export default CategoryPage;
