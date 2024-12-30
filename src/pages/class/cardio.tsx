import React from "react";

const cardioTopics = [
  {
    title: "Treadmill Workouts",
    description: "Enhance your endurance with interval training, steady-state running, and hill workouts.",
  },
  {
    title: "HIIT",
    description: "Boost your fitness with high-intensity interval training designed for quick results.",
  },
  {
    title: "Cycling",
    description: "Build stamina and leg strength with fun and challenging cycling workouts.",
  },
  {
    title: "Rowing",
    description: "Engage your full body with low-impact cardio on a rowing machine.",
  },
  {
    title: "Outdoor Running",
    description: "Take your training outdoors with sprints, long-distance runs, and endurance training.",
  },
];

const CardioContent = () => {
  return (
    <div className="bg-gray-50 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Cardio Workouts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {cardioTopics.map((topic, index) => (
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

export default CardioContent;
