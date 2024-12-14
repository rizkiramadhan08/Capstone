import { List } from "flowbite-react";

const WhySection = () => (
  <div className="py-16 ">
    <div className=" grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
      {/* Bagian Gambar */}
      <div className="flex justify-center">
        <img
          src="/LandingPage/TripWise.jpg" // Ganti dengan path gambar yang sesuai
          alt="Why TripWise"
          className="rounded-lg shadow-md max-w-full"
        />
      </div>

      {/* Bagian Konten */}
      <div>
        <h3 className="text-blue-600 font-semibold mb-2">Why TripWise</h3>
        <h2 className="text-3xl font-bold mb-4">
          We Are Providing The Best Travel Experience For You
        </h2>
        <p className="text-gray-600 mb-6">
          Your ultimate travel companion for personalized adventures,
          hassle-free planning, and unforgettable experiences across Indonesia.
        </p>
      </div>
    </div>
  </div>
);

export default WhySection;
