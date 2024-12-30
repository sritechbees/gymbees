import Link from "next/link";
import React from "react";

const topics = [
  { name: "Cardio", link: "/class/cardio" },
  { name: "Strength Training", link: "/class/strength_training" },
  { name: "Yoga", link: "/class/yoga" },
  { name: "CrossFit", link: "/class/crossfit" },
  { name: "Personal Training", link: "/class/personal_training" },
  { name: "Nutrition & Diet", link: "/class/nutrition_diet" },
  { name: "Pilates", link: "/class/pilates" },
  { name: "Martial Arts", link: "/class/martial_arts" },
  { name: "Spin Classes", link: "/class/spin_classes" },
  { name: "Functional Training", link: "/class/functional_training" },
  { name: "Zumba", link: "/class/zumba" },
  { name: "Recovery & Stretching", link: "/class/recovery_stretching" },
];

const ClassesHeader = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-black py-16">
      <h1 className="text-5xl font-extrabold text-center mb-8 text-white">
        Explore Our Gym Classes
      </h1>
      <p className="text-lg text-center text-gray-300 mb-12 max-w-3xl mx-auto">
        Discover a variety of classes tailored to meet your fitness needs. From strength training to yoga, find the perfect class to achieve your goals.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8">
        {topics.map((topic, index) => (
          <Link key={index} href={topic.link}>
            <div
              className="relative group bg-gradient-to-r from-gray-700 to-gray-900 p-6 shadow-lg rounded-xl border border-gray-600 cursor-pointer hover:shadow-2xl hover:scale-105 transform transition duration-300"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md"></div>

              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-xl font-semibold text-white text-center">
                  {topic.name}
                </h2>
                <p className="mt-2 text-sm text-gray-400 text-center">
                  Join our {topic.name} sessions elevate your fitness journey.
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ClassesHeader;
