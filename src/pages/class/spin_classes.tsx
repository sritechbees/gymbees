import React from "react";

const spinClassesTopics = [
  {
    title: "Indoor Cycling Basics",
    description:
      "Get familiar with the fundamentals of indoor cycling, including bike setup, posture, and pedal techniques.",
  },
  {
    title: "HIIT Spin",
    description:
      "High-Intensity Interval Training spin classes that alternate between bursts of intense cycling and recovery.",
  },
  {
    title: "Endurance Building Spin",
    description:
      "Improve cardiovascular endurance with steady, long-duration cycling sessions designed to keep your heart rate elevated.",
  },
  {
    title: "Spin for Weight Loss",
    description:
      "A calorie-torching class that maximizes fat burning and boosts metabolism for effective weight loss.",
  },
  {
    title: "Spin for Strength and Power",
    description:
      "Build leg strength and cardiovascular power through resistance training and challenging cycling intervals.",
  },
];

const SpinClasses = () => {
  return (
    <div className="bg-gray-50 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Spin Classes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {spinClassesTopics.map((topic, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition duration-200"
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {topic.title}
            </h3>
            <p className="text-gray-600">{topic.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpinClasses;
