import { FaClock, FaUsers, FaGlobeAsia } from "react-icons/fa";

export default function IntroSection() {
  return (
    <section className="bg-gradient-to-r from-white to-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Intro Text */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Namaste. I am Aradhye Gurujiiii.
        </h2>
        <p className="text-lg md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
          Your trusted guide in Vastu and Vedic Astrology.
          With over 15+ years of experience and having helped 7000+ individuals,
          I provide clarity through Patrika readings, spiritual Poojas,
          and Shastra-based Vastu remedies.
          Vedbramha now operates from 3 dedicated centers, guiding seekers toward energetic harmony and karmic alignment.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white shadow-md p-6 rounded-xl flex flex-col items-center hover:shadow-xl transition">
            <div className="text-yellow-600 text-4xl mb-2">
              <FaClock />
            </div>
            <h4 className="text-xl font-semibold text-gray-800">15+ Years</h4>
            <p className="text-sm text-gray-500">Of Experience</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl flex flex-col items-center hover:shadow-xl transition">
            <div className="text-green-600 text-4xl mb-2">
              <FaUsers />
            </div>
            <h4 className="text-xl font-semibold text-gray-800">7000+</h4>
            <p className="text-sm text-gray-500">Satisfied Customers</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl flex flex-col items-center hover:shadow-xl transition">
            <div className="text-blue-600 text-4xl mb-2">
              <FaGlobeAsia />
            </div>
            <h4 className="text-xl font-semibold text-gray-800">3+</h4>
            <p className="text-sm text-gray-500">Offices Worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
}
