const HeroSection = () => (
  <div
    className="bg-cover bg-center h-[550px] sm:h-[450px] md:h-[550px] flex items-center justify-center my-5 rounded-xl"
    style={{ backgroundImage: "url('/LandingPage/Hero-Section.jpg')" }}
  >
    <div className="text-center text-white font-poppins px-4">
      {/* Judul */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        Discover Your Next Adventure!
      </h1>
      {/* Subjudul */}
      <h2 className="text-sm sm:text-base md:text-lg mb-4">
        From dream destinations to detailed plans, we’ve got you covered.
      </h2>
      {/* Tombol */}
      <button className="px-4 sm:px-6 py-2 bg-sky-500 rounded-md hover:bg-sky-700 text-sm sm:text-base">
        Explore Now
      </button>
    </div>
  </div>
);

export default HeroSection;
