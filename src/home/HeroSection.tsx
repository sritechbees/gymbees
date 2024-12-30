import Link from "next/link";
import React, { useState, useEffect } from "react";

function HeroSection() {
  // State to manage the current banner index
  const [currentBanner, setCurrentBanner] = useState(0);

  // Array of banner image URLs
  const banners = [
    "/gymbanner.jpg",
    "/gymbanner1.jpg",
    "/gymbanner2.jpg",
  ];

  // Automatically cycle through banners
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [banners.length]);

  return (
    <section className="relative bg-gray-800 text-white">
      {/* Background Image with smooth transition */}
      <div
        className="absolute inset-0 bg-cover h-screen mt- bg-center transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: `url('${banners[currentBanner]}')`,
        }}
      ></div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-40 text-center animate__animated animate__fadeIn">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white animate__animated animate__fadeIn animate__delay-1s">
          Transform Your Body, Transform Your Life
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white animate__animated animate__fadeIn animate__delay-2s">
          Join our community of fitness enthusiasts and achieve your goals today!
        </p>
        <div className="mt-8 space-x-4">
          {/* Buttons with hover effects */}
          <Link
            href="/membership"
            className="bg-[#eab308] text-gray-800 font-semibold px-6 py-3 rounded-xl transition duration-300 ease-in-out transform hover:bg-yellow-600 hover:scale-105"
          >
            Join Now
          </Link>
          <Link
            href="/classes"
            className="bg-transparent border-2 border-yellow-500 text-yellow-500 font-semibold px-6 py-3 rounded-xl transition duration-300 ease-in-out transform hover:bg-yellow-500 hover:text-gray-800 hover:scale-105"
          >
            Explore Classes
          </Link>
        </div>
      </div>

      {/* Links Section with hover and animation */}
      <div className="absolute top-[90vh] left-0 w-full bg-gray-900 bg-opacity-80 py-4 mt-1">
        <div className="container mx-auto px-4 flex flex-wrap justify-center space-x-6">
          <Link
            href="/about"
            className="text-gray-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
          >
            About Us
          </Link>
          <Link
            href="/trainersgym"
            className="text-gray-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
          >
            Our Trainers
          </Link>
          <Link
            href="/schedule"
            className="text-gray-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
          >
            View Schedule
          </Link>
          <Link
            href="/contact"
            className="text-gray-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
