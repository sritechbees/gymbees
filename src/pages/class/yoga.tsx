import React from "react";

const yogaTopics = [
  {
    title: "Hatha Yoga",
    description: "A gentle practice focused on physical postures and breathing techniques, perfect for beginners.",
  },
  {
    title: "Vinyasa Yoga",
    description: "A dynamic flow linking movement with breath, enhancing strength and flexibility.",
  },
  {
    title: "Ashtanga Yoga",
    description: "A structured and disciplined yoga practice with a fixed sequence of poses.",
  },
  {
    title: "Restorative Yoga",
    description: "A calming yoga style with long holds and props to relax and de-stress.",
  },
  {
    title: "Power Yoga",
    description: "A vigorous, fitness-oriented yoga practice focusing on strength and endurance.",
  },
];

const YogaContent = () => {
  return (
    <div className="bg-gray-50 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Yoga Practices
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {yogaTopics.map((topic, index) => (
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

export default YogaContent;
