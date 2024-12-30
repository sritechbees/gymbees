import React from "react";

const recoveryStretchingTopics = [
  {
    title: "Dynamic Stretching",
    description:
      "Involves moving your muscles and joints through their full range of motion to prepare for physical activity and increase blood flow.",
  },
  {
    title: "Static Stretching",
    description:
      "Stretching and holding a position for an extended period to lengthen muscles and improve flexibility, commonly used post-workout.",
  },
  {
    title: "Foam Rolling & Myofascial Release",
    description:
      "Use of foam rollers or massage tools to target muscle knots, release tension, and improve blood flow for better recovery.",
  },
  {
    title: "Yoga for Flexibility & Recovery",
    description:
      "Gentle yoga exercises designed to improve flexibility, promote muscle recovery, and aid in relaxation after physical activities.",
  },
  {
    title: "Active Recovery",
    description:
      "Low-intensity exercises or activities that help facilitate muscle recovery, increase circulation, and prevent stiffness.",
  },
];

const RecoveryStretching = () => {
  return (
    <div className="bg-gray-50 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Recovery & Stretching Classes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {recoveryStretchingTopics.map((topic, index) => (
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

export default RecoveryStretching;
