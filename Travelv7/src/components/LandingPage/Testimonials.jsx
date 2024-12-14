const Testimonials = () => {
  const testimonials = [
    {
      name: "Neil Sims",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      feedback:
        "Tripwise made my travel experience so much easier and more enjoyable! The destination and route recommendations were spot on and incredibly useful.",
    },
    {
      name: "Karen Nelson",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      feedback:
        "The AI assistant is amazing! I could get answers to all my travel questions quickly.",
    },
    {
      name: "Lana Byrd",
      image: "https://randomuser.me/api/portraits/women/55.jpg",
      feedback:
        "TripWise's AI assistant gave me personalized recommendations that perfectly matched my travel style. It felt like having a personal travel advisor!",
    },
    {
      name: "Lana Byrd",
      image: "https://randomuser.me/api/portraits/women/55.jpg",
      feedback:
        "TripWise's AI assistant gave me personalized recommendations that perfectly matched my travel style. It felt like having a personal travel advisor!",
    },
  ];

  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="py-12 px-6 md:px-20 bg-white overflow-hidden">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Why Travelers Love TripWise
      </h2>
      <div className="relative">
        {/* Gunakan class marquee untuk animasi */}
        <div className="marquee">
          {repeatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-blue-50 mx-4 p-6 rounded-lg shadow-md flex flex-col items-center text-center w-[380px] min-h-[250px] max-h-[300px] hover:scale-105 transition-transform duration-300"
            >
              <p className="text-gray-700 mb-4 line-clamp-3 w-[300px]">
                "{testimonial.feedback}"
              </p>
              <div className="flex items-center mt-10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <h3 className="text-lg font-medium">{testimonial.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
