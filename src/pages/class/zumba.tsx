import React from "react";

const zumbaTopics = [
  {
    title: "Zumba Basics",
    description:
      "Get started with Zumba by learning the basic steps and rhythms of this fun and energetic dance workout.",
  },
  {
    title: "Zumba for Weight Loss",
    description:
      "A high-energy, calorie-torching workout that combines dance moves with aerobic exercises for effective weight loss.",
  },
  {
    title: "Zumba Toning",
    description:
      "Combine dance with light weights to sculpt and tone muscles while enjoying the energetic and fun atmosphere of Zumba.",
  },
  {
    title: "Zumba Gold",
    description:
      "A low-impact version of Zumba, designed for older adults, beginners, or those with physical limitations, focusing on gentle, slower movements.",
  },
  {
    title: "Zumba Step",
    description:
      "Take Zumba to the next level by incorporating step aerobics, adding an extra challenge for a full-body workout.",
  },
];

const Zumba = () => {
  return (
    <div className="bg-gray-50 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Zumba Classes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {zumbaTopics.map((topic, index) => (
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

export default Zumba;
