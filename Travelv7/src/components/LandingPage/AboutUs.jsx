import { Button } from "flowbite-react";

const AboutUs = () => (
  <div className="py-16">
    <div className="mx-auto grid lg:grid-cols-2 items-start gap-40">
      {/* Bagian Teks */}
      <div className="flex flex-col justify-start">
        <h2 className="text-sky-900 font-bold text-3xl mt-1 mb-10">TripWise</h2>

        {/* Gambar hanya muncul di bawah judul untuk mobile */}
        <div className="block lg:hidden mb-6">
          <img
            src="/LandingPage/TripWise.jpg"
            alt="About TripWise"
            className="rounded-lg shadow-md max-w-full h-auto object-cover"
          />
        </div>

        <p className="text-gray-700 text-base leading-6 text-justify">
          TripWise empowers travelers with access to sustainable destination
          guides, personalized routes, cultural exchanges, and environmental
          education. We aim to connect you with meaningful, responsible travel
          experiences that enrich your journey and promote sustainability.
          Explore the world with TripWise, where every trip makes a positive
          impact.
        </p>
        <Button color="customBlue" className="mt-8 w-44" size="lg">
          Let's Go Explore!
        </Button>
      </div>

      {/* Bagian Gambar (tetap berdampingan dengan teks pada desktop) */}
      <div className="hidden lg:flex justify-center">
        <img
          src="/LandingPage/TripWise.jpg"
          alt="About TripWise"
          className="rounded-lg shadow-md max-w-[608px] w-full h-[390px] object-cover object-center"
        />
      </div>
    </div>
  </div>
);

export default AboutUs;
