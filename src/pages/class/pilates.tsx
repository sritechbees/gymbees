import React from "react";

const pilatesTopics = [
  {
    title: "Mat Pilates",
    description:
      "A beginner-friendly Pilates method focusing on bodyweight exercises to improve flexibility and core strength.",
  },
  {
    title: "Reformer Pilates",
    description:
      "Pilates using specialized equipment to increase resistance, targeting strength and flexibility.",
  },
  {
    title: "Pilates for Posture",
    description:
      "Strengthen your core and improve alignment to correct poor posture and reduce back pain.",
  },
  {
    title: "Pilates for Flexibility",
    description:
      "Controlled movements and stretches to improve overall flexibility and range of motion.",
  },
  {
    title: "Pilates for Injury Rehabilitation",
    description:
      "Gentle exercises aimed at strengthening muscles and preventing injuries while aiding recovery.",
  },
];

const Pilates = () => {
  return (
    <div className="bg-gray-50 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Pilates Classes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {pilatesTopics.map((topic, index) => (
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

export default Pilates;
