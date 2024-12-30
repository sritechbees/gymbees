import React from "react";

const functionalTrainingTopics = [
  {
    title: "Core Stability",
    description:
      "Strengthen the muscles of the core to improve stability, posture, and overall performance in daily activities.",
  },
  {
    title: "Mobility & Flexibility",
    description:
      "Improve joint flexibility and range of motion to perform functional movements with less risk of injury.",
  },
  {
    title: "Strength Training for Everyday Movement",
    description:
      "Build strength to help with everyday tasks, such as lifting, carrying, and bending, while reducing the risk of injury.",
  },
  {
    title: "Balance & Coordination",
    description:
      "Exercises to enhance balance and coordination, helping to prevent falls and improve motor control.",
  },
  {
    title: "Conditioning & Endurance",
    description:
      "Improve cardiovascular fitness and stamina for better endurance during daily tasks and physical activities.",
  },
];

const FunctionalTraining = () => {
  return (
    <div className="bg-gray-50 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Functional Training Classes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {functionalTrainingTopics.map((topic, index) => (
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

export default FunctionalTraining;
